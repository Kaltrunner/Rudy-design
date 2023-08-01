import "./landing.css";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing-containder">
      <div className="landing-logo-text-div">
        <h1 className="landing-logo-text">.Rudy</h1>
      </div>

      <div className="line-between"></div>

      <div className="mission-statement-div">
        <h2 className="mission-statement-text">
          a design system created by developers for developers
        </h2>
      </div>

      <div className="landing-directory-div">
        <Link to="/Introduction" className="landing-link">
          <div className="introduction-div">
            Introduction
            <br />{" "}
            <p className="description-text">
              what the site offers and why it was created
            </p>{" "}
          </div>
        </Link>

        <div className="below-the-intro-div">
          <Link to="/Values" className="landing-link">
            <div className="values-div">
              Values
              <br />{" "}
              <p className="description-text">
                a brief explanation of our core values
              </p>
            </div>
          </Link>

          <Link to="/Rules" className="landing-link">
            <div className="rules-div">
              Rules
              <br />{" "}
              <p className="description-text">
                design rules and guidelines for using the components{" "}
              </p>
            </div>
          </Link>

          <Link to="/Components" className="landing-link">
            <div className="components-div">
              Components
              <br />{" "}
              <p className="description-text">components with code examples</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
