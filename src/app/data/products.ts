export interface ProductItem {
    id: string;
    slug: string;
    model: string;
    name: string;
    category: '4G Solar Camera' | 'Dual-Lens PTZ' | 'Project-Grade 36X';
    tagline: string;
    seoTitle: string;
    seoDescription: string;
    badge: string;
    highlights: string[];
    b2bValueProps: {
        title: string;
        description: string;
    }[];
    specs: Record<string, string>;
    packaging: {
        netWeight: string;
        giftboxSize: string;
        cartonQty: string;
        cartonWeight: string;
        cartonSize: string;
    };
    oemTiers: {
        moq: string;
        service: string;
    }[];
    faqs: {
        question: string;
        answer: string;
    }[];
}

export const products: ProductItem[] = [
    {
        id: 'prod-01',
        slug: '10x-optical-zoom-dual-lens-solar-ptz-camera-nx-s320',
        model: 'NX-S320-10X',
        name: '10X Optical Zoom 5MP+5MP Dual-Lens Solar Security Camera (4G LTE / WiFi)',
        category: 'Dual-Lens PTZ',
        tagline: 'Simultaneous 110° panoramic coverage and 5–50mm optical telephoto zoom with 0.2s ultra-fast PIR wake-up.',
        seoTitle: 'Wholesale 10X Optical Zoom Dual-Lens 4G Solar PTZ Camera | OEM/ODM Supplier',
        seoDescription: 'Factory-direct 5MP+5MP dual-lens solar security camera with 5-50mm 10X optical zoom, 9W monocrystalline panel, and 15600mAh BMS battery pack. Low MOQ customization for distributors.',
        badge: 'Best Seller for Amazon & Distributors',
        highlights: [
            'Dual-Sensor Synergy: 2.8mm wide-angle lens (110° FoV) + 5–50mm motorized 10X optical zoom lens',
            '9W Monocrystalline Solar Panel: Supports integrated all-in-one or split-mount installation',
            '15,600mAh Removable Battery Pack: Powered by 6×18650 lithium cells with industrial BMS protection',
            '0.2s Instant Wake-Up: Ultra-low 0.003W standby draw with PIR thermal + AI humanoid filtering',
            '30M Starlight Full-Color Night Vision: 1/2.7" black-light CMOS sensor down to 0.001 Lux',
            'Multi-Carrier 4G LTE & WiFi Options: Pre-configured bands for North America, Europe, AU, and Asia'
        ],
        b2bValueProps: [
            {
                title: 'True Optical Clarity Without Pixelation',
                description: 'Unlike cheap digital-zoom alternatives, the 5–50mm motorized optical lens delivers lossless detail capture for license plates and facial features up to 100 meters away.'
            },
            {
                title: 'Engineered for Harsh Off-Grid Climates',
                description: 'Integrated Battery Management System (BMS) prevents over-discharge and supports stable operation across extreme temperatures from -30°C to +60°C (IP66 rated).'
            },
            {
                title: 'Flexible Ecosystem Integration',
                description: 'Available with UBox or Tuya Smart ecosystem compatibility, supporting two-way intercom, TF card (up to 128GB), and encrypted cloud storage.'
            }
        ],
        specs: {
            'Image Resolution': 'Dual 5MP + 5MP (H.265 Compression)',
            'Lens Configuration': 'Wide-Angle: 2.8mm (110° FoV) | Telephoto PTZ: 5–50mm (48° FoV, 10X Optical)',
            'PTZ Rotation': 'Pan: 355° (55°/s) | Tilt: 100° (40°/s)',
            'Solar Module': '9W High-Efficiency Monocrystalline Silicon (All-in-One / Split Mount)',
            'Battery System': '15,600mAh (6×18650 Removable Cells) with Multi-Layer BMS',
            'Wake-Up & Standby': '0.2s Trigger Response | 0.003W Ultra-Low Standby Consumption',
            'Detection Mechanism': 'Dual PIR Sensing (0–12m, 110°) + Edge AI Humanoid Recognition',
            'Night Vision': '30m Full-Color Floodlight Mode / 20m IR Stealth Mode (0.001 Lux)',
            'Connectivity': '4G LTE (EU/US/AU/JP Regional Modules) or 2.4GHz WiFi',
            'App Ecosystem': 'UBox / Tuya Smart / Custom White-Label App (iOS & Android)',
            'Weatherproof Rating': 'IP66 Rugged Enclosure (-30°C to +60°C, 0%–90% RH)'
        },
        packaging: {
            netWeight: '1.98 kg / unit',
            giftboxSize: '282 × 192 × 182 mm',
            cartonQty: '6 units / master carton',
            cartonWeight: '12.5 kg / carton',
            cartonSize: '610 × 300 × 386 mm'
        },
        oemTiers: [
            { moq: '50 pcs', service: 'Laser-engraved logo on camera housing + custom FBA barcode labeling' },
            { moq: '300 pcs', service: 'Custom retail giftbox design + localized multi-language user manual' },
            { moq: '1,000 pcs', service: 'Custom voice prompts, firmware UI branding, and tailored solar wattage' }
        ],
        faqs: [
            {
                question: 'Can the solar panel be mounted separately from the camera unit?',
                answer: 'Yes. The 9W monocrystalline panel supports both all-in-one bracket mounting and split installation using an extension cable, allowing optimal sun exposure even when the camera is installed under eaves.'
            },
            {
                question: 'What certifications are available for air and sea battery freight?',
                answer: 'All battery packs come with complete UN38.3, MSDS, CE, FCC, and RoHS documentation to ensure smooth customs clearance and FBA inbound shipping.'
            }
        ]
    },
    {
        id: 'prod-02',
        slug: '36x-optical-zoom-project-grade-4g-solar-camera-nx-p500',
        model: 'NX-P500-36X',
        name: '36X Optical Zoom Project-Grade 4G LTE Solar Surveillance System',
        category: 'Project-Grade 36X',
        tagline: 'Long-range perimeter security engineered to slash landed shipping costs by up to 50% for commercial installers.',
        seoTitle: '36X Optical Zoom 4G Solar Security Camera System for Construction & Farms',
        seoDescription: 'Commercial-grade 36X optical zoom 4G solar PTZ camera. Lightweight <4kg modular design reduces container CBM by 80% while delivering long-range intrusion detection.',
        badge: 'Commercial Project Choice',
        highlights: [
            '36X Optical Zoom Telephoto Lens: Precision long-range identification for large perimeters, mines, and oil fields',
            'Logistics-Optimized Footprint: Under 4kg unit weight and 1.2 CBM per 100 units—cutting freight costs by 40%–60%',
            'Industrial BMS Architecture: Intelligent charge/discharge thermal protection extends battery lifespan beyond 5 years',
            'Rapid Off-Grid Deployment: Zero trenching or cabling required; two technicians can deploy a full site in hours',
            'Smart Bandwidth Control: Adjustable dual-stream encoding minimizes monthly 4G cellular data consumption'
        ],
        b2bValueProps: [
            {
                title: 'Game-Changing Container & Air Freight Economics',
                description: 'Traditional bulky solar CCTV kits weigh 12–15kg and occupy 8.5 CBM per 100 units. The NX-P500-36X compacts project-grade performance into <4kg and 1.2 CBM per 100 units, tripling 20ft container capacity.'
            },
            {
                title: 'Built for System Integrators & Rental Fleets',
                description: 'Designed for rapid mobilization and redeployment across temporary job sites, remote utilities, and agricultural perimeters where grid power is unavailable.'
            }
        ],
        specs: {
            'Optical Zoom Ratio': '36X Continuous Optical Zoom with Auto-Focus',
            'Cellular Connectivity': 'Industrial 4G LTE Module with High-Gain External Antenna Support',
            'Power Management': 'Oversized Monocrystalline Panel + Smart BMS Lithium Pack',
            'Battery Protection': 'Over-charge, Over-discharge, Short-circuit & Extreme Thermal Cutoff',
            'Unit Shipping Weight': '< 4.0 kg (Optimized for Express & Sea Freight)',
            'Volume per 100 Units': 'Approx. 1.2 CBM (vs. 8.5 CBM traditional systems)',
            'Operating Environment': 'Heavy-Duty Outdoor IP66 Weatherproof (-30°C to +60°C)'
        },
        packaging: {
            netWeight: '3.65 kg / unit',
            giftboxSize: '320 × 240 × 195 mm',
            cartonQty: '4 units / master carton',
            cartonWeight: '15.8 kg / carton',
            cartonSize: '660 × 500 × 220 mm'
        },
        oemTiers: [
            { moq: '20 pcs', service: 'Project-specific 4G frequency band testing & pre-shipment aging report' },
            { moq: '100 pcs', service: 'Custom brand silkscreen, startup audio, and neutral/branded packaging' },
            { moq: '500 pcs', service: 'Custom oversized solar panel configuration for high-latitude winter regions' }
        ],
        faqs: [
            {
                question: 'How much cellular data does the 36X 4G camera consume per month?',
                answer: 'Under standard motion-triggered recording (5–10 events daily), a 2GB to 5GB monthly data plan is sufficient. Firmware supports adjustable stream resolution to conserve data.'
            }
        ]
    },
    {
        id: 'prod-03',
        slug: 'dual-lens-auto-tracking-solar-security-camera-nx-d400',
        model: 'NX-D400-DUAL',
        name: 'Dual-Lens Panoramic & Auto-Tracking PTZ Solar Camera with Siren Alarm',
        category: '4G Solar Camera',
        tagline: 'Replace two cameras with one: fixed wide-angle sentry lens paired with an AI auto-tracking PTZ hunter lens.',
        seoTitle: 'Dual-Lens 4G/WiFi Solar Camera with AI Tracking & Siren | Wholesale OEM',
        seoDescription: 'Wholesale dual-lens solar security camera combining a 120° fixed panoramic lens with an auto-tracking PTZ lens and active sound-light deterrence. Save 40% on installation.',
        badge: 'High-Margin Wholesale Hit',
        highlights: [
            'Sentry + Hunter Dual Architecture: Top fixed lens watches the full perimeter while bottom PTZ lens auto-tracks targets',
            'Zero Blind Spots: Eliminates the vulnerability of single PTZ cameras missing events while zoomed into another zone',
            'Active Sound & Light Deterrence: Motion-activated floodlights and built-in siren scare off intruders in real time',
            '35%–40% Hardware & Labor Savings: A single dual-lens unit replaces a traditional two-camera installation setup',
            'Dual-Screen Live View: View both wide-angle overview and zoomed-in tracking simultaneously in a single app interface'
        ],
        b2bValueProps: [
            {
                title: 'Dual-Lens Synergy That Sells Itself',
                description: 'Gives your downstream customers two independent video streams in one housing—solving the #1 complaint of traditional PTZ cameras losing situational awareness during zoom tracking.'
            },
            {
                title: 'Turnkey E-Commerce & Retail Ready',
                description: 'Supplied with high-converting marketing assets, drop-tested packaging, and flexible low-MOQ private labeling for regional distributors.'
            }
        ],
        specs: {
            'Lens Architecture': 'Top: 90°–120° Fixed Panoramic Lens | Bottom: Motorized PTZ Tracking Lens',
            'AI Capabilities': 'Human/Vehicle Detection + Cross-Lens Auto-Lock & PTZ Tracking',
            'Active Deterrence': 'Smart Dual-Light (IR + White Spotlight) + High-Decibel Siren Alarm',
            'Audio System': 'Full-Duplex Two-Way Audio (Built-in Mic & Speaker)',
            'Network Options': '4G LTE (SIM Card) or WiFi Version Available',
            'Power System': 'High-Conversion Monocrystalline Solar Panel + BMS Rechargeable Battery'
        },
        packaging: {
            netWeight: '1.85 kg / unit',
            giftboxSize: '275 × 195 × 175 mm',
            cartonQty: '6 units / master carton',
            cartonWeight: '11.8 kg / carton',
            cartonSize: '590 × 310 × 375 mm'
        },
        oemTiers: [
            { moq: '50 pcs', service: 'Custom logo printing on camera & solar panel + FNSKU label service' },
            { moq: '200 pcs', service: 'Custom full-color packaging box & customized quick-start guide' },
            { moq: '1,000 pcs', service: 'App UI customization (UBox/Tuya) & exclusive regional distribution support' }
        ],
        faqs: [
            {
                question: 'Does streaming two lenses simultaneously drain the battery or 4G data quickly?',
                answer: 'No. Our firmware allows users to view either a single combined stream or dual HD streams on demand, while the BMS keeps standby power near zero until motion is triggered.'
            }
        ]
    }
];