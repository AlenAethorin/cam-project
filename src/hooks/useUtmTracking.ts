'use client';

import { useEffect, useState } from 'react';
import { captureUtmParameters, getStoredAttribution, UtmAttribution } from '@/lib/tracking';

export function useUtmTracking(): UtmAttribution {
    const [attribution, setAttribution] = useState<UtmAttribution>({});

    useEffect(() => {
        const captured = captureUtmParameters();
        setAttribution(captured || getStoredAttribution());
    }, []);

    return attribution;
}
