'use client';

import { useEffect } from 'react';
import { captureUtmParameters } from '@/lib/tracking';

export function UtmTracker() {
    useEffect(() => {
        captureUtmParameters();
    }, []);

    return null;
}
