import { Metadata } from 'next';
import Link from 'next/link';
import { InquiryForm } from '@/components/InquiryForm';
import { Shield, Tractor, Building2, Trees, Crosshair, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Off-Grid Surveillance Solutions | Farms, Construction Sites & Wildlife',
    description: 'B2B applications of solar-powered security cameras for remote ranches, commercial job sites, off-grid cabins, and wildlife trail scouting.',
    alternates: {
        canonical: 'https://www.nexcam-security.com/solutions'
    }
};

export default function SolutionsPage() {
    const solutions = [
        {
            icon: Tractor,
            title: 'Remote Farm & Ranch Surveillance',
            tag: 'Livestock & Asset Defense',
            desc: 'Monitor remote pastures, fuel storage tanks, and livestock gates across miles of territory with zero WiFi or grid electricity.',
            points: [
                'PIR + AI Humanoid and Livestock detection reduces false alarms',
                'Dual-lens models watch main driveway while auto-tracking fence lines',
                'Cold-weather BMS operates reliably through freezing winter storms'
            ],
            recommendedModel: 'NX-S320-10X (10X Dual-Lens PTZ)'
        },
        {
            icon: Building2,
            title: 'Commercial Construction Job Sites',
            tag: 'Rapid Site Mobilization',
            desc: 'Deploy high-definition optical surveillance in minutes without trenching electrical cables or paying for costly copper lines.',
            points: [
                'Under 4kg unit weight allows easy pole relocation as build phases progress',
                '36X continuous optical zoom reads contractor license plates up to 150m away',
                'Active dual spotlights and high-decibel siren deter tool theft after hours'
            ],
            recommendedModel: 'NX-P500-36X (36X Project PTZ)'
        },
        {
            icon: Trees,
            title: 'Off-Grid Homesteader & Forestry Perimeter',
            tag: 'Zero-Maintenance Security',
            desc: 'Continuous year-round guarding for remote mountain cabins, utility substations, solar farms, and perimeter fences.',
            points: [
                'Split mount 9W/30W panels can be mounted above tree canopies for maximum sunlight',
                'Ultra-low 0.003W standby mode stays fully charged even during rainy weeks',
                'Push notifications sent to your smartphone in 0.2 seconds upon human trigger'
            ],
            recommendedModel: 'NX-D400-DUAL (Dual-Lens Panoramic)'
        },
        {
            icon: Crosshair,
            title: 'Wildlife Research & Hunting Trail Scouting',
            tag: '100% Invisible Night Vision',
            desc: 'Monitor trophy game, migration patterns, and prevent poaching without emitting any visible light or scaring sensitive wildlife.',
            points: [
                '940nm black infrared LEDs emit zero visible red glow in total darkness',
                '0.1s triple PIR pre-trigger captures fast-moving animals entering the frame',
                'Direct cellular app cloud delivery pushes high-res snapshots to multiple hunters'
            ],
            recommendedModel: 'NX-H800-4G (4K 48MP Cellular Trail Cam)'
        }
    ];

    return (
        <div className="bg-slate-50 text-slate-900 min-h-screen py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold tracking-widest uppercase text-emerald-700">
                        Real-World Industrial Applications
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2">
                        Turnkey Off-Grid Surveillance Solutions
                    </h1>
                    <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
                        Learn how security installers and regional distributors use our solar surveillance hardware to replace expensive trenching projects.
                    </p>
                </div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {solutions.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between hover:border-emerald-400 transition-all shadow-sm"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                                            {item.tag}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h2>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                                        {item.desc}
                                    </p>

                                    <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                                        {item.points.map((pt, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                                <span>{pt}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                    <div className="text-xs">
                                        <span className="text-slate-500 block">Recommended Hardware:</span>
                                        <span className="font-bold text-emerald-800">{item.recommendedModel}</span>
                                    </div>
                                    <Link
                                        href="/products"
                                        className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
                                    >
                                        <span>View Hardware</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Form */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-slate-900">Have a Specific Project Requirement?</h2>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">Submit your project details for custom bracket, battery, or solar sizing recommendations.</p>
                    </div>
                    <InquiryForm sourceLocation="solutions_page" />
                </div>
            </div>
        </div>
    );
}
