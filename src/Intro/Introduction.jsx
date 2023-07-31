import Header from "../Header/Header";
import "./introduction.css";

function Introduction() {
  return (
    <div className="intro-container-div">
      <Header />
      <div className="intro-text-div">
        <h1>.Introduction</h1>
      </div>
      <div className="line-between"></div>
      <div className="intro-text-body">
        <p className="p-text-body">
          .Rudy, a design system is a collection of design standards,
          guidelines, and components that a team can use to create a consistent
          and cohesive user experience across all of the products, platforms,
          and services that a company offers. This design system can be
          implemented at different scales, from a single website to a single
          company, to a whole industry. With the help of .Rudy it makes the
          design and development process more efficient and scalable. Ensuring a
          consistent user experience across different touch points. .Rudy will
          help to ensure that all of the different pieces of a company's digital
          presence fit together in a way that is easy for users to understand
          and navigate.
        </p>
        <p className="p-text-body-bold">Thank you for using .Rudy</p>
      </div>
    </div>
  );
}

export default Introduction;
