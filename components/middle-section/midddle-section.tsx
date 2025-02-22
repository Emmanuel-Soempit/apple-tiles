import CompOne from "./components/comp-one";
import CompThree from "./components/comp-three";
import CompFour from "./components/comp-four";

export default function MiddleSection() {
  return (
    <div className="md:col-span-2 cols-span-1  md:px-5 flex flex-col gap-[5%] w-full col-span-1 h-screen">
    <CompOne/>
    <CompThree/>
    <CompFour/>
    </div>
  );
}
