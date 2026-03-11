import React from "react";
import { MenuItemProps } from "../data/menu-data";

export default function MenuItem({
    nameEn,
    nameKr,
    price,
    glassPrice,
    bottlePrice,
    abv,
    description,
    isComingSoon,
}: MenuItemProps) {
    // Format price to ensure 1 decimal place if a number
    const formatPrice = (p?: string | number) => {
        if (typeof p === "number") return p.toFixed(1);
        return p;
    };

    let priceDisplay: React.ReactNode = null;
    if (isComingSoon) {
        priceDisplay = <span>Coming Soon</span>;
    } else if (glassPrice && bottlePrice) {
        priceDisplay = (
            <span>
                {formatPrice(glassPrice)} <span className="text-[10px] text-ink-soft">/</span> {formatPrice(bottlePrice)}
            </span>
        );
    } else if (bottlePrice) {
        priceDisplay = <span>{formatPrice(bottlePrice)}</span>;
    } else if (price) {
        priceDisplay = <span>{formatPrice(price)}</span>;
    }

    return (
        <div className="flex flex-col mb-[3px]">
            <div className="flex items-baseline w-full">
                {/* Left Side: Korean Name and ABV */}
                <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                    <span className="font-serif font-bold text-[12px] leading-tight text-ink tracking-tight">
                        {nameKr}
                    </span>
                    {abv && (
                        <span className="font-serif text-[8px] text-ink-soft opacity-90 pb-[1px]">
                            {abv}
                        </span>
                    )}
                </div>

                {/* Middle: Dotted Line */}
                <div className="flex-1 mx-2 border-b-[1px] border-dotted border-ink/20 relative top-[-4px]"></div>

                {/* Right Side: Price */}
                <div className="font-serif font-bold text-[10.5px] text-ink tracking-widest pl-1 whitespace-nowrap">
                    {priceDisplay}
                </div>
            </div>

            {/* Bottom: Description */}
            {description && (
                <div className="font-serif text-[8px] text-ink-soft opacity-85 mt-[1px] pr-[10%] leading-snug">
                    {description}
                </div>
            )}
        </div>
    );
}
