import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { products, getProductBySlug, getAllProducts } from '@/data/products';
import { ProductDetailClient } from '@/components/ProductDetailClient';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        return {
            title: 'Product Not Found | NEXCAM Solar Surveillance',
            description: 'The requested security camera model could not be found.'
        };
    }

    return {
        title: product.seoTitle,
        description: product.seoDescription,
        keywords: [
            product.model,
            product.name,
            `${product.category} Wholesale`,
            'B2B Solar Security Camera',
            'OEM CCTV Manufacturer Shenzhen',
            'UN38.3 Battery Security Camera'
        ],
        alternates: {
            canonical: `https://www.nexcam-security.com/products/${product.slug}`
        },
        openGraph: {
            title: product.seoTitle,
            description: product.seoDescription,
            url: `https://www.nexcam-security.com/products/${product.slug}`,
            type: 'article',
            images: [
                {
                    url: '/og-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: product.name
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: product.seoTitle,
            description: product.seoDescription
        }
    };
}

function ProductLoadingSkeleton() {
    return (
        <div className="bg-slate-50 text-slate-900 min-h-screen animate-pulse">
            <div className="border-b border-slate-200 bg-white py-3 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto h-4 w-48 bg-slate-200 rounded" />
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-6 space-y-4">
                        <div className="aspect-4/3 rounded-2xl bg-slate-200" />
                        <div className="grid grid-cols-4 gap-3">
                            <div className="h-14 rounded-xl bg-slate-200" />
                            <div className="h-14 rounded-xl bg-slate-200" />
                            <div className="h-14 rounded-xl bg-slate-200" />
                            <div className="h-14 rounded-xl bg-slate-200" />
                        </div>
                    </div>
                    <div className="lg:col-span-6 space-y-6">
                        <div className="h-6 w-32 bg-slate-200 rounded" />
                        <div className="h-10 w-3/4 bg-slate-200 rounded" />
                        <div className="h-16 w-full bg-slate-200 rounded" />
                        <div className="h-28 w-full bg-slate-200 rounded-xl" />
                        <div className="h-12 w-full bg-slate-200 rounded-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
}

async function ProductDetailContent({ params }: PageProps) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    const allProducts = getAllProducts();

    // 1. JSON-LD Schema: Product
    const jsonLdProduct = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        image: 'https://www.nexcam-security.com/og-image.jpg',
        description: product.seoDescription,
        sku: product.model,
        mpn: product.model,
        brand: {
            '@type': 'Brand',
            name: 'NEXCAM'
        },
        category: product.category,
        offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'USD',
            lowPrice: '39.00',
            highPrice: '185.00',
            offerCount: '3',
            availability: 'https://schema.org/InStock',
            itemCondition: 'https://schema.org/NewCondition',
            seller: {
                '@type': 'Organization',
                name: 'NEXCAM Security Technology Co., Ltd.'
            }
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: product.rating || 4.9,
            reviewCount: product.reviewCount || 120
        }
    };

    // 2. JSON-LD Schema: FAQPage
    const jsonLdFaq = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: product.faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
            />

            <ProductDetailClient
                product={product}
                allProducts={allProducts}
            />
        </>
    );
}

export default function ProductDetailPage({ params }: PageProps) {
    return (
        <Suspense fallback={<ProductLoadingSkeleton />}>
            <ProductDetailContent params={params} />
        </Suspense>
    );
}
