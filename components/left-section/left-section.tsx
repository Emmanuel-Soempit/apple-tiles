import { SideBox } from "../side-box";
import CompOne from "./components/comp-one";
import CompTwo from "./components/comp-two";
import CompThree from "./components/comp-three";
import CompFour from "./components/comp-four";

export default function LeftSection() {
  return (
    <SideBox>
     <CompOne/>
     <CompTwo/>
    <CompThree/>
    <CompFour/>
    </SideBox>
  );
}
