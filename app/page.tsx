import LeftSection from "@/components/left-section/left-section";
import MiddleSection from "@/components/middle-section/midddle-section";
import RightSection from "@/components/right-section/right-section";

export default function Home() {
  return (
    <div className="flex flex-col  md:flex-row text-black  p-5 w-screen md:max-h-screen  min-h-screen overscroll-y-auto l">
      <LeftSection />

      <MiddleSection />

      <RightSection />
    </div>
  );
}
