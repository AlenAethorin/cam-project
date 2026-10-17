import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingContact } from '@/components/FloatingContact';
import { InquiryModal } from '@/components/InquiryModal';
import { UtmTracker } from '@/components/UtmTracker';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://www.nexcam-security.com'),
    title: {
        default: 'NEXCAM | Wholesale 4G Solar Security Cameras & Dual-Lens PTZ OEM Factory',
        template: '%s | NEXCAM Solar Surveillance'
    },
    description: 'Direct manufacturer of 4G LTE & WiFi solar security cameras, 10X/36X dual-lens PTZ optical zoom cameras, and hunting trail cams. Low MOQ 50 pcs OEM customization, BMS battery protection, UN38.3/CE/FCC certified.',
    keywords: [
        '4G Solar Camera Wholesale',
        'Dual Lens PTZ Solar Camera',
        'Solar Security Camera Manufacturer',
        'Low MOQ OEM Security Camera',
        'UBox Tuya Solar Camera Supplier',
        'Cellular Trail Camera Factory',
        'B2B CCTV Export'
    ],
    authors: [{ name: 'NEXCAM Security Technology Co., Ltd.' }],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://www.nexcam-security.com',
        siteName: 'NEXCAM Solar Security OEM/ODM Factory',
        title: 'NEXCAM | Wholesale 4G Solar Security Cameras & Dual-Lens PTZ OEM Factory',
        description: 'Source factory for low-power 4G/WiFi solar CCTV cameras. Low MOQ private labeling, Amazon FBA packaging, and full UN38.3/MSDS battery export documentation.',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'NEXCAM Industrial 4G Solar Surveillance Systems'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'NEXCAM | Wholesale 4G Solar Security Cameras & Dual-Lens PTZ OEM Factory',
        description: 'Source manufacturer of high-definition 4G/WiFi solar security cameras for global B2B distributors and installers.'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">
                <UtmTracker />
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
                <FloatingContact />
                <InquiryModal />
            </body>
        </html>
    );
}
