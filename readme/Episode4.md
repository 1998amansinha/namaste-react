# React Props Overview

## What are Props?

Props (short for "properties") are a way to pass dynamic data from a parent component to a child component in React. They function similarly to arguments in JavaScript functions.

Example:

```jsx
<ChildComponent name="John" />
```

In this example, the name prop is passed to the ChildComponent from the parent component.

## Props are Immutable

Props are read-only in child components, meaning they cannot be modified directly. Any changes to props must occur in the parent component, ensuring a clear data flow and avoiding unintended side effects.

## Default Props

Default props provide a fallback value if no data is passed from the parent component. This helps ensure components always have the necessary data to function, preventing potential errors.

You can set default values for props directly in the parameter list of functional components.

```jsx
function ChildComponent({ name = "Guest" }) {
  return <div>Hello, {name}!</div>;
}
```

Usage:

```jsx
<ChildComponent />          // Renders: Hello, Guest!
<ChildComponent name="John" />  // Renders: Hello, John!
```

### Default Props in Class Components:

For class components, default props can be defined using defaultProps.

```jsx
class Greeting extends React.Component {
  static defaultProps = {
    name: "Guest",
  };

  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

// Usage:

```jsx
<Greeting />         // Renders: Hello, Guest!
<Greeting name="Jane" />  // Renders: Hello, Jane!
```

## Prop Types and Validation

You can use PropTypes to enforce type checking on props, ensuring that the data passed to your component is valid. This is especially useful in development to catch bugs early.

Example:

```jsx
import PropTypes from "prop-types";

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired, // name must be a string and required
};
```

If the name prop is not passed or is of the wrong type, a warning will be displayed in the console during development.

## Destructuring Props

Props can be destructured directly in the function signature or within the function body for more concise and readable code.

Example:

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

This simplifies access to individual props, avoiding the need to repeatedly reference props.name.

## The Children Prop

The children prop is a special prop in React that allows you to pass nested content between the opening and closing tags of a component.

Example:

```jsx
function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}
// Usage:
<Wrapper>
  <p>This is inside the wrapper!</p>
</Wrapper>
This is particularly useful for layout components (e.g., modals, cards) where you want to pass varying content.
```

## The Spread Operator with Props

In complex components, you can use the spread operator to pass multiple props efficiently.

Example:

```jsx
const data = { name: "Alice", age: 25 };
<Greeting {...data} />;
```

This automatically passes both name and age as props to the Greeting component, making prop passing more concise, especially when dealing with many props.

## Conclusion

**_Props in React are powerful and flexible, allowing components to be reusable and dynamic. Understanding how to effectively manage and validate props, handle default values, and optimize the flow of data in React components is essential for writing clean, maintainable React applications._**

```javascript
import { CARD_URL } from "../utils/constant";

const Card = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    sla: { deliveryTime },
  } = resData?.info;

  return (
    <div className="card">
      <div className="cardLogo">
        <img src={CARD_URL + cloudinaryImageId} alt="food image" />
      </div>
      <div className="description">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h5>{avgRatingString} stars</h5>
        <h5>{deliveryTime} minutes</h5>
      </div>
    </div>
  );
};

export default Card;
```

### Destructuring Props

const {
cloudinaryImageId,
name,
cuisines,
avgRatingString,
sla: { deliveryTime },
} = resData?.info;



# Mapping over Arrays:

_In React, the map() method is commonly used to render lists of elements from an array. While it's not mandatory to use map(), it is a concise and efficient way to iterate over data and create UI elements dynamically._

Example:

```jsx
Copy code
{resturantList.map((resturant) => (
    <Card key={index} resData={resturant} />
))}
```

## The Importance of Keys:

- Keys are crucial when rendering lists in React. They help React identify which items have changed, been added, or removed.

- Each element in a mapped list should have a unique key. This key differentiates between elements and prevents issues like rendering conflicts or duplicated items.

- Without keys, React would not be able to efficiently update the DOM because it wouldn't be able to keep track of individual elements.

- Best Practice:

***Use a unique identifier for each element, such as an ID from your data, rather than using the array index (unless the data is static or won't change).***

Example:
```jsx
const students = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
const studentList = students.map((student) => (

  <li key={resturant.info.id}>{student.name}</li>
));
```

## Why Unique Keys Matter:
- React uses the keys to optimize rendering and avoid unnecessary updates. When items in an array are reordered, added, or removed, keys help React understand how to efficiently update the DOM.

- Using unique keys prevents React from mistakenly reusing or reordering elements, which could lead to incorrect rendering behavior or performance issues.

***By ensuring that each element in the list has a unique key, React can correctly and efficiently update the UI without unnecessary re-renders.***
