import { Metadata } from 'next';
import { InquiryForm } from '@/components/InquiryForm';
import { Check, ShieldCheck, Sparkles, Layers, Sliders, Box, Cpu } from 'lucide-react';

export const metadata: Metadata = {
    title: 'OEM/ODM Security Camera Manufacturing | Low MOQ 50 pcs Customization',
    description: 'Direct manufacturer OEM/ODM services for solar cameras: Laser logo engraving from 50 pcs, custom giftbox from 300 pcs, and white-label App (UBox/Tuya) customization.',
    alternates: {
        canonical: 'https://www.nexcam-security.com/oem-odm'
    }
};

export default function OemOdmPage() {
    return (
        <div className="bg-slate-50 text-slate-900 min-h-screen py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold tracking-widest uppercase text-emerald-700">
                        Tailored For B2B Brands & Amazon Sellers
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2">
                        OEM & ODM Customization Solutions
                    </h1>
                    <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
                        Scale from a 50-unit pilot batch to full container loads. We offer flexible private labeling, drop-tested retail packaging, firmware localization, and mobile app white-labeling.
                    </p>
                </div>

                {/* 3 Steps Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between shadow-xs">
                        <div>
                            <div className="text-emerald-700 font-mono font-bold text-xs uppercase mb-2">Stage 01</div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-3">50 Units MOQ</h2>
                            <p className="text-xs text-slate-500 leading-relaxed mb-6">
                                Fast private-label testing with low upfront inventory risk.
                            </p>
                            <ul className="space-y-3 text-xs text-slate-600">
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Laser engraved logo on camera & panel</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Custom model numbers on specs stickers</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Amazon FNSKU & master carton barcoding</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Fast lead time: 3-5 working days</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-emerald-600 rounded-2xl p-8 flex flex-col justify-between shadow-xl relative">
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-black uppercase">
                            Distributor Standard
                        </div>
                        <div>
                            <div className="text-emerald-700 font-mono font-bold text-xs uppercase mb-2">Stage 02</div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-3">300–500 Units</h2>
                            <p className="text-xs text-slate-500 leading-relaxed mb-6">
                                Professional shelf-ready retail presentation for overseas retail chains.
                            </p>
                            <ul className="space-y-3 text-xs text-slate-600">
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Custom full-color retail giftbox printing</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Multilingual quick start manual (EN, DE, ES, FR, IT)</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Drop-test compliant protective foam inlay</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Lead time: 10-14 working days</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between shadow-xs">
                        <div>
                            <div className="text-emerald-700 font-mono font-bold text-xs uppercase mb-2">Stage 03</div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-3">1,000+ Units</h2>
                            <p className="text-xs text-slate-500 leading-relaxed mb-6">
                                Full ecosystem customization for regional telecom operators and security brands.
                            </p>
                            <ul className="space-y-3 text-xs text-slate-600">
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> White-label App UI for UBox or Tuya</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Custom voice prompts & boot startup audio</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Customized solar panel wattage & bracket molds</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Exclusive regional distribution territorial protection</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Inquiry Form */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-slate-900">Start Your OEM Project Inquiry</h2>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">Our engineering director will review your specs and provide a quotation within 4 hours.</p>
                    </div>
                    <InquiryForm sourceLocation="oem_odm_page" />
                </div>
            </div>
        </div>
    );
}
