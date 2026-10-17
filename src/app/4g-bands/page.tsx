import { Metadata } from 'next';
import { LTE_REGIONAL_BANDS } from '@/data/products';
import { InquiryForm } from '@/components/InquiryForm';
import { Radio, CheckCircle2, ShieldCheck, Globe, Wifi } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Global 4G LTE Frequency Band Guide for Solar Cameras (EU, US, AU, JP)',
    description: 'Technical frequency band compatibility matrix for 4G cellular solar security cameras across North America, Europe, Australia, and Japan. Certified for AT&T, T-Mobile, Vodafone, Telstra & Docomo.',
    alternates: {
        canonical: 'https://www.nexcam-security.com/4g-bands'
    }
};

export default function LteBandsPage() {
    return (
        <div className="bg-slate-50 text-slate-900 min-h-screen py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase mb-3">
                        <Radio className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Pre-Configured SIM Compatibility</span>
                    </div>
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
                        Global 4G LTE Frequency Matrix
                    </h1>
                    <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
                        Never worry about dead SIM cards. We pre-flash dedicated regional cellular firmware and verify every batch against major global carriers before ocean or air dispatch.
                    </p>
                </div>

                {/* Regional Matrices */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {Object.entries(LTE_REGIONAL_BANDS).map(([key, data]) => (
                        <div key={key} className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                                <div>
                                    <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-widest block">
                                        REGIONAL MODULE
                                    </span>
                                    <h2 className="text-xl font-bold text-slate-900 mt-0.5">{data.region}</h2>
                                </div>
                                <span className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-mono">
                                    {data.module}
                                </span>
                            </div>

                            <div className="space-y-3 text-xs sm:text-sm">
                                <div>
                                    <span className="text-slate-500 block text-xs font-semibold uppercase mb-1">
                                        FDD LTE Frequency Bands:
                                    </span>
                                    <div className="p-2.5 rounded-lg bg-emerald-50 font-mono text-emerald-800 font-bold border border-emerald-200">
                                        {data.fdd}
                                    </div>
                                </div>

                                <div>
                                    <span className="text-slate-500 block text-xs font-semibold uppercase mb-1">
                                        TDD / 3G Fallback:
                                    </span>
                                    <div className="p-2 rounded-lg bg-slate-50 font-mono text-slate-700 border border-slate-200 text-xs">
                                        {data.tdd || data.wcdma}
                                    </div>
                                </div>

                                <div>
                                    <span className="text-slate-500 block text-xs font-semibold uppercase mb-1">
                                        Supported Carrier Networks:
                                    </span>
                                    <p className="text-slate-700 leading-relaxed">
                                        {data.carriers}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Cellular FAQ Callout */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto mb-16 space-y-4 shadow-sm">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-emerald-600" />
                        <span>Carrier IoT SIM & Fixed IP Information</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Our cameras communicate using encrypted P2P cloud relay servers. This means your end-users do <strong>not</strong> need expensive static/public IP SIM cards or complex port forwarding on the router. Any consumer prepaid or IoT data SIM card with standard APN settings works automatically.
                    </p>
                </div>

                {/* Inquiry Form */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-slate-900">Need Band Testing for Your Country?</h2>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">Specify your country and carrier below, and our RF engineers will provide full test validation.</p>
                    </div>
                    <InquiryForm sourceLocation="4g_bands_page" />
                </div>
            </div>
        </div>
    );
}
