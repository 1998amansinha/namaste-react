import React from 'react';
import ReactDOM from 'react-dom/client';

const element = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "print" }, "I am an H1 tag"), //array of childrens for child
    React.createElement("h2", { id: "print2" }, "I am an H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);


// To render something in the dom in react we use react-dom
const root = ReactDOM.createRoot(document.getElementById("root"));


// now to render the created element on the browser we have to render it using the react-dom.
root.render(element);
