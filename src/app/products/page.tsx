import { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data/products';
import { Shield, Sun, Radio, BatteryCharging, ArrowRight, Download, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'B2B Wholesale Catalog | 4G Solar Cameras & PTZ Surveillance Systems',
    description: 'Explore our complete catalog of industrial 4G LTE and WiFi solar-powered security cameras, dual-lens optical zoom PTZ cameras, and cellular hunting trail cameras.',
    alternates: {
        canonical: 'https://www.nexcam-security.com/products'
    }
};

export default function ProductsCatalogPage() {
    return (
        <div className="bg-slate-50 text-slate-900 min-h-screen py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl mb-12">
                    <span className="text-xs font-bold tracking-widest uppercase text-emerald-700">
                        Complete Product Lineup
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-1">
                        B2B Solar Security Camera Systems
                    </h1>
                    <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                        Direct-from-factory pricing with low MOQ OEM private labeling (50 pcs), Amazon FBA packaging, and global 4G band pre-configuration for European, US, Australian, and Japanese carriers.
                    </p>
                </div>

                {/* Catalog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white border border-slate-200 hover:border-emerald-400 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all shadow-sm hover:shadow-md group"
                        >
                            <div>
                                <div className="flex items-center justify-between gap-2 mb-3">
                                    <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded">
                                        {product.model}
                                    </span>
                                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                                        {product.category}
                                    </span>
                                </div>

                                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
                                    <Link href={`/products/${product.slug}`}>
                                        {product.name}
                                    </Link>
                                </h2>
                                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                                    {product.tagline}
                                </p>

                                {/* Highlights */}
                                <div className="space-y-2 mb-6 text-xs text-slate-600">
                                    {product.highlights.slice(0, 3).map((hl, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                            <span>{hl}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Spec Highlights */}
                                <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs mb-6 text-center">
                                    <div>
                                        <div className="text-[10px] text-slate-500 uppercase">Solar Wattage</div>
                                        <div className="font-bold text-emerald-700">{product.solarPower.split(' ')[0]}</div>
                                    </div>
                                    <div className="border-x border-slate-200">
                                        <div className="text-[10px] text-slate-500 uppercase">Battery</div>
                                        <div className="font-bold text-emerald-700">{product.batteryCapacity.split(' ')[0]}</div>
                                    </div>
                                    <div>
                                        <div className="text-[10px] text-slate-500 uppercase">Connectivity</div>
                                        <div className="font-bold text-slate-800">{product.connectivity.split(' ')[0]}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                                <Link
                                    href={`/products/${product.slug}`}
                                    className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm text-center transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                                >
                                    <span>View Specs & Bands</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href={`/products/${product.slug}#inquiry`}
                                    className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm border border-slate-200 transition-colors"
                                >
                                    Request Sample
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
