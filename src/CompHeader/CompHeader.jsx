import { Link } from "react-router-dom";
import "./compHeader.css";

function CompHeader() {
  return (
    <div className="comp-header-container">
      <Link to="/">
        <p className="home-link">.Rudy</p>
      </Link>
      <Link to="/Components">
        <button className="comp-header-home-button">
          Close <span>✖</span>
        </button>
      </Link>
    </div>
  );
}

export default CompHeader;
