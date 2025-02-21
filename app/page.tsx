import LeftSection from "@/components/left-section/left-section";
import MiddleSection from "@/components/middle-section/midddle-section";
import RightSection from "@/components/right-section/right-section";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 text-black gap-x-3 p-5 w-screen bg-white h-screen">
      <LeftSection />

      <MiddleSection />

      <RightSection />
    </div>
  );
}
