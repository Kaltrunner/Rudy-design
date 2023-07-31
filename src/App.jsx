import { Route } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import { ScrollToTop } from "react-router-scroll-to-top";
import Landing from "./Landing/Landing";
import Introduction from "./Intro/Introduction";
import Values from "./Values/Values";
import Rules from "./Rules/Rules";
import Components from "./Components/Components";
import AnimatedCursor from "react-animated-cursor";
import "./App.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <AnimatedCursor
        innerSize={0}
        outerSize={80}
        color="192, 171, 255"
        outerAlpha={1}
        innerScale={0}
        outerScale={1}
        trailingSpeed={16}
        hasBlendMode={true}
        hasFilter={true}
        hasZ-index={true}
        outerStyle={{
          filter: "blur(4px)",
          zIndex: "-100",
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
        {/* <Route path="/Buttons" element={<Buttons />} /> */}
        {/* <Route path="/CheckBoxes" element={<CheckBoxes />} /> */}
        {/* <Route path="/DropDowns" element={<DropDowns />} /> */}
        {/* <Route path="/SearchBars" element={<SearchBars />} /> */}
        {/* <Route path="/RangeSliders" element={<RangeSliders />} /> */}
        {/* <Route path="/Toggles" element={<Toggles />} /> */}
        {/* <Route path="/Alerts" element={<Alerts />} /> */}
        {/* <Route path="/InputFields" element={<InputFields />} /> */}
        {/* <Route path="/ColorGrids" element={<ColorGrids />} /> */}
        {/* <Route path="/About" element={<About />} /> */}
      </SlideRoutes>
    </>
  );
}

export default App;
