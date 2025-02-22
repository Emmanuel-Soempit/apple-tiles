import LeftSection from "@/components/left-section/left-section";
import MiddleSection from "@/components/middle-section/midddle-section";
import RightSection from "@/components/right-section/right-section";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 text-black lg:gap-x-3 p-5 w-screen  min-h-screen overscroll-y-auto lg:h-screen">
      <LeftSection />

      <MiddleSection />

      <RightSection />
    </div>
  );
}
