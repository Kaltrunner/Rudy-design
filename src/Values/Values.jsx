import Header from "../Header/Header";
import "./values.css";

function Values() {
  return (
    <div className="values-container-div">
      <Header />
      <div className="values-text-div">
        <h1>.Core Values</h1>
      </div>
      <div className="line-between"></div>
      <div className="values-text-body">
        <p className="values-p-text">
          Our core values are the guiding principles that inform the design,
          development, and use of the design system.
          <br /> They help ensure that the design system stays aligned with the
          needs and goals of the organization,
          <br /> and they can also serve as a touchstone for decision-making
          during the design and development process.
        </p>

        <div className="value-div">
          design
          <br />{" "}
          <p className="description-text">
            <strong>Simplicity:</strong> Designing a system that is easy to use,
            understand, and maintain.
            <br />
            <p></p>
            <strong>Consistency:</strong> Creating a cohesive, consistent user
            experience across all parts of the website by following a common set
            of design patterns and guidelines.
          </p>
        </div>

        <div className="value-div">
          Accessibility
          <br />{" "}
          <p className="description-text">
            <strong>Accessibility:</strong> Ensuring that the design system is
            usable and accessible to all users, regardless of ability or
            disability.
            <p></p>
            <strong>Usability:</strong> Prioritizing the needs and goals of
            users by providing a user-centered design approach.
            <p></p>
            <strong>Inclusivity:</strong> Creating a system that is inclusive to
            all and avoid any kind of bias and discrimination.
          </p>
        </div>

        <div className="value-div">
          maintenance
          <br />{" "}
          <p className="description-text">
            <strong>Maintainability:</strong> Creating a design system that is
            easy to update, maintain and scale in the future.
            <p></p>
            <strong>Scalability:</strong> Ensuring that the system can be used
            effectively by multiple teams, across different platforms and
            contexts.
          </p>
        </div>

        <div className="value-div">
          evolution
          <br />{" "}
          <p className="description-text">
            <strong>Flexibility:</strong> Building a system that can adapt and
            evolve over time to meet the changing needs of the organization and
            its users.
            <p></p>
            <strong>Speed:</strong> Designing for load time and performance,
            making sure that everything is fast and responsive to user
            interactions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Values;
