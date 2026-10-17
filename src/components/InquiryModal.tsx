'use client';

import React, { useState, useEffect } from 'react';
import { InquiryForm } from './InquiryForm';
import { X } from 'lucide-react';

export function openInquiryModal(defaultProduct: string = '') {
    if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('open-b2b-inquiry', { detail: { product: defaultProduct } }));
    }
}

export function InquiryModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [targetProduct, setTargetProduct] = useState('');

    useEffect(() => {
        const handleOpen = (e: Event) => {
            const customEvent = e as CustomEvent<{ product?: string }>;
            setTargetProduct(customEvent.detail?.product || '');
            setIsOpen(true);
        };

        window.addEventListener('open-b2b-inquiry', handleOpen);
        return () => window.removeEventListener('open-b2b-inquiry', handleOpen);
    }, []);

    // Close on escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
            <div
                className="fixed inset-0"
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
            />
            <div className="relative w-full max-w-2xl z-10 max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl">
                <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close modal"
                    className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>
                <InquiryForm
                    defaultProduct={targetProduct}
                    sourceLocation="modal_popup"
                    compact={true}
                    onSuccess={() => {
                        // Modal stays open to show the success screen
                    }}
                />
            </div>
        </div>
    );
}
