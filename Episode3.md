# Running a React Program Using Parcel

To run a React application with Parcel, we typically use the command:

```bash
npx parcel index.html
```
In this command, index.html is the root node of our application.

# Custom Script for Running React App

We can simplify this process by adding custom scripts to the package.json file. This way, we can start our React app with a single command.

Here's how to add the scripts:

```json
"scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html",
  "test": "jest"
}
```
***With this setup, the next time we need to run our program, we just need to type:***

```bash
npm run start
```

**Why do we use npm instead of npx? It's because we're calling an npm script to run our app.**

# Creating the App.js from Scratch

**Let's build our App.js file step by step:**

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', {id: 'heading'}, "Namaste React");
// In this code, the heading variable is a React element, which is essentially an object.

// Next, we need to connect our React element with ReactDOM:

const root = ReactDOM.createRoot(document.getElementById('root'));
// Now, we render our heading in the root element:

root.render(heading);
```

# Introducing JSX for Simplicity

When building elements in React, we often use React.createElement to create and insert elements into the DOM. However, using React.createElement repeatedly can become cumbersome and verbose, especially in complex applications.

To streamline this process, developers introduced JSX (JavaScript XML). JSX is a syntax extension for JavaScript that looks similar to HTML. It allows us to write HTML-like code directly within JavaScript, making the code more readable and intuitive.

Instead of manually writing React.createElement every time you want to create an element, JSX lets you write elements in a syntax that closely resembles HTML. Under the hood, JSX gets compiled to React.createElement calls, but it saves developers from having to write these calls explicitly.

In summary, JSX simplifies the process of creating React elements by allowing developers to write HTML-like syntax directly within their JavaScript code, making the development process faster, cleaner, and more maintainable.

### Using JSX in React

Let's see how we can use JSX in our App.js file:

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', {id: 'heading'}, "Namaste React");

const jsxHeading = <h1 id='heading2'>Namaste React using JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeading);
```

In this example, we've created an h1 tag in JSX with an id attribute, and we've passed the text "Namaste React using JSX" as its child. When we compare this JSX syntax with the previous approach using React.createElement, there's a significant difference. However, the overall procedure remains the same: we still need to create a root using ReactDOM and render the JSX element into that DOM.

***The key difference lies in the syntax. Instead of manually using React.createElement, we now use JSX, which is much more developer-friendly. You can write this JSX code directly in a .js file, making it easier to read and maintain.***

# Understanding the Role of Parcel and Babel

It's important to note that, at runtime, the developer console doesn't treat the h1 tag as an HTML element. Instead, it sees it as a React.createElement object. This object is only converted into an HTML element during the rendering process. So, the question arises: who handles this transpiling from the React object to HTML?

The answer is that Parcel, the build tool, takes care of this process. However, Parcel doesn't do the transpiling directly. It delegates this task to Babel, which is responsible for converting the React object into HTML. Once this transpiling is complete, you'll see the h1 element in the developer console under the "Elements" tab, where it appears as a regular HTML heading tag with an id of "heading" and the text "Namaste React using JSX" as its child.

This process highlights how JSX, Babel, and Parcel work together to simplify development and improve code readability in React.


# React Components

In React, everything is a component. Whether it's a button, a card, an input field, or a radio button, all are components. React components are the building blocks of a React application.

## Types of Components

There are two types of components in React:

### Class-Based Components
These are the older, more traditional way of defining components. They involve using ES6 classes and extending the `React.Component` class.

### Functional Components
These are the newer and more modern way of defining components. They are simply JavaScript functions that return JSX.

## What is a Functional Component?

A functional component is a JavaScript function that returns JSX. JSX is essentially a React element, which is an object representing a DOM node. So, when a function returns a React element (or object), it is considered a functional component.

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';

const Heading = () => {
  return <h1 id='heading2'>Namaste React using functional component</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Heading />)
```
one thing to note about Functional components is that a functional component is always named with an Upper Case.
see the render
it is returned as a fragment i.e. <Heading />

## Writing Functional Components

Functional components can be written in two ways:

### With Return Statement

In this approach, you use curly braces `{}` within the function and explicitly return the JSX using the `return` keyword.

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';

const Heading = () => {
  return <h1 id='heading2'>Namaste React using functional component</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Heading />)
```

### Without Return Statement
In this approach, you can use parentheses () around the JSX, and the function will implicitly return the JSX without needing the return keyword.

```javascript
const MyComponent = () => (
    <h1>Hello, this is a functional component without a return statement!</h1>
);
```

# What is Component Composition?

Component composition in React refers to the practice of combining multiple components to create a more complex or higher-level component. This allows for code reuse and better organization of your application's UI.

## Understanding Component Composition with an Example

Let's say you have two functional components: `TitleComponent` and `HeadingComponent`. Each of these components serves a specific purpose, like displaying a title or a heading. Now, you want to combine these two components into a single, main component.

```javascript

// Example of `TitleComponent`:
function TitleComponent() {
    return <h1>This is the Title</h1>;
}

// Example of HeadingComponent:
function HeadingComponent() {
    return <h2>This is the Heading</h2>;
}

// Using Component Composition

// You can combine these two components into a main component using component composition. Here's how you might do it:

function MainComponent() {
    return (
        <div>
            <TitleComponent />
            <HeadingComponent />
        </div>
    );
}

// Rendering the Composed Component

// You can render the MainComponent just like any other component:

ReactDOM.render(<MainComponent />, document.getElementById('root'));
````

**In this example, MainComponent is a composed component that includes both TitleComponent and HeadingComponent. When MainComponent is rendered, it will display both the title and the heading together.**

By using component composition, you're able to build complex UIs by combining simpler components. This approach not only makes your code more modular and reusable but also helps in managing and organizing your application's structure more effectively.