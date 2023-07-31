import { Route } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import Landing from "./Landing/Landing";
import AnimatedCursor from "react-animated-cursor";
import "./App.css";

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={0}
        outerSize={60}
        color="192, 171, 255"
        outerAlpha={1}
        innerScale={0.7}
        outerScale={1}
        trailingSpeed={10}
        hasBlendMode={true}
        hasFilter={true}
        blur="1px"
        outerStyle={{
          filter: "blur(10px)",
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
      <SlideRoutes>
        <Route path="/" element={<Landing />} />

        {/* <Route path="/Introduction" element={<Introduction />} />

          <Route path="/Values" element={<Values />} />

          <Route path="/Rules" element={<Rules />} />

          <Route path="/Components" element={<Components />} />

          <Route path="/Buttons" element={<Buttons />} />

          <Route path="/CheckBoxes" element={<CheckBoxes />} />

          <Route path="/DropDowns" element={<DropDowns />} />

          <Route path="/SearchBars" element={<SearchBars />} />

          <Route path="/RangeSliders" element={<RangeSliders />} />

          <Route path="/Toggles" element={<Toggles />} />

          <Route path="/Alerts" element={<Alerts />} />

          <Route path="/InputFields" element={<InputFields />} />

          <Route path="/ColorGrids" element={<ColorGrids />} />

          <Route path="/About" element={<About />} /> */}
      </SlideRoutes>
    </>
  );
}

export default App;
