import { Route } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import { ScrollToTop } from "react-router-scroll-to-top";
import Landing from "./Landing/Landing";
import Introduction from "./Intro/Introduction";
import Values from "./Values/Values";
import Rules from "./Rules/Rules";
import Components from "./Components/Components";
import Alerts from "./Alerts/Alerts";
import Buttons from "./Buttons/Buttons";
import Checkboxes from "./Checkboxes/Checkboxes";
import ColorGrids from "./ColorGrids/ColorGrids";
import DropDowns from "./Dropdowns/Dropdowns";
import InputFields from "./InputFields/InputFields";
import RangeSliders from "./RangeSliders/RangeSliders";
import SearchBars from "./SearchBars/SearchBars";
import Toggles from "./Toggles/Toggles";
import AnimatedCursor from "react-animated-cursor";
import "./App.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <AnimatedCursor
        innerSize={0}
        outerSize={60}
        color="192, 171, 255"
        outerAlpha={1}
        innerScale={0}
        outerScale={1}
        trailingSpeed={15}
        hasBlendMode={true}
        hasFilter={true}
        hasZ-index={true}
        outerStyle={{
          filter: "blur(4px)",
          zIndex: "-100",
          border: "2px solid #10182080",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <SlideRoutes timing="linear">
        <Route path="/" element={<Landing />} />
        <Route path="/Introduction" element={<Introduction />} />
        <Route path="/Values" element={<Values />} />
        <Route path="/Rules" element={<Rules />} />
        <Route path="/Components" element={<Components />} />
        <Route path="/Alerts" element={<Alerts />} />
        <Route path="/Buttons" element={<Buttons />} />
        <Route path="/Checkboxes" element={<Checkboxes />} />
        <Route path="/ColorGrids" element={<ColorGrids />} />
        <Route path="/DropDowns" element={<DropDowns />} />
        <Route path="/InputFields" element={<InputFields />} />
        <Route path="/RangeSliders" element={<RangeSliders />} />
        <Route path="/SearchBars" element={<SearchBars />} />
        <Route path="/Toggles" element={<Toggles />} />
        {/* <Route path="/About" element={<About />} /> */}
      </SlideRoutes>
    </>
  );
}

export default App;
