# Understanding NPM, Dependencies, and React Integration

## 1. NPM (Node Package Manager)

You mentioned "NPM is a package manager." It might be helpful to add that npm is the default package manager for Node.js and helps in managing both local and global dependencies in a project.

## 2. Package.json

Your note says, "package.json is a configuration of npm." It's more precise to say that `package.json` is a manifest file for a Node.js project. It contains metadata about the project, such as the project name, version, scripts, and the list of dependencies.

## 3. Dependencies

Dependencies are packages that your application depends on. Dependencies are of two types:

### 3.a. Dev Dependencies

The note says, "required in a development phase," which is correct. You could specify that these dependencies are only needed for development and are not included in the production build, using the `--save-dev` flag when adding them with npm.

### 3.b. Normal Dependencies

Used during production.

## 4. Difference Between package.json and package-lock.json

The notes state that `package-lock.json` keeps the exact versions of the packages. This is correct. It might be beneficial to clarify that `package-lock.json` ensures that the same versions of dependencies are installed across different environments, providing a more stable build.

## 5. node_modules

You mentioned, "package.json contains all the dependencies for our application," whereas `node_modules` contains all the code that is required to run all those packages.

## 6. Transitive Dependencies

The concept of transitive dependencies is correct, but the explanation is a bit unclear. Transitive dependencies are those that a direct dependency depends on. For example, if your project depends on Library A, and Library A depends on Library B, then Library B is a transitive dependency for your project.

## 7. Difference Between `^` Caret and `~` Tilde

- `^` -> works for minor updates in our application like updating our application with the latest minor update version.
- `~` -> works for major updates in our application like updating our application with the latest major update version.

## Some NPM Commands

### npm init

This utility will walk you through creating a `package.json` file.

### npm install parcel

The command `npm install parcel` installs the Parcel bundler and adds it as a dependency in your `package.json` file.

**Function of Parcel:** Parcel is a web application bundler that takes your source files (like JavaScript, CSS, and HTML) and bundles them into a smaller, more optimized package for production. It’s known for its zero-configuration approach, meaning it requires minimal setup to work.

**Purpose in a Project:** Parcel simplifies the process of preparing your code for deployment by handling tasks like file minification, asset bundling, and code splitting, among others. This helps in improving the performance of your web application.

**Importance of Parcel:**
- Dev build
- Local server
- HMR - Hot Module Replacement
- File Watching Algorithm -> written in C++
- Caching -> faster builds
- Image optimization
- Minification
- Bundling
- Compress the file
- Consistent hashing
- Code splitting
- Differential bundling
- Diagnostics
- Error handling
- HTTPS
- Tree shaking - removes unused code

## Connecting React to Your App

### HTML File Structure

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Namaste React</title>
</head>

<body>

    <div id="root">
        <h1>I will be replaced by the root.render</h1>
    </div>

    <script src="./App.js"></script>

</body>
</html>
```

### Installing React and ReactDOM
As we can see, there are no CDN links. So, to connect our app with React, we need to run the command:

```
npm install react
```

This command will install React in our application. In our package.json, we can see we have React installed:

```
"dependencies": {
  "react": "^18.3.1"
}
```
Similarly, we need to install react-dom:


```npm install react-dom
```
The updated dependencies section would look like this:
```
"dependencies": {
  "react": "^18.3.1",
  "react-dom": "^18.3.1"
}
```

```App.js: Uncaught ReferenceError: React is not defined
```
**If you encounter the error App.js:25 Uncaught ReferenceError: React is not defined, it is because we have only installed React but have not used it in our application.**

Using React and ReactDOM

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';

const element = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "print" }, "I am an H1 tag"), // Array of children for child1
    React.createElement("h2", { id: "print2" }, "I am an H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);

// To render something in the DOM in React we use react-dom
const root = ReactDOM.createRoot(document.getElementById("root"));

// Now to render the created element on the browser we have to render it using ReactDOM.
root.render(element);
```
**The import React from 'react'; and import ReactDOM from 'react-dom/client'; statements help import React into our application. These imports are coming from node_modules.**

```error
Parcel Error: Browser scripts cannot have imports or exports
```
You might encounter the error:

```typescript
2index.js:1 🚨 [parcel]: @parcel/transformer-js: Browser scripts cannot have imports or exports.
C:\Users\amans\OneDrive\Desktop\Codes\namaste-react\App.js:1:1
> 1 | import React from 'react';
>   | ^^^^^^^^^^^^^^^^^^^^^^^^^^
  2 | import ReactDOM from 'react-dom/client';
  3 |
```  
This error indicates that browser scripts cannot have imports or exports. The solution is to add type="module" to the <script> tag in your HTML file:

```
<script type="module" src="./App.js"></script>
```
The Use of type="module"
***The type="module" attribute allows the use of ES6 modules, meaning you can use import and export statements in your JavaScript files. The App.js file is expected to contain your React components and the logic to render them into the DOM, typically using ReactDOM.render() or createRoot().render().***



