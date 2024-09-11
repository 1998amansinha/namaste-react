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

***resList: Static, unchanging, original list of all restaurants (imported from ../utils/constant).***
***restaurantList: Dynamic, mutable state that reflects the current list of restaurants being displayed, which can be filtered or modified based on user interaction.***

Example Flow:

* Initial State: When the component first renders, restaurantList is set to resList (the full list of restaurants).
* User Action: When a user clicks the "Top Rated Restaurants" button, the restaurantList is updated to contain only restaurants with a rating higher than 4.5.
* UI Render: The component maps over restaurantList to render the restaurant cards, and this list can change based on filtering or resetting.

This explanation should clarify how React hooks work in your application.