import { NextRequest, NextResponse } from 'next/server';

interface InquiryPayload {
    fullName: string;
    email: string;
    phone: string;
    company: string;
    country?: string;
    businessType: string;
    quantity: string;
    targetProduct?: string;
    message?: string;
    _hp_company_fax?: string;
    sourceLocation?: string;
    attribution?: {
        utm_source?: string;
        utm_medium?: string;
        utm_campaign?: string;
        utm_term?: string;
        utm_content?: string;
        gclid?: string;
        landing_page?: string;
        referrer?: string;
    };
    clientTimestamp?: string;
}

export async function POST(req: NextRequest) {
    try {
        const body: InquiryPayload = await req.json();

        // 1. Anti-spam honeypot verification
        if (body._hp_company_fax && body._hp_company_fax.trim() !== '') {
            // Silently swallow bot submission
            console.warn('[Spam Detected] Honeypot triggered:', body.email);
            return NextResponse.json({ success: true, message: 'Inquiry received.' });
        }

        // 2. Validate essential fields
        if (!body.email || !body.fullName || !body.phone) {
            return NextResponse.json(
                { success: false, message: 'Please provide your full name, business email, and phone number.' },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(body.email)) {
            return NextResponse.json(
                { success: false, message: 'Please provide a valid business email address.' },
                { status: 400 }
            );
        }

        const inquirySummary = {
            id: `INQ-${Date.now()}`,
            timestamp: new Date().toISOString(),
            contact: {
                fullName: body.fullName,
                email: body.email,
                phone: body.phone,
                company: body.company,
                country: body.country || 'Not specified'
            },
            intent: {
                businessType: body.businessType,
                quantity: body.quantity,
                targetProduct: body.targetProduct || 'Not specified',
                message: body.message || 'No additional notes'
            },
            attribution: body.attribution || {},
            sourceLocation: body.sourceLocation || 'website'
        };

        console.info('[B2B Inquiry Received]', JSON.stringify(inquirySummary, null, 2));

        // 3. Resend Email Integration (Configured via RESEND_API_KEY)
        if (process.env.RESEND_API_KEY) {
            try {
                const recipientEmail = process.env.SALES_NOTIFICATION_EMAIL || 'sales@example.com';
                const resendResponse = await fetch('https://api.resend.com/emails', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        from: process.env.EMAIL_FROM || 'B2B Leads <onboarding@resend.dev>',
                        to: [recipientEmail],
                        subject: `🚨 [New B2B Lead] ${body.quantity} - ${body.company} (${body.country || 'Global'})`,
                        html: `
                            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
                                <h2 style="color: #0f172a; border-bottom: 2px solid #f59e0b; padding-bottom: 8px;">New B2B Factory Inquiry</h2>
                                <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                                    <tr><td style="padding: 8px; font-weight: bold; width: 35%;">Buyer Name:</td><td style="padding: 8px;">${body.fullName}</td></tr>
                                    <tr><td style="padding: 8px; font-weight: bold;">Work Email:</td><td style="padding: 8px;"><a href="mailto:${body.email}">${body.email}</a></td></tr>
                                    <tr><td style="padding: 8px; font-weight: bold;">WhatsApp / Phone:</td><td style="padding: 8px;">${body.phone}</td></tr>
                                    <tr><td style="padding: 8px; font-weight: bold;">Company & Country:</td><td style="padding: 8px;">${body.company} (${body.country || 'N/A'})</td></tr>
                                    <tr><td style="padding: 8px; font-weight: bold;">Business Type:</td><td style="padding: 8px;">${body.businessType}</td></tr>
                                    <tr><td style="padding: 8px; font-weight: bold;">Order Volume:</td><td style="padding: 8px; color: #b45309; font-weight: bold;">${body.quantity}</td></tr>
                                    <tr><td style="padding: 8px; font-weight: bold;">Target Model:</td><td style="padding: 8px;">${body.targetProduct || 'N/A'}</td></tr>
                                    <tr><td style="padding: 8px; font-weight: bold;">Custom Notes:</td><td style="padding: 8px; background: #f8fafc; border-radius: 4px;">${body.message || 'None'}</td></tr>
                                    <tr><td style="padding: 8px; font-weight: bold;">Traffic Source:</td><td style="padding: 8px;">${body.attribution?.utm_source || 'Direct'} / ${body.attribution?.utm_campaign || 'N/A'} (gclid: ${body.attribution?.gclid || 'none'})</td></tr>
                                </table>
                            </div>
                        `
                    })
                });

                if (!resendResponse.ok) {
                    console.error('Resend API error:', await resendResponse.text());
                }
            } catch (emailErr) {
                console.error('Failed to dispatch notification email:', emailErr);
            }
        }

        // 4. Webhook Forwarding (Feishu / Lark / WeChat Work / DingTalk / Slack)
        if (process.env.INQUIRY_WEBHOOK_URL) {
            try {
                await fetch(process.env.INQUIRY_WEBHOOK_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        msg_type: 'text',
                        content: {
                            text: `🔔 [New B2B Lead Alert]\nCompany: ${body.company} (${body.country || 'Global'})\nContact: ${body.fullName} (${body.email} | ${body.phone})\nRole: ${body.businessType}\nQuantity: ${body.quantity}\nProduct: ${body.targetProduct || 'General'}\nUTM Source: ${body.attribution?.utm_source || 'Direct'}\nNote: ${body.message || 'None'}`
                        }
                    })
                });
            } catch (webhookErr) {
                console.error('Failed to post to webhook:', webhookErr);
            }
        }

        return NextResponse.json({
            success: true,
            inquiryId: inquirySummary.id,
            message: 'Inquiry received. A dedicated B2B Key Account Manager will reply within 4 hours.'
        });
    } catch (error) {
        console.error('Error processing inquiry:', error);
        return NextResponse.json(
            { success: false, message: 'Server error processing inquiry. Please try again or message WhatsApp.' },
            { status: 500 }
        );
    }
}
