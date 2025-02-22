import { SideBox } from "../side-box";
import CompOne from "./components/comp-one";
import CompTwo from "./components/comp-two";
import CompThree from "./components/comp-three";
import CompFour from "./components/comp-four";
import CompFive from "./components/comp-five";

export default function RightSection() {
  return (
    <SideBox>
     <CompOne/>
     <CompTwo/>
    <CompThree/>
    <CompFour/>
    <CompFive/>
    </SideBox>
  );
}
