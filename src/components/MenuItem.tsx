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
    // Determine price display
    let priceDisplay: React.ReactNode = null;
    if (isComingSoon) {
        priceDisplay = <span>Coming Soon</span>;
    } else if (glassPrice && bottlePrice) {
        priceDisplay = (
            <span>
                {glassPrice} <span className="text-[10px] text-ink-soft">/</span> {bottlePrice}
            </span>
        );
    } else if (bottlePrice) {
        priceDisplay = <span>{bottlePrice}</span>;
    } else if (price) {
        priceDisplay = <span>{price}</span>;
    }

    return (
        <div className="flex flex-col mb-[5px]">
            <div className="flex items-baseline w-full">
                {/* Left Side: Korean Name and ABV */}
                <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                    <span className="font-serif font-bold text-[13.5px] leading-tight text-ink tracking-tight">
                        {nameKr}
                    </span>
                    {abv && (
                        <span className="font-sans text-[9.5px] text-ink-soft opacity-90 pb-[1px]">
                            {abv}
                        </span>
                    )}
                </div>

                {/* Middle: Dotted Line */}
                <div className="flex-1 mx-2 border-b-[1.5px] border-dotted border-ink/20 relative top-[-4px]"></div>

                {/* Right Side: Price */}
                <div className="font-sans font-bold text-[12px] text-ink tracking-widest pl-1 whitespace-nowrap">
                    {priceDisplay}
                </div>
            </div>

            {/* Bottom: Description */}
            {description && (
                <div className="font-serif text-[9px] text-ink-soft opacity-85 mt-[2px] pr-[10%] leading-snug">
                    {description}
                </div>
            )}
        </div>
    );
}
