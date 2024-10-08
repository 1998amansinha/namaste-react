# Hello World with JavaScript and React

## Printing Hello World using JavaScript

### Let's create an element:

```javascript
const heading = document.createElement('h1')
heading.innerHTML = 'Hello World!'

const divElement = document.getElementById('root')
divElement.appendChild(heading)
```
## Printing Hello World using React

First of all, our system needs to know that we are using React. This can be done by including the React CDN scripts:
```javascript
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

### Creating a Single Element

Given the following HTML structure:
```html
<div id="root">
  <h1>I will be replaced by the root.render</h1>
</div>
```

**We can create an element using React like this:**

```javascript

const element = React.createElement(
  "h1", // type
  { id: "create" }, // Attribute {props.id}
  "Hello World using React!" // props.children
);
```
Creating a Nested Structure
HTML Structure:
```html
<div id="parent">
  <div id="child1">
    <h1 id="print">I am an H1 tag</h1>
    <h2 id="print">I am an H2 tag</h2> 
  </div>
  <div id="child2">
    <h1 id="print">I am an H1 tag</h1>
    <h2 id="print">I am an H2 tag</h2> 
  </div>
</div>
```

**Creating Nested Structure in React**
This type of nested structure can be created in React like so:

```javascript
const element = React.createElement("div", { id: "parent" }, [ 
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "print" }, "I am an H1 tag"), 
    React.createElement("h2", { id: "print2" }, "I am an H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);
```
Here, React.createElement is an object {}. Inside this object, we have different things like props, key, attribute, children, and many other properties. For example:

{ id: "child" } is an attribute.
h1, div, span, or p are types.
"I am ....." is props.children.
You can log the element to see the object structure:

```javascript
console.log(element);
```
***Rendering in the DOM***
To render something in the DOM using React, we use react-dom:

```javascript
const root = ReactDOM.createRoot(document.getElementById("root"));
```
You can log the root object:

```javascript
console.log(root); // ReactDOM.createRoot is {_internalRoot: FiberRootNode} a FiberRootNode.
```

### Finally, to render the created element on the browser:

```javascript
root.render(element);
```