import LeftSection from "@/components/left-section/left-section";
import MiddleSection from "@/components/middle-section/midddle-section";
import RightSection from "@/components/right-section/right-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row text-black  p-5 w-screen lg:max-h-screen   overscroll-y-auto ">
      <LeftSection />

      <MiddleSection />

      <RightSection />
    </div>
  );
}
