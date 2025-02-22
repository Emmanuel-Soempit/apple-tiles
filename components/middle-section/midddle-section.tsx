import CompOne from "./components/comp-one";
import CompThree from "./components/comp-three";
import CompFour from "./components/comp-four";

export default function MiddleSection() {
  return (
    <div className="cols-span-1 h-[130vh] md:h-screen w-full flex-col md:px-10 flex gap-[3%]">
    <CompOne/>
    <CompThree/>
    <CompFour/>
    </div>
  );
}
