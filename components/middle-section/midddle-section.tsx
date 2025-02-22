import CompOne from "./components/comp-one";
import CompThree from "./components/comp-three";
import CompFour from "./components/comp-four";

export default function MiddleSection() {
  return (
    <div className=" justify-start gap-[7%] md:px-5 flex flex-col w-[60%]  md:max-h-screen min-h-screen">
    <CompOne/>
    <CompThree/>
    <CompFour/>
    </div>
  );
}
