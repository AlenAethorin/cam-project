import { MetadataRoute } from 'next';
import { products } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.nexcam-security.com';
    const currentDate = new Date('2026-10-17');

    // Static core pages
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/products`,
            lastModified: currentDate,
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/oem-odm`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/solutions`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/4g-bands`,
            lastModified: currentDate,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    // Dynamic Product Detail Pages
    const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
        url: `${baseUrl}/products/${product.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.95,
    }));

    return [...staticRoutes, ...productRoutes];
}
