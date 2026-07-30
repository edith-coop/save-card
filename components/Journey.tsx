"use client"
import React, { useCallback, useRef, useState } from 'react';
import { GreetingCardTemplate } from './GreetingCardTemplate';
import html2canvas from 'html2canvas';

const Journey = () => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isGenerating, setIsGenerating] = useState(false);

    const generateCardImage = useCallback(() => {
        if (!cardRef.current) return null;

        setIsGenerating(true);
        return new Promise<Blob | null>((resolve) => {
            const generate = async () => {
                try {
                    if (!cardRef.current) {
                        setIsGenerating(false);
                        resolve(null);
                        return;
                    }
                    await document.fonts.ready;
                    await new Promise((res) => setTimeout(res, 500));
                    const canvas = await html2canvas(cardRef.current, {
                        useCORS: true,
                        logging: false,
                    });
                    canvas.toBlob((blob) => {
                        setIsGenerating(false);
                        resolve(blob);
                    }, 'image/png');
                } catch (error) {
                    console.error('Error generating card image:', error);
                    setIsGenerating(false);
                    resolve(null);
                }
            };

            if ('requestIdleCallback' in window) {
                (window as any).requestIdleCallback(() => generate());
            } else {
                generate();
            }
        });
    }, []);

    const handleSaveCard = useCallback(async () => {
        const blob = await generateCardImage();
        if (!blob) return;
        const fileName = `nhin-lai-hanh-trinh-mua-sam-cua`;

        const reader = new FileReader();
        reader.onloadend = () => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = `${fileName}.png`;
            link.href = url;
            link.click();
            URL.revokeObjectURL(url);
        };
        reader.readAsDataURL(blob);
    }, [generateCardImage]);
    return (
        <div>
            <button
                className="relative aspect-[228/52] w-30 pc:w-[228px]"
                title="LƯU THIỆP"
                onClick={handleSaveCard}
            >
                Tai anh xuong
            </button>
            <GreetingCardTemplate cardRef={cardRef} />
        </div>
    );
};

export default Journey;