import { Link } from "react-router-dom";
import "./compHeader.css";

function CompHeader() {
  return (
    <div className="comp-header-container">
      <Link to="/Components">
        <button className="comp-header-home-button">✖</button>
      </Link>
    </div>
  );
}

export default CompHeader;
