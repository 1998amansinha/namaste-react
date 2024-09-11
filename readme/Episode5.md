# JavaScript Export and Import

## Default Export:
When you export a single value (a function, class, or object) from a module as the main export, it's called a default export. There can only be one default export per file.

### Example:
```js
export default function MyComponent() {
  /* ... */
}
```
- Only one default export is allowed per file.

## Named Export:
This allows you to export multiple values from a module. You can export as many named values as you like, and they are imported using the same name in the importing module.

### Example:
```js
export function ComponentOne() {
  /* ... */
}

export function ComponentTwo() {
  /* ... */
}
```

- Named exports are useful when you need to export multiple values from a module.
- They must be imported using the same name.


# React Hooks Overview:

React Hooks are functions provided by React that allow you to manage state and lifecycle features in functional components. Hooks are not default exports; they are **named exports** from the React library.

Example of importing hooks:

```javascript
import { useState, useEffect } from 'react';
```

## useState Hook:

useState is used to create state variables in functional components.

When you use useState, it returns an array with two values: the current state and a function to update the state (which is commonly referred to as setState).

Example:

```js
const [count, setCount] = useState(0);
```
-The first value (count) is the current state.
-The second value (setCount) is a function to update the state.
-The argument passed to useState(0) is the default state.

### Key Concepts:

 - State Updates: When you call the setter function (setCount in this case), it triggers a re-render, updating the DOM based on the new state.

 - Rendering and Re-rendering: Whenever the state changes (via setState), React automatically re-renders the component to reflect the updated state in the UI.

## Handling API Calls and Mapping:

When dealing with API data:

You typically store the fetched data in a state variable using useState. This allows the component to manage and update the data dynamically.

For example:
```js
  const [resturantList, setResturantList] = useState(resList);
```
***Mapping is done over the state (resturantList) to render the data dynamically:***

```js
{resturantList.map((resturant) => (
  <Card key={resturant.info.id} resData={resturant} />
))}
```

If you want to filter or update the data (e.g., ratings above 4.5), you would update the state using setResturantList to trigger a re-render with the filtered data.

Example of filtering:

```js
onClick={() => {
  const TopRatedResturants = resList.filter((resturant) => resturant.info.avgRating > 4.5)
  setResturantList(TopRatedResturants)
}}
```
## Summary:

- React Hooks like useState and useEffect are named exports from React.
- useState manages state, and the array destructuring provides the current state and a function to update it.
- When dealing with dynamic data (like API calls), the state is crucial for reflecting changes in the UI based on user interactions or data fetching.

```javascript
import { useState } from "react";
import resList from "../utils/constant";
import Card from "./Card";

const Body = () => {
  const [resturantList, setResturantList] = useState(resList);

  return (
    <div className="body">
      <h1>Welcome to our website!</h1>
      <div className="searchBar">
        <button
          className="search-btn"
          onClick={() => {
            const TopRatedResturants = resList.filter((resturant) => resturant.info.avgRating > 4.5)
            setResturantList(TopRatedResturants)
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="cards">
        {resturantList.map((resturant) => (
          <Card key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
```

- resList: Static, unchanging, original list of all restaurants (imported from ../utils/constant).
- restaurantList: Dynamic, mutable state that reflects the current list of restaurants being displayed, which can be filtered or modified based on user interaction.

Example Flow:

* Initial State: When the component first renders, restaurantList is set to resList (the full list of restaurants).
* User Action: When a user clicks the "Top Rated Restaurants" button, the restaurantList is updated to contain only restaurants with a rating higher than 4.5.
* UI Render: The component maps over restaurantList to render the restaurant cards, and this list can change based on filtering or resetting.

This explanation should clarify how React hooks work in your application.

<---------------------------------------------------------------------------------------------------------------------------------->

#  React’s Reconciliation Algorithm, Virtual DOM, Diffing Algorithm, and React Fiber

## Reconciliation Algorithm:

- *****Reconciliation***** is the process by which React updates the DOM to match the changes in the component state.
- When the state of a component changes, React creates a Virtual DOM, which is an in-memory representation of the actual DOM.
- React compares the previous Virtual DOM with the new one using the Diffing Algorithm to identify the changes.
- Once the changes (or "diff") are identified, React only updates the parts of the actual DOM that have changed, instead of re-rendering the entire DOM. This process is called efficient reconciliation.

## Virtual DOM:
- The Virtual DOM is a lightweight copy of the actual DOM. It allows React to update only the parts of the DOM that need to be changed rather than updating the whole UI, which improves performance.
- How it works: When a component's state changes, React updates the Virtual DOM, compares it with the previous Virtual DOM (using the Diffing Algorithm), and then applies only the necessary changes to the actual DOM.

## Diffing Algorithm:

- The Diffing Algorithm is a core part of React’s reconciliation process. Its job is to find the differences (or "diffs") between the previous and current Virtual DOM.
- React uses an efficient algorithm to compare elements in the DOM tree. Instead of comparing every node, React assumes that:
  - If elements have the same key (used with lists), they are the same component, and only their props or children are compared.
  - If elements have different keys, React treats them as entirely new components.
  - *****Optimization*****: If the Diffing Algorithm finds no difference between two components, it skips that component during the update.

### Example of Diffing in Action:

- Imagine you have a list of 5 components, and you update just 2 of them. The Diffing Algorithm will compare each component, and only the 2 updated components will be re-rendered.

If components 3 and 5 have changes:

  - Components 1 and 2: No changes, so skipped.
  - Component 3: Detected changes, so React updates the DOM.
  - Component 4: No changes, skipped.
  - Component 5: Detected changes, so React updates the DOM.
This selective update improves performance significantly.

## React Fiber:

- *****React Fiber***** was introduced in React 16 to improve the rendering process and manage the workload of updating the UI.

- Fiber breaks the rendering work into small units (or "fibers"), making it easier for React to pause, prioritize, and resume work as needed. This prevents the UI from becoming unresponsive, which was a problem with the previous algorithm.

- Fiber allows React to handle rendering as a series of tasks instead of one large task. This enables features like time-slicing, where React can prioritize tasks and avoid blocking the main thread.

  #### Fiber’s Key Benefit:

    - It allows React to perform updates asynchronously, meaning React can update parts of the UI without blocking the entire UI thread. This ensures smoother interactions like clicking buttons, even when updates are being made in the background.


## Example of React Fiber:

- Imagine you're updating a large UI component. Without Fiber, React would process the entire update in one go, potentially blocking the UI for a short time, leading to buttons being unresponsive.

- With Fiber, React breaks the work into small tasks, allowing it to pause and let user interactions (like button clicks) go through, making the app feel faster and more responsive.

## Summary:

- ***Reconciliation***: Process of updating the DOM efficiently by comparing the Virtual DOM with the real DOM.
- ***Virtual DOM***: A lightweight in-memory copy of the DOM used to optimize updates.
- ***Diffing Algorithm***: Efficiently finds differences between the current and previous Virtual DOM and updates only the changed parts of the real DOM.
- ***React Fiber***: An algorithm that breaks updates into smaller tasks, improving responsiveness by allowing React to prioritize important updates.

These concepts together ensure React apps remain efficient, fast, and responsive, even with complex or frequent updates.