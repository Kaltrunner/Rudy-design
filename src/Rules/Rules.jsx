import Header from "../Header/Header";
import "./rules.css";

function Rules() {
  return (
    <div className="rules-container-div">
      <Header />
      <div className="rules-text-div">
        <h1>.Rules</h1>
      </div>
      <div className="line-between"></div>
      <div className="rules-text-body">
        <h3>
          These are general guidelines in practice, it will depend on the
          specific project, type of media and target audience, so they are
          flexible.
        </h3>
        <br />

        <p className="p-text" >
          <strong>User-centered design:</strong> Design with the end user in
          mind, considering their needs, goals, and preferences throughout the
          design process.
          <br />
          <strong>Simplicity:</strong> Keep designs simple, clean and easy to
          understand.
          <br />
          <strong>Alignment:</strong> Align elements to a grid to create a
          visually balanced composition.
          <br />
          <strong>Repetition:</strong> Repeat design elements throughout a
          project to create a cohesive visual language.
          <br />
          <strong>Contrast:</strong> Ensure that there is enough contrast
          between text and background colors to make text legible.
          <br />
          <strong>White space:</strong> Use white space to create visual
          hierarchy and separate different sections of content.
          <br />
          <strong>Proximity:</strong> Group related elements together to
          indicate their relationship.
          <br />
          <strong>Accessibility:</strong> design for all the users with
          different abilities by providing alternative for non-textual content,
          keyboard navigation and enough color contrast.
          <br />
          <strong>Typography:</strong> Use typography effectively to create
          hierarchy and legibility in text.
        </p>
      </div>
    </div>
  );
}

export default Rules;
