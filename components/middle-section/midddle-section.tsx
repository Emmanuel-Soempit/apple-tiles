import CompOne from "./components/comp-one";
import CompThree from "./components/comp-three";
import CompFour from "./components/comp-four";

export default function MiddleSection() {
  return (
    <div className="col-span-2 md:cols-span-1 h-screen flex-col px-10 flex gap-[3%]">
    <CompOne/>
    <CompThree/>
    <CompFour/>
    </div>
  );
}
