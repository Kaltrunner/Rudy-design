import React, { useState } from "react";
import CompHeader from "../CompHeader/CompHeader";
import CompFooter from "../CompFooter/CompFooter";
import "./alerts.css";

function Alerts() {
  const [codeAlong, setCodeAlong] = useState(true);

  return (
    <>
      <CompHeader />
      <div className="comp-button-container-div">
        <div className="landing-logo-text-div">
          <h1 className="comp-landing-logo-text">.Alerts</h1>
        </div>

        <div className="comp-text-body">
          <p>
            Alerts, also known as notifications, are a common element in design.
            <br /> They are used to communicate important information or
            feedback to the user in a clear and concise manner.
            <br /> They are often used to inform the user of an error, a success
            message, or to confirm an action.
          </p>

          <p>
            Designing effective alerts can greatly improve the user experience
            and make it more intuitive and efficient.
          </p>
        </div>

        <div className="line-between"></div>

        <div className="input-field-container">
          <div className="comp-text-body">
            <h2>Alert Variants</h2>

            <p>
              Alerts refer to the use of visual cues, such as color, typography,
              and icons, to notify users of important information or actions
              that need to be taken.
              <br /> They are commonly used in user interfaces to communicate
              info messages, success messages, warning messages and errors.
              <br /> They can also be used to inform users of updates, new
              content, or other important information.
              <br /> It's important to use alerts sparingly and make sure they
              are clearly visible and easy to understand, so as not to confuse
              or overwhelm users.
            </p>
          </div>
          <div className="alert-field-div">
            <h3 className="input-h3-text">Info alert</h3>

            <div className="alert-box">
              <a className="alert-button" href="#popup1">
                Info.
              </a>
            </div>

            <div id="popup1" className="alert-overlay">
              <div className="alert-popup">
                <h2>Info.</h2>
                <a className="alert-close" href="/Alerts">
                  &times;
                </a>
                <div className="content">Info alert...</div>
              </div>
            </div>
          </div>

          <div className="alert-field-div">
            <h3 className="input-h3-text">Success alert</h3>

            <div className="success-box">
              <a className="success-button" href="#popup2">
                Success!
              </a>
            </div>

            <div id="popup2" className="success-overlay">
              <div className="success-popup">
                <h2>Succes!</h2>
                <a className="success-close" href="/Alerts">
                  &times;
                </a>
                <div className="content">Succes alert...</div>
              </div>
            </div>
          </div>

          <div className="alert-field-div">
            <h3 className="input-h3-text">Warning alert</h3>

            <div className="warning-box">
              <a className="warning-button" href="#popup3">
                Warning!
              </a>
            </div>

            <div id="popup3" className="warning-overlay">
              <div className="warning-popup">
                <h2>Warning!</h2>
                <a className="warning-close" href="/Alerts">
                  &times;
                </a>
                <div className="content">Warning alert...</div>
              </div>
            </div>
          </div>

          <div className="alert-field-div">
            <h3 className="input-h3-text">Error / Danger alert</h3>

            <div className="danger-box">
              <a className="danger-button" href="#popup4">
                Error / Danger!
              </a>
            </div>

            <div id="popup4" className="danger-overlay">
              <div className="danger-popup">
                <h2>Error / Danger!</h2>
                <a className="danger-close" href="/Alerts">
                  &times;
                </a>
                <div className="content">Error or Danger alert...</div>
              </div>
            </div>
          </div>

          {codeAlong ? (
            <div className="code-along-div">
              <button className="css-button">HTML</button>
              <button
                onClick={() => setCodeAlong(false)}
                className="html-button"
              >
                CSS
              </button>

              <div className="code-along-text">
                <pre>{`

                    <div className="alert-box">

                        <a className="alert-button" href="#popup1">Alert</a>
                        
                    </div>

                    <div id="popup1" className="alert-overlay">

                        <div className="alert-popup">

                            <h2>Info.</h2>

                            <a className="alert-close" href="#">&times;</a>

                            <div className="content">Info alert tile
                            </div>

                        </div>

                    </div>
  
                    `}</pre>
              </div>
            </div>
          ) : (
            <div className="code-along-css-div">
              <button onClick={() => setCodeAlong(true)} className="css-button">
                HTML
              </button>
              <button className="html-button">CSS</button>
              <div className="code-along-text">
                <pre>{`

                        .alert-box {
                            margin-top: 10vw;
                            width: 30vw;
                            margin: 2vw;
                            background: rgba(228,228,228, 0.75);
                            padding: 3vw;
                            border-left: none;
                            border-right: none;
                            border-bottom: none;
                            border-top: 2px solid #6681ff;
                            border-radius: 2px;
                            text-align: center;
                        }
                        
                        .alert-button {
                            width: 4rem;
                            font-size: 1.5vw;
                            padding: 1.5vw;
                            color: #101820;
                            background-color: #d9dfff;
                            border: 1px solid #101820;
                            border-radius: 2px;
                            text-decoration: none;
                            transition: all 0.25s ease-in-out;
                        }

                        .alert-button:hover {
                            background-color: #6681ff;
                            transition: all 0.25s ease-in-out;
                            cursor: pointer !important;
                        }
                        
                        .alert-overlay {
                            position: fixed;
                            top: 0;
                            bottom: 0;
                            left: 0;
                            right: 0;
                            background: rgba(0, 0, 0, 0.75);
                            transition: opacity 500ms;
                            visibility: hidden;
                            opacity: 0;
                        }

                        .alert-overlay:target {
                            visibility: visible;
                            opacity: 1;
                        }
                        
                        .alert-popup {
                            margin: 14vw auto;
                            padding: 2rem;
                            border-radius: 2px;
                            width: 25vw;
                            position: relative;
                            backdrop-filter: blur(4px);
                            opacity: 1!important; 
                            background: rgba(245,245,245,0.75);
                        }

                        .alert-popup .alert-close {
                            position: absolute;
                            top: 1em;
                            right: 1.5em;
                            transition: all .25s;
                            font-size: 2vw;
                            font-weight: bold;
                            text-decoration: none;
                            color: #101820;
                        }
                        .alert-popup .alert-close:hover {
                            color: #6681ff;
                            cursor: pointer !important;
                        }


                    `}</pre>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="comp-line-between"></div>
      <CompFooter />
    </>
  );
}

export default Alerts;
