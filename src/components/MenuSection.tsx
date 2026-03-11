import React from "react";
import MenuItem from "./MenuItem";
import { MenuSectionProps } from "../data/menu-data";

export default function MenuSection({ title, subtitle, items }: MenuSectionProps) {
    return (
        <div className="mb-4 w-full">
            {/* Title block */}
            <div className="mb-[4px]">
                <h2 className="font-sans uppercase text-[11px] tracking-[1.5px] font-[800] text-ink border-b-[2px] border-double border-ink/20 pb-1 w-full flex items-baseline justify-between">
                    <span>{title}</span>
                    {subtitle && (
                        <span className="font-serif text-[9px] text-ink-soft tracking-normal font-normal opacity-80">
                            {subtitle}
                        </span>
                    )}
                </h2>
            </div>

            {/* Items List */}
            <div className="flex flex-col gap-[2px]">
                {items.map((item, index) => (
                    <MenuItem key={index} {...item} />
                ))}
            </div>
        </div>
    );
}
