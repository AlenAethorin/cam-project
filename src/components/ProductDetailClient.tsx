'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ProductItem, LTE_REGIONAL_BANDS } from '@/data/products';
import { openInquiryModal } from './InquiryModal';
import {
    Sun,
    BatteryCharging,
    Radio,
    ShieldCheck,
    Cpu,
    Download,
    FileSpreadsheet,
    Package,
    HelpCircle,
    CheckCircle2,
    Play,
    Truck,
    Share2,
    Sparkles,
    Boxes,
    ChevronDown,
    ChevronUp
} from 'lucide-react';

interface Props {
    product: ProductItem;
    allProducts: ProductItem[];
}

export function ProductDetailClient({ product, allProducts }: Props) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [activeTab, setActiveTab] = useState<'specs' | 'lte' | 'packaging' | 'faqs'>('specs');
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
    const [showVideoModal, setShowVideoModal] = useState(false);

    const galleryItems = [
        { label: 'Front & Dual Lenses', desc: 'Sentry wide-angle + telephoto zoom' },
        { label: 'Solar Panel Mount', desc: 'Split or integrated bracket' },
        { label: 'Battery & SIM Slot', desc: 'Weatherproof seal & BMS housing' },
        { label: 'Night Vision Mode', desc: 'Starlight full-color / IR preview' }
    ];

    const relatedProducts = allProducts.filter(p => p.id !== product.id).slice(0, 3);

    return (
        <div className="bg-slate-50 text-slate-900 min-h-screen">
            {/* Breadcrumbs */}
            <div className="border-b border-slate-200 bg-white py-3 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
                <div className="max-w-7xl mx-auto flex items-center gap-2">
                    <Link href="/" className="hover:text-emerald-700 font-medium">Home</Link>
                    <span>/</span>
                    <Link href="/products" className="hover:text-emerald-700 font-medium">Products</Link>
                    <span>/</span>
                    <span className="text-slate-800 font-semibold truncate">{product.name}</span>
                </div>
            </div>

            {/* Main Product Hero */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                    {/* Left Column: Gallery & Video View (6 cols) */}
                    <div className="lg:col-span-6 space-y-4">
                        {/* Main Image Showcase Display */}
                        <div className="relative aspect-4/3 rounded-2xl bg-white border border-slate-200 p-6 flex flex-col items-center justify-center text-center shadow-md group overflow-hidden">
                            {/* Graphic Placeholder */}
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4 shadow-sm">
                                    <Sun className="w-16 h-16 animate-pulse text-emerald-600" />
                                </div>
                                <span className="font-mono text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-1">
                                    {galleryItems[selectedImageIndex].label}
                                </span>
                                <span className="text-slate-500 text-xs">
                                    {galleryItems[selectedImageIndex].desc}
                                </span>
                            </div>

                            {/* Badge */}
                            <div className="absolute top-4 left-4 z-20">
                                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                                    {product.badge}
                                </span>
                            </div>

                            {/* Video Play Button Overlay */}
                            <button
                                onClick={() => setShowVideoModal(true)}
                                className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-semibold shadow-md backdrop-blur-md transition-all hover:scale-105"
                            >
                                <Play className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                                <span>Watch Lab Test & Live Demo</span>
                            </button>
                        </div>

                        {/* Thumbnails Switcher */}
                        <div className="grid grid-cols-4 gap-3">
                            {galleryItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImageIndex(index)}
                                    className={`p-2.5 rounded-xl border text-left text-xs transition-all ${
                                        selectedImageIndex === index
                                            ? 'bg-white border-emerald-600 text-slate-900 shadow-sm ring-1 ring-emerald-600'
                                            : 'bg-white/80 border-slate-200 text-slate-600 hover:border-slate-300'
                                    }`}
                                >
                                    <div className="font-bold truncate text-[11px] text-slate-900">{item.label}</div>
                                    <div className="text-[10px] text-slate-400 truncate mt-0.5">Angle {index + 1}</div>
                                </button>
                            ))}
                        </div>

                        {/* Direct Factory Assurances */}
                        <div className="bg-white rounded-xl p-4 border border-slate-200 grid grid-cols-3 gap-3 text-center text-xs shadow-xs">
                            <div className="p-2">
                                <div className="text-emerald-700 font-bold">48H Dispatch</div>
                                <div className="text-slate-500 text-[10px] mt-0.5">Evaluation Samples</div>
                            </div>
                            <div className="p-2 border-x border-slate-100">
                                <div className="text-emerald-700 font-bold">UN38.3 & MSDS</div>
                                <div className="text-slate-500 text-[10px] mt-0.5">Dangerous Goods Air/Sea</div>
                            </div>
                            <div className="p-2">
                                <div className="text-emerald-700 font-bold">2-Year Warranty</div>
                                <div className="text-slate-500 text-[10px] mt-0.5">1-to-1 Replacement</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Key Selling Points & B2B Actions (6 cols) */}
                    <div className="lg:col-span-6 space-y-6">
                        {/* Top Category & Model */}
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded">
                                    MODEL: {product.model}
                                </span>
                                <span className="text-xs text-slate-500">
                                    Category: <strong className="text-slate-800">{product.category}</strong>
                                </span>
                            </div>
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                                {product.name}
                            </h1>
                            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                                {product.tagline}
                            </p>
                        </div>

                        {/* Core Technical Highlights Matrix */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                            <div>
                                <span className="text-[11px] text-slate-500 block">Solar Generation</span>
                                <span className="text-xs sm:text-sm font-bold text-emerald-700">{product.solarPower}</span>
                            </div>
                            <div>
                                <span className="text-[11px] text-slate-500 block">Battery Capacity</span>
                                <span className="text-xs sm:text-sm font-bold text-emerald-700">{product.batteryCapacity}</span>
                            </div>
                            <div>
                                <span className="text-[11px] text-slate-500 block">Cellular & WiFi</span>
                                <span className="text-xs sm:text-sm font-bold text-slate-800">{product.connectivity}</span>
                            </div>
                            <div>
                                <span className="text-[11px] text-slate-500 block">App Ecosystem</span>
                                <span className="text-xs sm:text-sm font-bold text-slate-800">{product.ecosystem}</span>
                            </div>
                            <div>
                                <span className="text-[11px] text-slate-500 block">Weather Rating</span>
                                <span className="text-xs sm:text-sm font-bold text-slate-900">{product.waterproof} Rugged</span>
                            </div>
                            <div>
                                <span className="text-[11px] text-slate-500 block">Min. Standby Draw</span>
                                <span className="text-xs sm:text-sm font-bold text-emerald-700">0.003W (0.2s Wake)</span>
                            </div>
                        </div>

                        {/* Key Bullet Highlights */}
                        <div className="space-y-2">
                            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                                Engineering Value Props:
                            </span>
                            <ul className="space-y-1.5 text-xs text-slate-600">
                                {product.highlights.map((highlight, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                        <span>{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* OEM Customization Ladder */}
                        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                                    <span>OEM Customization Tiers</span>
                                </span>
                                <span className="text-[11px] text-emerald-700 font-semibold">Low MOQ Factory Direct</span>
                            </div>
                            <div className="space-y-1.5">
                                {product.oemTiers.map((tier, idx) => (
                                    <div key={idx} className="flex items-center justify-between text-xs py-1 border-b border-slate-100 last:border-none">
                                        <span className="font-bold text-emerald-800 w-24 shrink-0">{tier.moq}:</span>
                                        <span className="text-slate-600 flex-1">{tier.service}</span>
                                        {tier.timeline && (
                                            <span className="text-[10px] text-slate-400 ml-2">{tier.timeline}</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* B2B Call-to-Action Bar */}
                        <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                            <button
                                onClick={() => openInquiryModal(`${product.model} - ${product.name}`)}
                                className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition-all text-center flex items-center justify-center gap-2"
                            >
                                <span>Request Factory Quotation & Sample</span>
                            </button>

                            <button
                                onClick={() => openInquiryModal(`PDF Datasheet Request: ${product.model}`)}
                                className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 shadow-xs transition-colors flex items-center justify-center gap-2"
                            >
                                <Download className="w-4 h-4 text-emerald-600" />
                                <span>Download PDF Datasheet</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Below-the-Fold Technical Tabs */}
                <div className="mt-16 pt-8 border-t border-slate-200">
                    {/* Tab Navigation */}
                    <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
                        <button
                            onClick={() => setActiveTab('specs')}
                            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                                activeTab === 'specs'
                                    ? 'bg-emerald-600 text-white shadow-xs'
                                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                            }`}
                        >
                            <FileSpreadsheet className="w-4 h-4" />
                            <span>Specifications Table</span>
                        </button>

                        <button
                            onClick={() => setActiveTab('lte')}
                            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                                activeTab === 'lte'
                                    ? 'bg-emerald-600 text-white shadow-xs'
                                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                            }`}
                        >
                            <Radio className="w-4 h-4" />
                            <span>4G LTE Regional Frequency Matrix</span>
                        </button>

                        <button
                            onClick={() => setActiveTab('packaging')}
                            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                                activeTab === 'packaging'
                                    ? 'bg-emerald-600 text-white shadow-xs'
                                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                            }`}
                        >
                            <Package className="w-4 h-4" />
                            <span>Packaging & Freight CBM</span>
                        </button>

                        <button
                            onClick={() => setActiveTab('faqs')}
                            className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${
                                activeTab === 'faqs'
                                    ? 'bg-emerald-600 text-white shadow-xs'
                                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                            }`}
                        >
                            <HelpCircle className="w-4 h-4" />
                            <span>B2B FAQs ({product.faqs.length})</span>
                        </button>
                    </div>

                    {/* Tab Content Display */}
                    <div className="mt-8">
                        {/* Tab 1: Detailed Specifications Table */}
                        {activeTab === 'specs' && (
                            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
                                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                                    <tbody className="divide-y divide-slate-100">
                                        {Object.entries(product.specs).map(([specKey, specVal], index) => (
                                            <tr key={index} className="hover:bg-slate-50/60">
                                                <td className="p-4 sm:p-5 font-semibold text-slate-700 bg-slate-50/70 w-1/3 border-r border-slate-100">
                                                    {specKey}
                                                </td>
                                                <td className="p-4 sm:p-5 text-slate-800 font-medium">
                                                    {specVal}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* Tab 2: 4G LTE Frequency Matrix */}
                        {activeTab === 'lte' && (
                            <div className="space-y-6">
                                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-center justify-between">
                                    <span>
                                        All models feature pre-certified cellular modules with full local SIM carrier support. Frequency verification report available upon request.
                                    </span>
                                    <button
                                        onClick={() => openInquiryModal(`4G Frequency Verification: ${product.model}`)}
                                        className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shrink-0 ml-4 shadow-xs"
                                    >
                                        Request Band Test Report
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {Object.entries(LTE_REGIONAL_BANDS).map(([key, data]) => (
                                        <div key={key} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className="text-xs font-mono font-bold text-emerald-700 uppercase">
                                                    {key.toUpperCase()} REGION
                                                </span>
                                                <span className="text-[11px] text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                                                    Plug & Play SIM
                                                </span>
                                            </div>
                                            <h4 className="text-base font-bold text-slate-900 mb-2">{data.region}</h4>
                                            <div className="space-y-2 text-xs">
                                                <p><strong className="text-slate-600">FDD LTE Bands:</strong> <span className="font-mono text-emerald-800 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">{data.fdd}</span></p>
                                                <p><strong className="text-slate-600">TDD LTE Bands:</strong> <span className="font-mono text-slate-700">{data.tdd || 'N/A'}</span></p>
                                                <p><strong className="text-slate-600">Certified Carriers:</strong> <span className="text-slate-700">{data.carriers}</span></p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Tab 3: Packaging & Freight */}
                        {activeTab === 'packaging' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-xs">
                                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                                        <Package className="w-5 h-5 text-emerald-600" />
                                        <span>Unit & Master Carton Dimensions</span>
                                    </h4>
                                    <div className="space-y-2.5 text-xs sm:text-sm">
                                        <div className="flex justify-between py-1.5 border-b border-slate-100">
                                            <span className="text-slate-500">Unit Net Weight:</span>
                                            <span className="text-slate-900 font-medium">{product.packaging.netWeight}</span>
                                        </div>
                                        <div className="flex justify-between py-1.5 border-b border-slate-100">
                                            <span className="text-slate-500">Giftbox Dimensions:</span>
                                            <span className="text-slate-900 font-medium">{product.packaging.giftboxSize}</span>
                                        </div>
                                        <div className="flex justify-between py-1.5 border-b border-slate-100">
                                            <span className="text-slate-500">Carton Packing Quantity:</span>
                                            <span className="text-slate-900 font-medium">{product.packaging.cartonQty}</span>
                                        </div>
                                        <div className="flex justify-between py-1.5 border-b border-slate-100">
                                            <span className="text-slate-500">Gross Carton Weight:</span>
                                            <span className="text-slate-900 font-medium">{product.packaging.cartonWeight}</span>
                                        </div>
                                        <div className="flex justify-between py-1.5 border-b border-slate-100">
                                            <span className="text-slate-500">Master Carton Size:</span>
                                            <span className="text-slate-900 font-medium">{product.packaging.cartonSize}</span>
                                        </div>
                                        <div className="flex justify-between py-1.5">
                                            <span className="text-slate-500">Volume per Carton:</span>
                                            <span className="text-emerald-700 font-bold">{product.packaging.cbmPerCarton || '0.07 CBM'}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-xs">
                                    <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                                        <Truck className="w-5 h-5 text-emerald-600" />
                                        <span>Container Loading & Dangerous Goods Docs</span>
                                    </h4>
                                    <div className="space-y-2.5 text-xs sm:text-sm">
                                        <div className="flex justify-between py-1.5 border-b border-slate-100">
                                            <span className="text-slate-500">20ft Container (20GP) Capacity:</span>
                                            <span className="text-emerald-700 font-bold">{product.packaging.container20GP || 'Approx. 2,400 units'}</span>
                                        </div>
                                        <div className="flex justify-between py-1.5 border-b border-slate-100">
                                            <span className="text-slate-500">40ft High Cube (40HQ) Capacity:</span>
                                            <span className="text-emerald-700 font-bold">{product.packaging.container40HQ || 'Approx. 5,800 units'}</span>
                                        </div>
                                        <div className="flex justify-between py-1.5 border-b border-slate-100">
                                            <span className="text-slate-500">Battery Freight Classification:</span>
                                            <span className="text-slate-900 font-medium">UN3481 (Lithium Ion with equipment)</span>
                                        </div>
                                        <div className="flex justify-between py-1.5">
                                            <span className="text-slate-500">Supplied Documents:</span>
                                            <span className="text-slate-900 font-medium">UN38.3, MSDS, 1.2M Drop Test, Sea/Air Freight Test</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Tab 4: B2B FAQs */}
                        {activeTab === 'faqs' && (
                            <div className="space-y-3 max-w-4xl">
                                {product.faqs.map((faq, index) => {
                                    const isOpen = openFaqIndex === index;
                                    return (
                                        <div
                                            key={index}
                                            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs"
                                        >
                                            <button
                                                onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                                                className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-slate-900 hover:text-emerald-700 transition-colors"
                                            >
                                                <span>{faq.question}</span>
                                                {isOpen ? (
                                                    <ChevronUp className="w-5 h-5 text-emerald-600 shrink-0 ml-4" />
                                                ) : (
                                                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-4" />
                                                )}
                                            </button>
                                            {isOpen && (
                                                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                                                    {faq.answer}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                </div>

                {/* Related Products Showcase */}
                <div className="mt-20 pt-12 border-t border-slate-200">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8">
                        Other B2B Solar Surveillance Models
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {relatedProducts.map((rel) => (
                            <Link
                                key={rel.id}
                                href={`/products/${rel.slug}`}
                                className="group bg-white border border-slate-200 hover:border-emerald-500 rounded-2xl p-6 transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                                            {rel.model}
                                        </span>
                                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                                            {rel.category}
                                        </span>
                                    </div>
                                    <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 line-clamp-2 mb-2">
                                        {rel.name}
                                    </h4>
                                    <p className="text-xs text-slate-500 line-clamp-2 mb-4">{rel.tagline}</p>
                                </div>
                                <div className="text-xs font-bold text-emerald-700 group-hover:text-emerald-800 pt-3 border-t border-slate-100 flex items-center justify-between">
                                    <span>View Specifications</span>
                                    <span>&rarr;</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Video Demo Modal */}
            {showVideoModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full p-6 text-center shadow-2xl relative text-slate-900">
                        <h4 className="text-lg font-bold text-slate-900 mb-2">
                            {product.model} Factory Testing & Live Stream Preview
                        </h4>
                        <p className="text-xs text-slate-500 mb-6">
                            Real-world 0.2s PIR trigger, dual-screen live stream test, and IP66 rain shower chamber verification.
                        </p>
                        <div className="aspect-video bg-slate-900 rounded-xl border border-slate-800 flex flex-col items-center justify-center text-slate-300 p-6">
                            <Play className="w-12 h-12 text-emerald-400 mb-2" />
                            <span className="text-sm font-semibold text-white">Full HD Lab Demo Video</span>
                            <span className="text-xs text-slate-400 mt-1">
                                For full uncompressed sample stream credentials (UBox / Tuya test account), please request access below.
                            </span>
                        </div>
                        <div className="mt-6 flex justify-end gap-3">
                            <button
                                onClick={() => setShowVideoModal(false)}
                                className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200"
                            >
                                Close Preview
                            </button>
                            <button
                                onClick={() => {
                                    setShowVideoModal(false);
                                    openInquiryModal(`Live App Test Account: ${product.model}`);
                                }}
                                className="px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 shadow-sm"
                            >
                                Request App Test Account
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
