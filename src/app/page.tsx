import React from 'react';
import Link from 'next/link';
import { products, LTE_REGIONAL_BANDS } from '@/data/products';
import { InquiryForm } from '@/components/InquiryForm';
import {
    ShieldCheck,
    Sun,
    BatteryCharging,
    Cpu,
    Radio,
    Check,
    X,
    ArrowRight,
    Download,
    Award,
    Truck,
    Layers,
    FileSpreadsheet,
    Box,
    Sparkles,
    Eye,
    Globe2,
    Sliders,
    Compass
} from 'lucide-react';

export default function HomePage() {
    const jsonLdOrg = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'NEXCAM Security Technology Co., Ltd.',
        url: 'https://www.nexcam-security.com',
        logo: 'https://www.nexcam-security.com/logo.png',
        description: 'Manufacturer of 4G LTE and WiFi solar-powered security cameras, dual-lens PTZ optical zoom cameras, and hunting trail cameras for B2B export.',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'High-Tech Industrial Park, Baoan District',
            addressLocality: 'Shenzhen',
            addressRegion: 'Guangdong',
            postalCode: '518100',
            addressCountry: 'CN'
        },
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+86-138-0000-0000',
            contactType: 'sales',
            availableLanguage: ['English', 'Spanish', 'German', 'Chinese']
        }
    };

    return (
        <div className="relative overflow-hidden bg-white text-slate-800">
            {/* JSON-LD Script */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
            />

            {/* 1. HERO SECTION */}
            <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-200 bg-gradient-to-b from-emerald-50/60 via-white to-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto space-y-6">
                        {/* High-Impact Trust Pill */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold shadow-xs">
                            <Sun className="w-4 h-4 text-emerald-600" />
                            <span>Source Factory Direct | Low MOQ OEM from 50 Units</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                            <span className="text-emerald-900 font-bold">Samples Ship in 48H</span>
                        </div>

                        {/* Main H1 Title */}
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                            Engineered for Off-Grid Surveillance:{' '}
                            <span className="text-emerald-700">
                                4G Solar CCTV & Dual-Lens PTZ
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                            Direct supplier for overseas security distributors, commercial installers, and Amazon/Shopify brands. Powered by <strong>AOV/PIR low-power guarding</strong>, <strong>BMS cold-weather thermal cutoff</strong>, and <strong>lossless optical zoom</strong>.
                        </p>

                        {/* Key Spec Badges */}
                        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                            <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-xs flex items-center gap-1.5">
                                <Cpu className="w-4 h-4 text-emerald-600" />
                                0.2s Instant Wake-Up (0.003W Standby)
                            </span>
                            <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-xs flex items-center gap-1.5">
                                <BatteryCharging className="w-4 h-4 text-emerald-600" />
                                Industrial BMS Lithium Protection (-30°C ~ +60°C)
                            </span>
                            <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-xs flex items-center gap-1.5">
                                <Radio className="w-4 h-4 text-emerald-600" />
                                Global 4G Bands: EU, US, AU & JP
                            </span>
                            <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-xs flex items-center gap-1.5">
                                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                                UN38.3 & MSDS Ready for Sea/Air Freight
                            </span>
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="#inquiry-section"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5"
                            >
                                <span>Request Wholesale Price List & Sample</span>
                                <ArrowRight className="w-5 h-5" />
                            </a>

                            <Link
                                href="/products"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-300 shadow-xs transition-colors"
                            >
                                <Download className="w-4 h-4 text-emerald-600" />
                                <span>Browse Product Catalog ({products.length} Models)</span>
                            </Link>
                        </div>

                        {/* Social Proof Stats */}
                        <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-200 text-left max-w-4xl mx-auto">
                            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">50 pcs</div>
                                <div className="text-xs text-slate-500 mt-1">Low MOQ Laser Logo & Barcodes</div>
                            </div>
                            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">48 Hours</div>
                                <div className="text-xs text-slate-500 mt-1">Sample Dispatch Guarantee</div>
                            </div>
                            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">&lt; 0.28%</div>
                                <div className="text-xs text-slate-500 mt-1">Factory Defect / RMA Rate</div>
                            </div>
                            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-700">45+ Nations</div>
                                <div className="text-xs text-slate-500 mt-1">Global B2B Distributors Served</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. CORE PRODUCT CATEGORIES GRID */}
            <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <h2 className="text-xs font-bold tracking-widest uppercase text-emerald-700 mb-2">
                        Product Ecosystem
                    </h2>
                    <p className="text-2xl sm:text-4xl font-extrabold text-slate-900">
                        Industrial Solar Surveillance Categories
                    </p>
                    <p className="text-slate-600 text-sm sm:text-base mt-3">
                        Engineered for zero-grid installations: ranches, commercial job sites, perimeter fences, and wildlife scouting.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Category 1: 4G Solar Cameras */}
                    <div className="group bg-white border border-slate-200 hover:border-emerald-500 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                                <Radio className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">No WiFi Required</span>
                            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">4G Solar Cameras</h3>
                            <p className="text-slate-600 text-xs leading-relaxed mb-4">
                                Micro-SIM plug & play. Pre-configured for EU/US/AU/JP telecommunications. 0.2s PIR trigger, high-capacity lithium pack, and UBox/Tuya cloud sync.
                            </p>
                            <ul className="space-y-1.5 text-xs text-slate-600 mb-6">
                                <li className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>EU/US/AU/JP Band Certification</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>Continuous PIR Humanoid Filtering</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>Split & Integrated Solar Mounting</span>
                                </li>
                            </ul>
                        </div>
                        <Link
                            href="/products?cat=4g"
                            className="inline-flex items-center justify-between text-xs font-bold text-emerald-700 hover:text-emerald-800 pt-3 border-t border-slate-100"
                        >
                            <span>Explore 4G Models</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Category 2: Dual-Lens PTZ Cameras */}
                    <div className="group bg-white border border-slate-200 hover:border-emerald-500 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                                <Layers className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Sentry + Hunter</span>
                            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Dual-Lens PTZ Cameras</h3>
                            <p className="text-slate-600 text-xs leading-relaxed mb-4">
                                Top fixed panoramic 120° sentry lens paired with bottom motorized optical telephoto lens. Zero blind spots even during zoom tracking.
                            </p>
                            <ul className="space-y-1.5 text-xs text-slate-600 mb-6">
                                <li className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>Simultaneous Dual-Screen App View</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>5–50mm 10X Motorized Optical Zoom</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>Siren Alarm + Dual Spotlight Deterrence</span>
                                </li>
                            </ul>
                        </div>
                        <Link
                            href="/products?cat=dual"
                            className="inline-flex items-center justify-between text-xs font-bold text-emerald-700 hover:text-emerald-800 pt-3 border-t border-slate-100"
                        >
                            <span>Explore Dual-Lens Models</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Category 3: Project-Grade 36X Systems */}
                    <div className="group bg-white border border-slate-200 hover:border-emerald-500 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                                <Eye className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Perimeter Defense</span>
                            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Project-Grade 36X Systems</h3>
                            <p className="text-slate-600 text-xs leading-relaxed mb-4">
                                Commercial-grade 36X continuous optical zoom. Modular design under 4kg and 1.2 CBM/100 units—slashing international shipping volume by 80%.
                            </p>
                            <ul className="space-y-1.5 text-xs text-slate-600 mb-6">
                                <li className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>150m License Plate & Face Recognition</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>Heavy-Duty 30W Monocrystalline Panel</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>Slashes Air & Container Freight by 50%</span>
                                </li>
                            </ul>
                        </div>
                        <Link
                            href="/products?cat=project"
                            className="inline-flex items-center justify-between text-xs font-bold text-emerald-700 hover:text-emerald-800 pt-3 border-t border-slate-100"
                        >
                            <span>Explore 36X Systems</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Category 4: Cellular Hunting Trail Cameras */}
                    <div className="group bg-white border border-slate-200 hover:border-emerald-500 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                                <Compass className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Stealth & Wildlife</span>
                            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Hunting Trail Cameras</h3>
                            <p className="text-slate-600 text-xs leading-relaxed mb-4">
                                4K 48MP cellular trail camera with curved roof solar panel, 0.1s trigger speed, 940nm no-glow IR night vision, and camouflage housing.
                            </p>
                            <ul className="space-y-1.5 text-xs text-slate-600 mb-6">
                                <li className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>940nm Invisible IR Night Vision</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>0.1s Fast Pre-Trigger Speed</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>Solar + 8×AA Dual Emergency Power</span>
                                </li>
                            </ul>
                        </div>
                        <Link
                            href="/products?cat=hunting"
                            className="inline-flex items-center justify-between text-xs font-bold text-emerald-700 hover:text-emerald-800 pt-3 border-t border-slate-100"
                        >
                            <span>Explore Trail Cams</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 3. FEATURED PRODUCTS SHOWCASE */}
            <section className="py-16 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <span className="text-xs font-bold tracking-widest uppercase text-emerald-700">
                                Direct Factory Inventory
                            </span>
                            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                                Flagship B2B Best Sellers
                            </h2>
                            <p className="text-slate-600 text-sm mt-2">
                                Ready for private labeling. In-stock sample dispatch in 48 hours.
                            </p>
                        </div>
                        <Link
                            href="/products"
                            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800"
                        >
                            <span>Download Complete Spec Matrix</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {products.slice(0, 3).map((product) => (
                            <div
                                key={product.id}
                                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-emerald-400 hover:shadow-xl transition-all flex flex-col justify-between"
                            >
                                <div className="p-6">
                                    <div className="flex items-center justify-between gap-2 mb-3">
                                        <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                                            {product.model}
                                        </span>
                                        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                            {product.badge}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
                                        {product.name}
                                    </h3>
                                    <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">
                                        {product.tagline}
                                    </p>

                                    {/* Quick Spec Matrix */}
                                    <div className="bg-slate-50 rounded-xl p-3 border border-slate-200/80 space-y-2 text-xs mb-5">
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Solar Power:</span>
                                            <span className="text-slate-900 font-semibold">{product.solarPower}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Battery Capacity:</span>
                                            <span className="text-emerald-700 font-bold">{product.batteryCapacity}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Connectivity:</span>
                                            <span className="text-slate-800 font-medium">{product.connectivity}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Ecosystem:</span>
                                            <span className="text-emerald-700 font-semibold">{product.ecosystem}</span>
                                        </div>
                                    </div>

                                    {/* OEM Tier Preview */}
                                    <div className="border-t border-slate-100 pt-3">
                                        <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                                            Low MOQ Customization:
                                        </div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {product.oemTiers.map((tier, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-[10px] bg-slate-50 border border-slate-200 text-slate-700 px-2 py-1 rounded"
                                                >
                                                    <strong className="text-emerald-700">{tier.moq}:</strong> {tier.service.split('+')[0]}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 pt-0 flex items-center gap-3">
                                    <Link
                                        href={`/products/${product.slug}`}
                                        className="flex-1 text-center py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors"
                                    >
                                        View Full Specs & Bands
                                    </Link>
                                    <a
                                        href="#inquiry-section"
                                        className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shrink-0 shadow-sm"
                                    >
                                        Get Quote
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. WHY CHOOSE US (对比普通贸易商的工业级优势) */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold tracking-widest uppercase text-emerald-700">
                        Engineering Transparency
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                        Why Overseas Wholesalers Choose NEXCAM
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base mt-3">
                        How our direct factory manufacturing prevents high RMA return rates and costly shipping customs delays.
                    </p>
                </div>

                {/* Comparison Matrix Table */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
                    <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                            <tr className="border-b border-slate-200 bg-slate-50">
                                <th className="p-4 sm:p-5 text-slate-700 font-bold w-1/4">Key Engineering Dimension</th>
                                <th className="p-4 sm:p-5 text-emerald-800 font-bold text-base w-3/8 bg-emerald-50/70 border-x border-emerald-200">
                                    NEXCAM Direct Factory Standard
                                </th>
                                <th className="p-4 sm:p-5 text-slate-500 font-medium w-3/8">
                                    Typical Middleman / Trading Companies
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            <tr>
                                <td className="p-4 sm:p-5 font-bold text-slate-900 flex items-center gap-2">
                                    <BatteryCharging className="w-4 h-4 text-emerald-600" />
                                    <span>Battery Protection & Winter BMS</span>
                                </td>
                                <td className="p-4 sm:p-5 bg-emerald-50/30 border-x border-emerald-200 text-slate-800">
                                    <div className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                        <span>
                                            <strong className="text-emerald-900">Industrial Cold-Start BMS:</strong> Automatic thermal cutoff under -30°C and over +60°C. Prevents cell swelling, explosive thermal runaways, and dead winter batteries.
                                        </span>
                                    </div>
                                </td>
                                <td className="p-4 sm:p-5 text-slate-500">
                                    <div className="flex items-start gap-2">
                                        <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                        <span>Generic recycled 18650 cells with zero thermal management; freezes below 0°C causing high winter return rates.</span>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="p-4 sm:p-5 font-bold text-slate-900 flex items-center gap-2">
                                    <Cpu className="w-4 h-4 text-emerald-600" />
                                    <span>Sensor Resolution & Optical Zoom</span>
                                </td>
                                <td className="p-4 sm:p-5 bg-emerald-50/30 border-x border-emerald-200 text-slate-800">
                                    <div className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                        <span>
                                            <strong className="text-emerald-900">True Optical Zoom:</strong> Motorized 5–50mm / 4.7–170mm stepper motors with authentic Sony/SmartSens image sensors. Lossless clarity at 100+ meters.
                                        </span>
                                    </div>
                                </td>
                                <td className="p-4 sm:p-5 text-slate-500">
                                    <div className="flex items-start gap-2">
                                        <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                        <span>Digital interpolation: Claims 4K but delivers pixelated 1080p digital stretch, leading to negative Amazon buyer reviews.</span>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="p-4 sm:p-5 font-bold text-slate-900 flex items-center gap-2">
                                    <Truck className="w-4 h-4 text-emerald-600" />
                                    <span>Battery Freight & FBA Certification</span>
                                </td>
                                <td className="p-4 sm:p-5 bg-emerald-50/30 border-x border-emerald-200 text-slate-800">
                                    <div className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                        <span>
                                            <strong className="text-emerald-900">100% Compliant Documentation:</strong> Full UN38.3 test report, MSDS, 1.2m drop test certification, and sea/air battery hazardous freight manifests for hassle-free customs clearance.
                                        </span>
                                    </div>
                                </td>
                                <td className="p-4 sm:p-5 text-slate-500">
                                    <div className="flex items-start gap-2">
                                        <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                        <span>Forged or expired battery certs risking container impoundment at US/European ports and Amazon FBA warehouse rejection.</span>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className="p-4 sm:p-5 font-bold text-slate-900 flex items-center gap-2">
                                    <Sliders className="w-4 h-4 text-emerald-600" />
                                    <span>OEM Customization Flexibility</span>
                                </td>
                                <td className="p-4 sm:p-5 bg-emerald-50/30 border-x border-emerald-200 text-slate-800">
                                    <div className="flex items-start gap-2">
                                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                        <span>
                                            <strong className="text-emerald-900">Low MOQ Starting at 50 Units:</strong> High-precision fiber laser logo engraving, custom FNSKU labeling, and sample verification prior to mass production.
                                        </span>
                                    </div>
                                </td>
                                <td className="p-4 sm:p-5 text-slate-500">
                                    <div className="flex items-start gap-2">
                                        <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                        <span>Strict 1,000+ unit MOQ for any private labeling; zero willingness to support growing regional distributors.</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* 5. CUSTOMIZATION TIER PROCESS */}
            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-bold tracking-widest uppercase text-emerald-700">
                            Tailored For Growth
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                            3-Step OEM Customization Ladder
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base mt-3">
                            Start testing your brand with low capital risk. Scale up as your market demand surges.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Tier 1 */}
                        <div className="relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-emerald-300 transition-all flex flex-col justify-between shadow-md">
                            <div>
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase mb-4">
                                    Tier 1: Starter Batch
                                </div>
                                <div className="text-3xl font-black text-slate-900 mb-2">50 Units MOQ</div>
                                <p className="text-slate-500 text-xs leading-relaxed mb-6">
                                    Ideal for regional security installers, Amazon test launches, and boutique distributors.
                                </p>
                                <ul className="space-y-3 text-xs text-slate-600">
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>High-precision laser engraved logo on camera housing</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>Custom model number silkscreen & serial stickers</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>Amazon FBA barcode & outer master carton labeling</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>Lead time: <strong>3–5 business days</strong></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-8 pt-4 border-t border-slate-100">
                                <a
                                    href="#inquiry-section"
                                    className="block w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-center font-bold text-xs transition-colors"
                                >
                                    Order 50 Units Trial
                                </a>
                            </div>
                        </div>

                        {/* Tier 2 */}
                        <div className="relative bg-white border-2 border-emerald-600 rounded-2xl p-8 shadow-xl flex flex-col justify-between">
                            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-600 text-white text-xs font-black uppercase tracking-wider shadow-sm">
                                Most Popular For Wholesalers
                            </div>
                            <div>
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase mb-4 mt-2">
                                    Tier 2: Retail Brand Package
                                </div>
                                <div className="text-3xl font-black text-slate-900 mb-2">300–500 Units</div>
                                <p className="text-slate-500 text-xs leading-relaxed mb-6">
                                    Deliver complete shelf-ready retail experiences with customized packaging and guides.
                                </p>
                                <ul className="space-y-3 text-xs text-slate-600">
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>Everything in Tier 1 included</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>Custom full-color retail giftbox design & drop-test proofing</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>Localized multilingual user manual (EN, DE, ES, FR, IT)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>Lead time: <strong>10–14 business days</strong></span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-8 pt-4 border-t border-slate-100">
                                <a
                                    href="#inquiry-section"
                                    className="block w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-center font-bold text-xs transition-colors shadow-sm"
                                >
                                    Get Tier 2 Quotation
                                </a>
                            </div>
                        </div>

                        {/* Tier 3 */}
                        <div className="relative bg-white border border-slate-200 rounded-2xl p-8 hover:border-emerald-300 transition-all flex flex-col justify-between shadow-md">
                            <div>
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold uppercase mb-4">
                                    Tier 3: White-Label Ecosystem
                                </div>
                                <div className="text-3xl font-black text-slate-900 mb-2">1,000+ Units</div>
                                <p className="text-slate-500 text-xs leading-relaxed mb-6">
                                    Full ecosystem ownership with your brand inside the mobile App and hardware firmware.
                                </p>
                                <ul className="space-y-3 text-xs text-slate-600">
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>Everything in Tier 1 & Tier 2 included</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>White-label mobile App UI & app store listing (iOS & Android)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>Custom firmware boot audio, startup logo & OSD watermark</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>Tailored solar panel wattage & bracket molds</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-8 pt-4 border-t border-slate-100">
                                <a
                                    href="#inquiry-section"
                                    className="block w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-center font-bold text-xs transition-colors"
                                >
                                    Discuss Custom Ecosystem
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. GLOBAL 4G FREQUENCY COMPATIBILITY MAP */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="text-xs font-bold tracking-widest uppercase text-emerald-700">
                        Zero Connectivity Surprises
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                        Global 4G LTE Frequency Pre-Configuration
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base mt-3">
                        We pre-flash regional modem firmware so your downstream customers get instant SIM plug-and-play coverage.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Object.entries(LTE_REGIONAL_BANDS).map(([key, data]) => (
                        <div key={key} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:border-emerald-300 transition-all">
                            <div>
                                <div className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider mb-1">
                                    Region: {key.toUpperCase()}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">{data.region}</h3>
                                <div className="space-y-3 text-xs">
                                    <div>
                                        <span className="text-slate-500 block font-medium">LTE FDD Bands:</span>
                                        <span className="font-mono text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 block mt-1">
                                            {data.fdd}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-slate-500 block font-medium">TDD / WCDMA:</span>
                                        <span className="font-mono text-slate-700">{data.tdd || data.wcdma}</span>
                                    </div>
                                    <div>
                                        <span className="text-slate-500 block font-medium">Certified Carriers:</span>
                                        <span className="text-slate-600">{data.carriers}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5">
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                <span>Pre-tested with local IoT test SIMs</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. HIGH-CONVERSION INQUIRY SECTION */}
            <section id="inquiry-section" className="py-20 bg-gradient-to-b from-slate-50 via-emerald-50/30 to-white border-t border-slate-200">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-xs font-bold tracking-widest uppercase text-emerald-700">
                            Fast Response Guarantee
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2">
                            Request Wholesale Price List & Sample
                        </h2>
                        <p className="text-slate-600 text-sm sm:text-base mt-3">
                            Direct factory pricing. Fill out the form below to receive our <strong>2026 Technical PDF Datasheets</strong>, <strong>MOQ Tier Pricing</strong>, and <strong>Sample Delivery Schedule</strong> within 4 hours.
                        </p>
                    </div>

                    <InquiryForm
                        sourceLocation="home_bottom_cta"
                        compact={false}
                    />
                </div>
            </section>
        </div>
    );
}
