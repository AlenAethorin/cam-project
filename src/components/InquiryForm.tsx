'use client';

import React, { useState, useEffect } from 'react';
import { getStoredAttribution, pushDataLayerEvent } from '@/lib/tracking';
import { Send, CheckCircle2, AlertCircle, ShieldCheck, Clock, DownloadCloud } from 'lucide-react';

interface InquiryFormProps {
    defaultProduct?: string;
    sourceLocation?: string;
    compact?: boolean;
    onSuccess?: () => void;
}

export function InquiryForm({
    defaultProduct = '',
    sourceLocation = 'general_page',
    compact = false,
    onSuccess
}: InquiryFormProps) {
    const [mountedAt, setMountedAt] = useState<number>(0);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        country: '',
        businessType: 'Distributor',
        quantity: 'Sample (<10 pcs)',
        targetProduct: defaultProduct,
        message: '',
        // Honeypot field - must stay empty
        _hp_company_fax: ''
    });

    useEffect(() => {
        setMountedAt(Date.now());
    }, []);

    useEffect(() => {
        if (defaultProduct) {
            setFormData(prev => ({ ...prev, targetProduct: defaultProduct }));
        }
    }, [defaultProduct]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus('idle');
        setErrorMessage('');

        // Honeypot check
        if (formData._hp_company_fax) {
            setTimeout(() => {
                setLoading(false);
                setStatus('success');
            }, 600);
            return;
        }

        // Fast bot check (< 1.2 seconds submission)
        const timeElapsed = Date.now() - mountedAt;
        if (timeElapsed < 1200) {
            setLoading(false);
            setErrorMessage('Form submitted too quickly. Please try again.');
            return;
        }

        const attribution = getStoredAttribution();

        const payload = {
            ...formData,
            sourceLocation,
            attribution,
            clientTimestamp: new Date().toISOString()
        };

        try {
            const res = await fetch('/api/inquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await res.json();

            if (!res.ok || !data.success) {
                throw new Error(data.message || 'Failed to submit inquiry. Please try again.');
            }

            setStatus('success');

            pushDataLayerEvent('b2b_inquiry_submit', {
                business_type: formData.businessType,
                order_quantity: formData.quantity,
                target_product: formData.targetProduct,
                company: formData.company,
                country: formData.country,
                source_location: sourceLocation
            });

            if (onSuccess) {
                onSuccess();
            }
        } catch (err: unknown) {
            setStatus('error');
            setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please reach us via WhatsApp.');
        } finally {
            setLoading(false);
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-white border-2 border-emerald-500/40 rounded-2xl p-6 md:p-8 text-center text-slate-800 shadow-xl">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Successfully Received!</h3>
                <p className="text-slate-600 text-sm md:text-base max-w-lg mx-auto mb-6">
                    Thank you, <span className="text-emerald-700 font-semibold">{formData.fullName || 'Partner'}</span>. Our overseas B2B Key Account Director will review your specifications and email you the official quotation & technical PDF datasheet within <span className="text-emerald-700 font-bold">4 hours</span>.
                </p>

                <div className="bg-emerald-50/70 rounded-xl p-4 max-w-md mx-auto text-left text-xs md:text-sm text-slate-700 space-y-2 border border-emerald-100 mb-6">
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Estimated Response Time: <strong>Within 4 Business Hours</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                        <DownloadCloud className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Included: <strong>Tiered Price List, Spec Sheets & Sample Policy</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Direct Factory Guarantee: <strong>NDA Protected & Low MOQ OEM</strong></span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                        href="https://wa.me/8613800000000?text=Hi%20NEXCAM%2C%20I%20just%20submitted%20an%20inquiry%20for%20solar%20security%20cameras."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition-all shadow-sm"
                    >
                        <span>Need Instant Reply? Chat on WhatsApp</span>
                    </a>
                    <button
                        type="button"
                        onClick={() => {
                            setStatus('idle');
                            setFormData(prev => ({ ...prev, message: '' }));
                        }}
                        className="px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium transition-colors"
                    >
                        Submit Another Inquiry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={`bg-white border border-slate-200 rounded-2xl ${
                compact ? 'p-5' : 'p-6 md:p-8'
            } shadow-xl relative`}
        >
            {/* Honeypot field (hidden from real users) */}
            <div className="hidden" aria-hidden="true">
                <label htmlFor="_hp_company_fax">Do not fill this</label>
                <input
                    type="text"
                    id="_hp_company_fax"
                    name="_hp_company_fax"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData._hp_company_fax}
                    onChange={handleChange}
                />
            </div>

            <div className="flex items-center justify-between mb-4">
                <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 flex items-center gap-2">
                        <span>Request B2B Quote & Catalog</span>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                            Source Factory Direct
                        </span>
                    </h3>
                    <p className="text-slate-500 text-xs md:text-sm mt-1">
                        Dispatched in 48h for samples • Low MOQ 50 pcs for OEM custom logo
                    </p>
                </div>
            </div>

            {status === 'error' && (
                <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs md:text-sm flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{errorMessage}</span>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="e.g. David Miller"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                    />
                </div>

                {/* Business Email */}
                <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Business Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="david@securityco.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                    />
                </div>

                {/* WhatsApp / Phone */}
                <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        WhatsApp / Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                    />
                </div>

                {/* Company & Country */}
                <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Company Name & Country <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="company"
                        required
                        placeholder="Apex Surveillance LLC (USA)"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                    />
                </div>

                {/* Business Type */}
                <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Business Type
                    </label>
                    <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                    >
                        <option value="Distributor">Wholesale Distributor / Importer</option>
                        <option value="Installer">Security Installer / System Integrator</option>
                        <option value="E-commerce Seller">E-commerce / Amazon / Shopify Seller</option>
                        <option value="Project Contractor">Government / Farm / Project Contractor</option>
                        <option value="Brand Owner">Brand Owner seeking OEM/ODM</option>
                        <option value="Other">Other / Retailer</option>
                    </select>
                </div>

                {/* Order Quantity */}
                <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                        Estimated Order Quantity
                    </label>
                    <select
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                    >
                        <option value="Sample (<10 pcs)">Sample Test (1 – 10 pcs)</option>
                        <option value="10-50 pcs">Trial Order (10 – 50 pcs)</option>
                        <option value="50-200 pcs">Custom Logo Tier (50 – 200 pcs)</option>
                        <option value="200-500 pcs">Custom Box Tier (200 – 500 pcs)</option>
                        <option value="500+ pcs">Full Container (500+ pcs / FCL)</option>
                    </select>
                </div>
            </div>

            {/* Target Product */}
            <div className="mt-4">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Interested Model / Frequency Band
                </label>
                <input
                    type="text"
                    name="targetProduct"
                    placeholder="e.g. NX-S320-10X (EU 4G Band) or Multiple Models"
                    value={formData.targetProduct}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors"
                />
            </div>

            {/* Message / Custom Requirements */}
            <div className="mt-4">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Project Requirements / Customization Notes
                </label>
                <textarea
                    name="message"
                    rows={compact ? 2 : 3}
                    placeholder="Please specify destination country, App preference (UBox or Tuya), OEM logo needs, or target delivery timeframe..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition-colors resize-none"
                />
            </div>

            {/* Trust and Submit Button */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Strict NDA protection. Confidential factory direct quotation.</span>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    {loading ? (
                        <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Submitting Inquiry...</span>
                        </>
                    ) : (
                        <>
                            <span>Get Wholesale Quote & Catalog</span>
                            <Send className="w-4 h-4" />
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}
