'use client';

import React from 'react';
import { MessageSquare, FileText } from 'lucide-react';
import { openInquiryModal } from './InquiryModal';

export function FloatingContact() {
    const handleOpenInquiry = () => {
        openInquiryModal('General Inquiry from Floating CTA');
    };

    return (
        <aside aria-label="Quick Contact Options" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 group">
            {/* Online notification bubble */}
            <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 border border-slate-200 px-3.5 py-1.5 rounded-full text-xs shadow-lg font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>B2B Engineers Online | <strong className="text-emerald-700">Avg. Reply: 5 mins</strong></span>
            </div>

            <div className="flex items-center gap-2">
                {/* Request Quote Button */}
                <button
                    onClick={handleOpenInquiry}
                    className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 hover:scale-105 transition-all"
                    title="Get a Quick Factory Quote"
                >
                    <FileText className="w-4 h-4" />
                    <span className="hidden sm:inline">Get a Quote</span>
                </button>

                {/* WhatsApp Direct Chat Button */}
                <a
                    href="https://wa.me/8613800000000?text=Hello%20NEXCAM%2C%20I%20am%20interested%20in%20solar%20security%20cameras%20and%20would%20like%20to%20request%20wholesale%20pricing%20and%20OEM%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg hover:scale-110 transition-all"
                    title="Chat directly on WhatsApp"
                    aria-label="Chat on WhatsApp"
                >
                    <MessageSquare className="w-6 h-6 fill-current" />
                    <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white border-2 border-emerald-500"></span>
                    </span>
                </a>
            </div>
        </aside>
    );
}
