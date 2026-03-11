import React from "react";
import MenuSection from "./MenuSection";
import { MenuSectionProps } from "../data/menu-data";

interface PageCardProps {
    sections: MenuSectionProps[];
    pageNumber: number;
    totalPages: number;
}

export default function PageCard({ sections, pageNumber, totalPages }: PageCardProps) {
    return (
        <div
            className="relative flex-none"
            style={{
                width: "148.5mm",
                height: "210mm",
                padding: "14mm 9mm 6mm 9mm", // Increased top padding for clipboard clips
            }}
        >
            {/* Vintage decorative border */}
            <div className="absolute inset-[4mm] border-[0.5px] border-solid border-ink-soft/40 pointer-events-none z-10">
                <div className="absolute top-[-3px] left-[-3px] text-[10px] font-sans text-ink-soft/60">╭</div>
                <div className="absolute top-[-3px] right-[-3px] text-[10px] font-sans text-ink-soft/60">╮</div>
                <div className="absolute bottom-[-3.5px] left-[-3px] text-[10px] font-sans text-ink-soft/60">╰</div>
                <div className="absolute bottom-[-3.5px] right-[-3px] text-[10px] font-sans text-ink-soft/60">╯</div>
            </div>
            <div className="absolute inset-[5.5mm] border-[0.3px] border-solid border-ink-soft/20 pointer-events-none z-10"></div>

            {/* Content wrapper */}
            <div className="h-full flex flex-col pt-4 px-2 overflow-hidden relative z-20">
                {/* Render sections */}
                <div className="flex-1">
                    {sections.map((section, idx) => (
                        <MenuSection key={idx} {...section} />
                    ))}
                </div>

                {/* Footer / Page Number */}
                <div className="w-full flex justify-center pb-2">
                    <span className="font-sans text-[9px] text-ink-soft tracking-[3px] opacity-70">
                        {String(pageNumber).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
                    </span>
                </div>
            </div>
        </div>
    );
}
