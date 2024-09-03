// Element is created using react
// const element = React.createElement(
//   "h1", //type
//   { id: "create" }, // Attribute {props.id}
//   "Hello World using React!" // props.children
// );

// For Nested Structure

/*
<div id="parent">
    <div id="child1">
        <h1 id="print">I am an H1 tag</h1>
        <h2 id="print">I am an H2 tag</h2> // how can we give this type of multiple nested child . so this can be done using array means creating an array of children
    </div>
    <div id="child2">
        <h1 id="print">I am an H1 tag</h1>
        <h2 id="print">I am an H2 tag</h2> // how can we give this type of multiple nested child . so this can be done using array means creating an array of children
    </div>
</div>
*/

//so this type of nested structure is created like

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

console.log(element); // here React.createElment is just an object with a props

// To render something in the dom in react we use react-dom
const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(root) // here ReactDom.createRoot is {_internalRoot: FiberRootNode} a FiberRootNode.

// now to render the created element on the browser we have to render it using the react-dom.
root.render(element);
