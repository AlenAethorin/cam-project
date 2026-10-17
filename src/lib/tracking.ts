export interface UtmAttribution {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    utm_term?: string;
    gclid?: string;
    fbclid?: string;
    landing_page?: string;
    referrer?: string;
    first_touch_at?: string;
    last_touch_at?: string;
}

const STORAGE_KEY = 'b2b_utm_attribution';

export function captureUtmParameters(): UtmAttribution {
    if (typeof window === 'undefined') {
        return {};
    }

    try {
        const url = new URL(window.location.href);
        const searchParams = url.searchParams;

        const utmKeys = [
            'utm_source',
            'utm_medium',
            'utm_campaign',
            'utm_content',
            'utm_term',
            'gclid',
            'fbclid'
        ] as const;

        let hasNewParams = false;
        const currentData: Partial<UtmAttribution> = {};

        for (const key of utmKeys) {
            const val = searchParams.get(key);
            if (val) {
                currentData[key] = val;
                hasNewParams = true;
            }
        }

        const existingRaw = localStorage.getItem(STORAGE_KEY);
        const existingData: UtmAttribution = existingRaw ? JSON.parse(existingRaw) : {};
        const now = new Date().toISOString();

        const updatedData: UtmAttribution = {
            ...existingData,
            ...currentData,
            landing_page: existingData.landing_page || window.location.pathname,
            referrer: existingData.referrer || document.referrer || 'direct',
            first_touch_at: existingData.first_touch_at || now,
            last_touch_at: now
        };

        if (hasNewParams || !existingRaw) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
        }

        return updatedData;
    } catch (e) {
        console.error('Failed to capture UTM attribution:', e);
        return {};
    }
}

export function getStoredAttribution(): UtmAttribution {
    if (typeof window === 'undefined') {
        return {};
    }

    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : {};
    } catch {
        return {};
    }
}

declare global {
    interface Window {
        dataLayer?: Array<Record<string, unknown>>;
    }
}

export function pushDataLayerEvent(event: string, payload: Record<string, unknown> = {}) {
    if (typeof window === 'undefined') return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event,
        ...payload,
        timestamp: new Date().toISOString()
    });

    // Helpful console log for developer debugging
    if (process.env.NODE_ENV !== 'production') {
        console.info(`[GTM dataLayer] Event: ${event}`, payload);
    }
}
