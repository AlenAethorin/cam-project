export interface B2BValueProp {
    title: string;
    description: string;
}

export interface OEMTier {
    moq: string;
    service: string;
    timeline?: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface ProductItem {
    id: string;
    slug: string;
    model: string;
    name: string;
    category: '4G Solar Camera' | 'WiFi Solar Camera' | 'Dual-Lens PTZ' | 'Project-Grade 36X' | 'Hunting Trail Camera';
    tagline: string;
    seoTitle: string;
    seoDescription: string;
    badge: string;
    featured?: boolean;
    rating?: number;
    reviewCount?: number;
    solarPower: string;
    batteryCapacity: string;
    connectivity: '4G LTE' | 'WiFi' | '4G LTE / WiFi Dual Mode';
    ecosystem: 'UBox' | 'Tuya Smart' | 'UBox / Tuya' | 'TrailCam Pro';
    waterproof: 'IP66' | 'IP67';
    highlights: string[];
    b2bValueProps: B2BValueProp[];
    specs: Record<string, string>;
    lteBands?: {
        eu: string;
        us: string;
        au: string;
        jp: string;
    };
    packaging: {
        netWeight: string;
        giftboxSize: string;
        cartonQty: string;
        cartonWeight: string;
        cartonSize: string;
        cbmPerCarton?: string;
        container20GP?: string;
        container40HQ?: string;
    };
    oemTiers: OEMTier[];
    faqs: FAQItem[];
    galleryImages?: string[];
}

export const LTE_REGIONAL_BANDS = {
    eu: {
        region: 'Europe / Middle East / Africa (EMEA)',
        module: 'Quectel / SIMCom Cat.1 & Cat.4',
        fdd: 'B1 / B3 / B7 / B8 / B20 / B28A',
        tdd: 'B38 / B40 / B41',
        wcdma: 'B1 / B8',
        carriers: 'Vodafone, Deutsche Telekom, Orange, EE, Movistar, TIM, Telia'
    },
    us: {
        region: 'North America (US & Canada)',
        module: 'Qualcomm Snapdragon Cat.4 / Cat.M1',
        fdd: 'B2 / B4 / B5 / B12 / B13 / B14 (FirstNet) / B25 / B26 / B66 / B71',
        tdd: 'B41',
        wcdma: 'B2 / B4 / B5',
        carriers: 'AT&T (Certified), T-Mobile, Verizon (IoT SIMs), Rogers, Bell, Telus'
    },
    au: {
        region: 'Australia / New Zealand / Latin America',
        module: 'High-Gain Multiband LTE',
        fdd: 'B1 / B2 / B3 / B4 / B5 / B7 / B8 / B28 / B66',
        tdd: 'B40',
        wcdma: 'B1 / B2 / B5 / B8',
        carriers: 'Telstra, Optus, Vodafone AU, Claro, Vivo, Movistar'
    },
    jp: {
        region: 'Japan (TELEC / JATE Certified)',
        module: 'Japan Dedicated Low-Latency LTE',
        fdd: 'B1 / B3 / B8 / B18 / B19 / B26',
        tdd: 'B41',
        wcdma: 'B1 / B6 / B8 / B19',
        carriers: 'NTT Docomo, SoftBank, au by KDDI, Rakuten Mobile'
    }
};

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
        featured: true,
        rating: 4.9,
        reviewCount: 142,
        solarPower: '9W Monocrystalline (Integrated/Split)',
        batteryCapacity: '15,600mAh (6×18650 Cells with BMS)',
        connectivity: '4G LTE / WiFi Dual Mode',
        ecosystem: 'UBox / Tuya',
        waterproof: 'IP66',
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
        lteBands: {
            eu: 'B1/B3/B7/B8/B20/B28A',
            us: 'B2/B4/B5/B12/B13/B14/B66/B71',
            au: 'B1/B3/B5/B7/B8/B28',
            jp: 'B1/B3/B8/B18/B19/B26'
        },
        packaging: {
            netWeight: '1.98 kg / unit',
            giftboxSize: '282 × 192 × 182 mm',
            cartonQty: '6 units / master carton',
            cartonWeight: '12.5 kg / carton',
            cartonSize: '610 × 300 × 386 mm',
            cbmPerCarton: '0.07 CBM',
            container20GP: '2,400 units (400 cartons)',
            container40HQ: '5,800 units (966 cartons)'
        },
        oemTiers: [
            { moq: '50 pcs', service: 'Laser-engraved logo on camera housing + custom FBA barcode labeling', timeline: '3-5 business days' },
            { moq: '300 pcs', service: 'Custom retail giftbox design + localized multi-language user manual', timeline: '10-14 business days' },
            { moq: '1,000 pcs', service: 'Custom voice prompts, firmware UI branding, and tailored solar wattage', timeline: '20-25 business days' }
        ],
        faqs: [
            {
                question: 'Can the solar panel be mounted separately from the camera unit?',
                answer: 'Yes. The 9W monocrystalline panel supports both all-in-one bracket mounting and split installation using a 3-meter weather-sealed extension cable (included in package), allowing optimal sun exposure even when the camera is installed under eaves or shaded walls.'
            },
            {
                question: 'What certifications are available for air and sea battery freight?',
                answer: 'All battery packs come with complete UN38.3, MSDS, 1.2m drop test report, CE, FCC, and RoHS documentation to ensure smooth customs clearance and compliant Amazon FBA inbound freight.'
            },
            {
                question: 'Does the 4G version require fixed IP or port forwarding?',
                answer: 'No. The 4G cellular camera operates via secure P2P cloud servers. Simply insert any micro-SIM card with an active data plan, power on, and scan the QR code with the UBox or Tuya app to begin live streaming within 60 seconds.'
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
        featured: true,
        rating: 4.8,
        reviewCount: 89,
        solarPower: '30W Monocrystalline High-Gain Module',
        batteryCapacity: '30,000mAh Ultra-Capacity Li-ion with Cold-Start BMS',
        connectivity: '4G LTE',
        ecosystem: 'UBox / Tuya',
        waterproof: 'IP66',
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
            'Optical Zoom Ratio': '36X Continuous Optical Zoom with Auto-Focus (4.7mm–170mm)',
            'Image Sensor': '1/2.8" Progressive Scan Starlight CMOS (3840×2160 4K / 5MP options)',
            'Cellular Connectivity': 'Industrial 4G LTE Module with High-Gain External Antenna Support',
            'Power Management': '30W Oversized Monocrystalline Panel + Smart BMS Lithium Pack',
            'Battery Protection': 'Over-charge, Over-discharge, Short-circuit & Extreme Thermal Cutoff (-30°C to +65°C)',
            'Unit Shipping Weight': '< 4.0 kg (Optimized for Express & Sea Freight)',
            'Volume per 100 Units': 'Approx. 1.2 CBM (vs. 8.5 CBM traditional systems)',
            'Operating Environment': 'Heavy-Duty Outdoor IP66 Weatherproof'
        },
        lteBands: {
            eu: 'B1/B3/B7/B8/B20/B28',
            us: 'B2/B4/B5/B12/B13/B14/B66/B71',
            au: 'B1/B3/B5/B7/B8/B28',
            jp: 'B1/B3/B8/B18/B19/B26'
        },
        packaging: {
            netWeight: '3.65 kg / unit',
            giftboxSize: '320 × 240 × 195 mm',
            cartonQty: '4 units / master carton',
            cartonWeight: '15.8 kg / carton',
            cartonSize: '660 × 500 × 220 mm',
            cbmPerCarton: '0.072 CBM',
            container20GP: '1,500 units',
            container40HQ: '3,700 units'
        },
        oemTiers: [
            { moq: '20 pcs', service: 'Project-specific 4G frequency band testing & pre-shipment aging report', timeline: '5 business days' },
            { moq: '100 pcs', service: 'Custom brand silkscreen, startup audio, and neutral/branded packaging', timeline: '14 business days' },
            { moq: '500 pcs', service: 'Custom oversized solar panel configuration for high-latitude winter regions', timeline: '25 business days' }
        ],
        faqs: [
            {
                question: 'How much cellular data does the 36X 4G camera consume per month?',
                answer: 'Under standard motion-triggered recording (5–10 events daily), a 2GB to 5GB monthly data plan is sufficient. Firmware supports adjustable stream resolution to conserve cellular bandwidth.'
            },
            {
                question: 'How far can the 36X optical lens distinguish license plates and people?',
                answer: 'In optimal lighting conditions, the motorized 36X optical zoom can clearly read standard vehicle license plates up to 150-180 meters away and detect human motion up to 300 meters away.'
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
        featured: true,
        rating: 4.9,
        reviewCount: 215,
        solarPower: '7.8W High-Efficiency Monocrystalline Silicon',
        batteryCapacity: '10,800mAh High-Density Li-ion Pack',
        connectivity: '4G LTE / WiFi Dual Mode',
        ecosystem: 'UBox / Tuya',
        waterproof: 'IP66',
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
            'Image Sensor': 'Dual 1/2.9" 4MP CMOS Sensors (8MP Combined Output)',
            'AI Capabilities': 'Human/Vehicle Detection + Cross-Lens Auto-Lock & PTZ Tracking',
            'Active Deterrence': 'Smart Dual-Light (IR + White Spotlight) + High-Decibel Siren Alarm',
            'Audio System': 'Full-Duplex Two-Way Audio (Built-in Mic & Speaker)',
            'Network Options': '4G LTE (SIM Card) or WiFi Version Available',
            'Power System': 'High-Conversion Monocrystalline Solar Panel + BMS Rechargeable Battery'
        },
        lteBands: {
            eu: 'B1/B3/B7/B8/B20/B28A',
            us: 'B2/B4/B5/B12/B13/B66/B71',
            au: 'B1/B3/B5/B7/B8/B28',
            jp: 'B1/B3/B8/B18/B19/B26'
        },
        packaging: {
            netWeight: '1.85 kg / unit',
            giftboxSize: '275 × 195 × 175 mm',
            cartonQty: '6 units / master carton',
            cartonWeight: '11.8 kg / carton',
            cartonSize: '590 × 310 × 375 mm',
            cbmPerCarton: '0.068 CBM',
            container20GP: '2,500 units',
            container40HQ: '6,100 units'
        },
        oemTiers: [
            { moq: '50 pcs', service: 'Custom logo printing on camera & solar panel + FNSKU label service', timeline: '3-5 business days' },
            { moq: '200 pcs', service: 'Custom full-color packaging box & customized quick-start guide', timeline: '10-12 business days' },
            { moq: '1,000 pcs', service: 'App UI customization (UBox/Tuya) & exclusive regional distribution support', timeline: '20 business days' }
        ],
        faqs: [
            {
                question: 'Does streaming two lenses simultaneously drain the battery or 4G data quickly?',
                answer: 'No. Our proprietary firmware allows users to stream either a single combined preview or switch to dual HD streams on demand, while the low-power DSP keeps standby power under 0.003W until motion is detected.'
            },
            {
                question: 'Can the spotlight and siren be configured to turn off automatically at night?',
                answer: 'Yes. Via the app settings, users can select IR stealth mode (no visible red glow or spotlight), spotlight on trigger, or siren alarm on trigger with schedule rules.'
            }
        ]
    },
    {
        id: 'prod-04',
        slug: '4k-cellular-solar-hunting-trail-camera-nx-h800',
        model: 'NX-H800-4G',
        name: '4K 48MP Cellular 4G Solar Hunting Trail Camera with 940nm Stealth IR',
        category: 'Hunting Trail Camera',
        tagline: '0.1s lightning trigger with top integrated solar roof, live view app transmission, and zero-glow invisible night vision.',
        seoTitle: '4K Cellular 4G Solar Hunting Trail Camera Wholesale | OEM Wildlife Trail Cam',
        seoDescription: 'Manufacturer wholesale 4K 48MP cellular 4G trail camera with top-integrated solar panel, 0.1s trigger speed, 940nm no-glow IR, and remote app viewing for hunting and farm surveillance.',
        badge: 'Top Seller in US & EU Hunting Market',
        featured: true,
        rating: 4.9,
        reviewCount: 167,
        solarPower: '4W Integrated Top Curved Monocrystalline Panel',
        batteryCapacity: '8,000mAh Lithium Pack + 8×AA Battery Backup Slot',
        connectivity: '4G LTE',
        ecosystem: 'TrailCam Pro',
        waterproof: 'IP67',
        highlights: [
            'Top Integrated Curved Solar Panel: Continuous year-round battery maintenance under forest tree canopies',
            '0.1s Blazing Trigger Speed: Triple PIR sensors cover 120° wide angle detection without missing sprinting game',
            '4K Ultra HD Video & 48MP Stills: Pristine resolution with audio recording for wildlife observation and remote property defense',
            '940nm No-Glow Black IR LEDs: 100% invisible to human eyes and wild animals in total pitch darkness (up to 25m)',
            'Cellular App Cloud Delivery: Automatically pushes high-res snapshots and 10s video clips directly to iOS/Android phones'
        ],
        b2bValueProps: [
            {
                title: 'Dual Power Resilience (Solar + Backup Slot)',
                description: 'Combines an internal 8,000mAh rechargeable lithium battery with a built-in 8×AA emergency dry cell slot, guaranteeing continuous operation through months of severe winter storms.'
            },
            {
                title: 'High-Demand Retail & Outdoor Wholesaler Asset',
                description: 'Pre-certified with FCC, CE, IC, and RoHS. Supported with high-resolution packaging renders, barcode labeling, and localized hunting brand custom silk-screening.'
            }
        ],
        specs: {
            'Photo Resolution': '48MP / 36MP / 24MP / 16MP',
            'Video Resolution': '4K (3840×2160) at 30fps / 2K at 30fps with Sound',
            'Trigger Speed': '0.1s Trigger Time (Pre-activated with 3 PIR Sensors)',
            'Detection Angle': '120° Wide-Angle Triple PIR (Central 60° + Two Side 30° Sensors)',
            'IR Night Vision': '44 pcs 940nm No-Glow Invisible Black LEDs (25m Range)',
            'Storage Support': 'MicroSD card up to 256GB (Class 10 U3 recommended)',
            'Housing & Seal': 'IP67 Waterproof Heavy-Duty Camouflage Housing (-25°C to +60°C)'
        },
        lteBands: {
            eu: 'B1/B3/B7/B8/B20/B28',
            us: 'B2/B4/B5/B12/B13/B66/B71',
            au: 'B1/B3/B5/B7/B8/B28',
            jp: 'B1/B3/B8/B18/B19/B26'
        },
        packaging: {
            netWeight: '0.85 kg / unit',
            giftboxSize: '210 × 140 × 110 mm',
            cartonQty: '12 units / master carton',
            cartonWeight: '11.2 kg / carton',
            cartonSize: '450 × 340 × 300 mm',
            cbmPerCarton: '0.046 CBM',
            container20GP: '7,300 units',
            container40HQ: '17,500 units'
        },
        oemTiers: [
            { moq: '50 pcs', service: 'Custom brand logo silkscreen & customized barcode labels', timeline: '3 business days' },
            { moq: '300 pcs', service: 'Custom camouflage pattern hydro-dipping + retail packaging', timeline: '12 business days' },
            { moq: '1,000 pcs', service: 'Customized dedicated mobile App brand identity & firmware OEM', timeline: '20 business days' }
        ],
        faqs: [
            {
                question: 'Can the camera send photos to multiple mobile phones?',
                answer: 'Yes. Via the companion mobile app, the primary administrator account can share device access and push notifications with up to 10 family members or team members.'
            },
            {
                question: 'Does the 940nm IR flash emit any red glow at night?',
                answer: 'No. The 940nm wavelength is completely invisible to both humans and animals, preventing the camera from being spotted by trespassers or scaring away sensitive wildlife.'
            }
        ]
    }
];

export function getAllProducts(): ProductItem[] {
    return products;
}

export function getProductBySlug(slug: string): ProductItem | undefined {
    return products.find(p => p.slug === slug);
}

export function getFeaturedProducts(): ProductItem[] {
    return products.filter(p => p.featured);
}

export function getProductsByCategory(category: string): ProductItem[] {
    return products.filter(p => p.category === category);
}
