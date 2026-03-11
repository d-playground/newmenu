import { menuPages } from "@/data/menu-data";
import PageCard from "@/components/PageCard";

export default function Home() {
  const totalPages = menuPages.length;

  const pairedPages = [];
  for (let i = 0; i < menuPages.length; i += 2) {
    pairedPages.push(menuPages.slice(i, i + 2));
  }

  return (
    <div className="flex flex-col items-center bg-wrapper min-h-screen py-12 gap-12 print:block print:bg-transparent print:p-0 print:m-0 print:gap-0">
      {pairedPages.map((pair, pairIdx) => (
        <div
          key={pairIdx}
          className="flex flex-col sm:flex-row justify-center print:flex-row print:justify-start print:w-[297mm] print:h-[210mm] print:break-inside-avoid print:break-after-page print:overflow-hidden gap-12 sm:gap-0 print:gap-0 mx-auto"
        >
          {pair.map((sections, idx) => {
            const pageIndex = pairIdx * 2 + idx;
            return (
              <PageCard
                key={pageIndex}
                pageNumber={pageIndex + 1}
                totalPages={totalPages}
                sections={sections}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
