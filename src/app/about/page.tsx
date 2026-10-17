import { Metadata } from 'next';
import { InquiryForm } from '@/components/InquiryForm';
import { Award, ShieldCheck, Cpu, CheckCircle2, Factory, FileCheck, Layers } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About NEXCAM Factory | Solar Security Camera Manufacturer & Certifications',
    description: 'Direct manufacturer of 4G solar cameras with in-house SMT, 72-hour aging testing, and full UN38.3, MSDS, CE, FCC, RoHS certifications in Shenzhen, China.',
    alternates: {
        canonical: 'https://www.nexcam-security.com/about'
    }
};

export default function AboutPage() {
    const certs = [
        { code: 'UN38.3', name: 'Lithium Battery Transport Safety', desc: 'Required by all global air and sea cargo forwarders for safe battery shipping.' },
        { code: 'MSDS', name: 'Material Safety Data Sheet', desc: 'Chemical and thermal safety specification for lithium battery logistics.' },
        { code: 'CE / RED', name: 'Radio Equipment Directive', desc: 'Compliant with European wireless radiation, EMC, and low voltage directives.' },
        { code: 'FCC Part 15', name: 'Federal Communications Commission', desc: 'Tested and certified for United States commercial and residential import.' },
        { code: 'RoHS 2.0', name: 'Hazardous Substance Directive', desc: '100% Lead-free and environmentally sustainable electronic components.' },
        { code: 'IP66 / IP67', name: 'Ingress Protection Tested', desc: 'Verified inside high-pressure rain and salt spray test chambers.' }
    ];

    return (
        <div className="bg-slate-50 text-slate-900 min-h-screen py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold tracking-widest uppercase text-emerald-700">
                        Shenzhen Manufacturing Facility
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2">
                        Engineering Precision Since 2016
                    </h1>
                    <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
                        NEXCAM is a dedicated OEM/ODM manufacturer focused exclusively on low-power solar surveillance, 4G wireless IoT hardware, and multi-lens optical tracking technologies.
                    </p>
                </div>

                {/* Factory Capabilities Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-xs">
                        <div className="text-3xl sm:text-4xl font-extrabold text-emerald-700 mb-1">12,000 m²</div>
                        <div className="text-xs text-slate-500">Modern Production Facility</div>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-xs">
                        <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-1">6 SMT Lines</div>
                        <div className="text-xs text-slate-500">High-Precision Yamaha Pick-and-Place</div>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-xs">
                        <div className="text-3xl sm:text-4xl font-extrabold text-emerald-700 mb-1">72 Hours</div>
                        <div className="text-xs text-slate-500">Continuous Burn-In Aging Test</div>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-xs">
                        <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-1">120,000+</div>
                        <div className="text-xs text-slate-500">Units Monthly Production Output</div>
                    </div>
                </div>

                {/* Certifications Matrix */}
                <div className="mb-20">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                            Global Compliance & Freight Documentation
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500 mt-2">
                            All test reports are verified by accredited third-party laboratories (SGS / TUV / Intertek) and provided upon order confirmation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certs.map((c, i) => (
                            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-emerald-300 transition-colors">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="font-mono font-bold text-emerald-800 text-sm bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">{c.code}</span>
                                    <FileCheck className="w-4 h-4 text-emerald-600" />
                                </div>
                                <h3 className="text-base font-bold text-slate-900 mb-1">{c.name}</h3>
                                <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Inquiry Form */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-slate-900">Schedule a Virtual Factory Tour</h2>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">Connect with our engineering team via Zoom or WeChat for a live workshop walkthrough.</p>
                    </div>
                    <InquiryForm sourceLocation="about_factory_page" />
                </div>
            </div>
        </div>
    );
}
