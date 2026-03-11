import { menuPages } from "@/data/menu-data";
import PageCard from "@/components/PageCard";

export default function Home() {
  const totalPages = menuPages.length;

  return (
    <div className="flex flex-col items-center gap-12 py-12 min-h-screen">
      {/* 
        For web display, we show pages vertically or side-by-side depending on screen width.
        But for printing, the @page size in globals.css is set to A4 landscape, 
        and the wrapper will adapt so pairs of A5 fit perfectly in A4. 
      */}
      <div className="flex flex-wrap justify-center gap-[0mm] w-full max-w-[297mm]">
        {menuPages.map((sections, index) => (
          <PageCard
            key={index}
            pageNumber={index + 1}
            totalPages={totalPages}
            sections={sections}
          />
        ))}
      </div>
    </div>
  );
}
