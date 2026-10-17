'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { products } from '@/data/products';
import { openInquiryModal } from './InquiryModal';
import {
    ChevronDown,
    Menu,
    X,
    Shield,
    SunMedium,
    Cpu,
    Radio,
    Award
} from 'lucide-react';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-800 transition-all shadow-xs">
            {/* Top Factory Notification Bar */}
            <div className="bg-emerald-900 text-emerald-100 py-1.5 px-4 text-xs font-medium border-b border-emerald-950">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
                    <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 text-emerald-300 font-semibold">
                            <SunMedium className="w-3.5 h-3.5" />
                            <span>Source Factory Direct OEM/ODM</span>
                        </span>
                        <span className="hidden md:inline text-emerald-700">|</span>
                        <span className="hidden md:inline">Low MOQ 50 pcs Laser Logo</span>
                        <span className="hidden lg:inline text-emerald-700">|</span>
                        <span className="hidden lg:inline text-emerald-300 font-medium">UN38.3 & MSDS Ready for Air/Sea Shipping</span>
                    </div>

                    <div className="flex items-center gap-4 text-emerald-200">
                        <span className="hidden sm:inline">Certified: CE, FCC, RoHS, ISO9001</span>
                        <a
                            href="https://wa.me/8613800000000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-emerald-300 font-semibold transition-colors flex items-center gap-1"
                        >
                            <span>WhatsApp: +86 138-0000-0000</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Brand Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-black shadow-md shadow-emerald-600/20 group-hover:bg-emerald-700 transition-all">
                            <Shield className="w-6 h-6 stroke-[2.5]" />
                        </div>
                        <div>
                            <div className="flex items-center gap-1.5">
                                <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                                    NEXCAM
                                </span>
                                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase tracking-widest">
                                    Solar CCTV
                                </span>
                            </div>
                            <span className="block text-[11px] text-slate-500 font-medium tracking-wider uppercase">
                                Clean Energy Surveillance
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold">
                        <Link
                            href="/"
                            className="px-3.5 py-2 rounded-lg text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/70 transition-colors"
                        >
                            Home
                        </Link>

                        {/* Products Mega Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setProductsDropdownOpen(true)}
                            onMouseLeave={() => setProductsDropdownOpen(false)}
                        >
                            <button
                                onClick={() => setProductsDropdownOpen(prev => !prev)}
                                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/70 transition-colors"
                            >
                                <span>Products</span>
                                <ChevronDown className={`w-4 h-4 transition-transform ${productsDropdownOpen ? 'rotate-180 text-emerald-600' : 'text-slate-400'}`} />
                            </button>

                            {productsDropdownOpen && (
                                <div className="absolute top-full left-0 w-[540px] mt-1 bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 backdrop-blur-xl animate-fade-in z-50">
                                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 px-3 flex items-center justify-between border-b border-slate-100 pb-2">
                                        <span>B2B Camera Lineup</span>
                                        <Link
                                            href="/products"
                                            onClick={() => setProductsDropdownOpen(false)}
                                            className="text-emerald-600 hover:text-emerald-700 font-semibold"
                                        >
                                            View all {products.length} models &rarr;
                                        </Link>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2">
                                        {products.map((product) => (
                                            <Link
                                                key={product.id}
                                                href={`/products/${product.slug}`}
                                                onClick={() => setProductsDropdownOpen(false)}
                                                className="group p-3 rounded-xl hover:bg-emerald-50/60 border border-transparent hover:border-emerald-200 transition-all flex flex-col justify-between"
                                            >
                                                <div>
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="text-[11px] font-mono font-bold text-emerald-700">
                                                            {product.model}
                                                        </span>
                                                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-medium">
                                                            {product.connectivity}
                                                        </span>
                                                    </div>
                                                    <div className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 line-clamp-1">
                                                        {product.name}
                                                    </div>
                                                    <div className="text-xs text-slate-500 line-clamp-1 mt-1">
                                                        {product.tagline}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>

                                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between px-3 text-xs text-slate-600">
                                        <div className="flex items-center gap-4">
                                            <span className="flex items-center gap-1 text-slate-700">
                                                <Cpu className="w-3.5 h-3.5 text-emerald-600" /> UBox / Tuya IoT
                                            </span>
                                            <span className="flex items-center gap-1 text-slate-700">
                                                <Radio className="w-3.5 h-3.5 text-emerald-600" /> EU/US/AU/JP 4G
                                            </span>
                                        </div>
                                        <button
                                            onClick={() => {
                                                setProductsDropdownOpen(false);
                                                openInquiryModal('Wholesale Catalog Request');
                                            }}
                                            className="text-emerald-700 hover:underline font-semibold"
                                        >
                                            Request PDF Catalog &rarr;
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link
                            href="/oem-odm"
                            className="px-3.5 py-2 rounded-lg text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/70 transition-colors"
                        >
                            OEM / ODM
                        </Link>

                        <Link
                            href="/solutions"
                            className="px-3.5 py-2 rounded-lg text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/70 transition-colors"
                        >
                            Solutions
                        </Link>

                        <Link
                            href="/4g-bands"
                            className="px-3.5 py-2 rounded-lg text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/70 transition-colors"
                        >
                            4G Bands Guide
                        </Link>

                        <Link
                            href="/about"
                            className="px-3.5 py-2 rounded-lg text-slate-700 hover:text-emerald-700 hover:bg-emerald-50/70 transition-colors"
                        >
                            Factory & Certs
                        </Link>
                    </nav>

                    {/* Action CTA */}
                    <div className="hidden lg:flex items-center gap-3">
                        <button
                            onClick={() => openInquiryModal()}
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 hover:scale-[1.02] transition-all"
                        >
                            <span>Get a Quote</span>
                        </button>
                    </div>

                    {/* Mobile Menu Trigger */}
                    <div className="flex lg:hidden items-center gap-2">
                        <button
                            onClick={() => openInquiryModal()}
                            className="px-3 py-1.5 text-xs font-bold bg-emerald-600 text-white rounded-lg"
                        >
                            Quote
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(prev => !prev)}
                            className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
                            aria-label="Toggle Menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
                    <Link
                        href="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 rounded-lg text-slate-800 hover:bg-emerald-50 font-medium"
                    >
                        Home
                    </Link>
                    <Link
                        href="/products"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 rounded-lg text-emerald-700 hover:bg-emerald-50 font-bold"
                    >
                        All B2B Products ({products.length} models)
                    </Link>
                    <div className="pl-4 space-y-1 border-l-2 border-emerald-200 my-1">
                        {products.map(p => (
                            <Link
                                key={p.id}
                                href={`/products/${p.slug}`}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-1 text-xs text-slate-600 hover:text-emerald-700"
                            >
                                • {p.model} - {p.name}
                            </Link>
                        ))}
                    </div>
                    <Link
                        href="/oem-odm"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 rounded-lg text-slate-800 hover:bg-emerald-50 font-medium"
                    >
                        OEM/ODM Customization (Low MOQ 50 pcs)
                    </Link>
                    <Link
                        href="/solutions"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 rounded-lg text-slate-800 hover:bg-emerald-50 font-medium"
                    >
                        Solutions (Farms / Sites / Off-Grid)
                    </Link>
                    <Link
                        href="/4g-bands"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 rounded-lg text-slate-800 hover:bg-emerald-50 font-medium"
                    >
                        Global 4G LTE Frequency Matrix
                    </Link>
                    <Link
                        href="/about"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2 rounded-lg text-slate-800 hover:bg-emerald-50 font-medium"
                    >
                        About Us & Factory Certifications
                    </Link>

                    <div className="pt-2">
                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                openInquiryModal();
                            }}
                            className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-center text-sm shadow-md"
                        >
                            Request B2B Quote & Price List
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
