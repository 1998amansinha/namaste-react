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