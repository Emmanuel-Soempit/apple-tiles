import CompOne from "./components/comp-one";
import CompThree from "./components/comp-three";
import CompFour from "./components/comp-four";

export default function MiddleSection() {
  return (
    <div className="flex flex-col justify-between lg:justify-start gap-[4%] w-full lg:w-[60%] lg:px-4 lg:max-h-screen h-screen min-h-screen">
    <CompOne/>
    <CompThree/>
    <CompFour/>
    </div>
  );
}
