import React from "react";
import ReactDOM from "react-dom/client";

function TitleComponent() {
  return <h1>This is the Title Component</h1>;
}

function HeadingComponent() {
  return <h2>This is the Heading component</h2>;
}

const Heading = <h2>Hello</h2>;
function MainComponent() {
  return (
    <div>
      {/* {Heading} we can also put variable in our functional component 
      <h2>{2 + 2}</h2> //we can also do js in this */}
      {TitleComponent()}
      <TitleComponent/>
      <TitleComponent></TitleComponent> // the above 3 are the same 
      <TitleComponent />
      <HeadingComponent />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MainComponent />);
