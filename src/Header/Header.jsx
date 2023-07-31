import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  function handleHomeClick() {}

  return (
    <div className="header-container">
      <Link to="/">
        <button className="header-buttons">←</button>
      </Link>

      <Link to="/Introduction">
        <button className="header-buttons">Introduction</button>
      </Link>
      <Link to="/Values">
        <button className="header-buttons">Values</button>
      </Link>
      <Link to="/Rules">
        <button className="header-buttons">Rules</button>
      </Link>
      <Link to="/Components">
        <button className="header-buttons">Components</button>
      </Link>
    </div>
  );
}

export default Header;
