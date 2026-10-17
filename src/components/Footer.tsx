import React from 'react';
import Link from 'next/link';
import { products } from '@/data/products';
import { Shield, Mail, Phone, MapPin, CheckCircle2, Award, Truck, Lock } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 text-sm">
            {/* Value Trust Banner */}
            <div className="border-b border-slate-800 bg-slate-950 py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                            <Award className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="font-bold text-white text-sm">Factory Source Direct</div>
                            <div className="text-xs text-slate-400">100% In-House SMT & Aging Test</div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                            <Truck className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="font-bold text-white text-sm">UN38.3 & MSDS Certified</div>
                            <div className="text-xs text-slate-400">Air & Sea Battery Freight Compliant</div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="font-bold text-white text-sm">Low MOQ OEM Support</div>
                            <div className="text-xs text-slate-400">50 pcs Laser Logo / 300 pcs Box</div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                            <Lock className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="font-bold text-white text-sm">2-Year Factory Warranty</div>
                            <div className="text-xs text-slate-400">RMA Replacement & Local Parts</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Links */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Brand Info */}
                    <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-black shadow-md">
                                <Shield className="w-5 h-5" />
                            </div>
                            <span className="font-extrabold text-xl text-white tracking-tight">NEXCAM Security</span>
                        </div>
                        <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-sm">
                            Premier OEM/ODM manufacturer of industrial 4G LTE & WiFi solar-powered security surveillance systems, dual-lens PTZ optical zoom cameras, and cellular hunting trail cameras for global B2B distributors.
                        </p>
                        <div className="space-y-2 text-xs text-slate-400">
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span>High-Tech Industrial Park, Baoan District, Shenzhen, China</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span>sales@nexcam-security.com (Key Account B2B)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span>WhatsApp: +86 138-0000-0000 (24/7 Response)</span>
                            </div>
                        </div>
                    </div>

                    {/* Product Categories */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                            Solar Camera Catalog
                        </h4>
                        <ul className="space-y-2 text-xs">
                            {products.map(p => (
                                <li key={p.id}>
                                    <Link
                                        href={`/products/${p.slug}`}
                                        className="text-slate-400 hover:text-emerald-400 transition-colors"
                                    >
                                        {p.model} ({p.category})
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-2">
                                <Link
                                    href="/products"
                                    className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1"
                                >
                                    <span>Browse All Products</span>
                                    <span>&rarr;</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Solutions & Tech */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                            Solutions & Frequency
                        </h4>
                        <ul className="space-y-2 text-xs text-slate-400">
                            <li><Link href="/solutions" className="hover:text-emerald-400 transition-colors">Remote Farm & Ranch Defense</Link></li>
                            <li><Link href="/solutions" className="hover:text-emerald-400 transition-colors">Commercial Construction CCTV</Link></li>
                            <li><Link href="/solutions" className="hover:text-emerald-400 transition-colors">Off-Grid Cabin & Forestry Guard</Link></li>
                            <li><Link href="/solutions" className="hover:text-emerald-400 transition-colors">Wildlife & Hunting Scouting</Link></li>
                            <li><Link href="/4g-bands" className="hover:text-emerald-400 transition-colors">EU / US / AU / JP 4G Bands Guide</Link></li>
                            <li><Link href="/oem-odm" className="hover:text-emerald-400 transition-colors">Amazon FBA White Labeling</Link></li>
                        </ul>
                    </div>

                    {/* OEM Tiers & Compliance */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                            OEM / Certifications
                        </h4>
                        <ul className="space-y-2 text-xs text-slate-400">
                            <li><span className="text-emerald-400 font-semibold">Tier 1 (50 pcs):</span> Laser Logo & Barcodes</li>
                            <li><span className="text-emerald-400 font-semibold">Tier 2 (300 pcs):</span> Custom Retail Giftbox</li>
                            <li><span className="text-emerald-400 font-semibold">Tier 3 (1000 pcs):</span> White-Label App UI</li>
                            <li className="pt-2 text-slate-500 font-medium">Compliance:</li>
                            <li className="text-[11px] text-slate-400">CE, FCC, RoHS, UN38.3, MSDS, IP66/IP67 Tested, TELEC (Japan)</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p>© 2026 NEXCAM Security Technology Co., Ltd. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <span>ISO9001:2015 Quality Management</span>
                        <span>Global 4G Band Ready</span>
                        <span>Zero Standby Power Tech</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
