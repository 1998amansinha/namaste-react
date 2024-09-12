# Architectural patterns

### 1. **Monolith Architecture**:
- In a **monolithic architecture**, the entire application is built as **one unified codebase**. All the components—**UI, API, authentication, database, business logic**, etc.—are housed within the same project and deployed together.
  
#### Advantages:
- **Simplicity**: Since everything is in one project, it’s easier to manage during the early stages of development.
- **Ease of deployment**: There's a single deployment pipeline, meaning you just deploy the entire application at once.
  
#### Disadvantages:
- **Tight coupling**: All the components are closely linked. A change in one part (e.g., UI) may require touching other parts (e.g., API or DB), even if they’re unrelated.
- **Limited scalability**: You can’t scale specific parts of the system independently. The entire application must scale together, which can be inefficient and costly.
- **Single tech stack**: You have to use the same language and stack for the whole application. For example, if the backend is in Java, everything (UI, API, etc.) must also be written in Java. There's no flexibility to choose different tools for different components.
- **Deployment complexity**: Even a small update in the UI would require redeploying the entire application, making maintenance and updates time-consuming and error-prone.

### 2. **Microservice Architecture**:
- **Microservice architecture** breaks down the application into **independent services**, each responsible for a specific function (e.g., authentication, UI, payments, database). These services communicate via APIs, typically RESTful or GraphQL.

#### Advantages:
- **Decoupling and flexibility**: Each service can be built, deployed, and maintained independently. For example, you can use **Node.js** for your backend, **React** for the frontend, and **Python** for machine learning components.
- **Independent scalability**: You can scale specific services individually based on demand. If the **authentication service** has high traffic, you can scale just that service without affecting the rest of the application.
- **Tech stack flexibility**: Different services can use different languages or frameworks. For example, one microservice could be written in **Go**, while another uses **JavaScript**.
- **Faster development**: Different teams can work on different services in parallel, speeding up the development process.
  
#### Disadvantages:
- **Increased complexity**: Microservices are harder to manage, especially as the number of services grows. Handling inter-service communication, monitoring, and orchestration becomes more complex.
- **Deployment and DevOps**: Each service has its own deployment pipeline, meaning more complex DevOps processes and the need for tools like Docker, Kubernetes, or AWS Lambda to manage these services.
- **Inter-service communication overhead**: Since services communicate via APIs, there is a performance overhead. Network latency and failure handling are also concerns.
- **Data management challenges**: Each microservice might have its own database, making data consistency across services more complex.

### Summary:
- **Monolithic Architecture**: Simpler to build and deploy initially, but lacks flexibility and scalability, and changes require redeploying the whole system.
- **Microservice Architecture**: Offers more flexibility, scalability, and choice of technologies, but adds complexity in communication, deployment, and monitoring.

Microservices are generally preferred in large-scale applications, where scalability and flexibility are key. Monolithic architectures work well for small to medium applications or where simplicity is more important than scalability.

<-------------------------------------------------------------------------------------------------------------------------------------->

# **React** and **useEffect**.

### 1. **First Approach (Page Loads → API Call → Render UI)**:
- **Flow**: 
   1. The **page loads**.
   2. The **API call** is made to fetch the data (for example, fetching a list of restaurants).
   3. Once the data is retrieved, the UI is **rendered** using the fetched data.
   
- **Characteristics**:
   - In this approach, the UI only renders **after the data has been fetched**.
   - This means the user might see a delay or a "blank page" until the API call completes, which can lead to a poor user experience.

- **Why it’s less ideal**:
   - It creates a perception of slower performance because users must wait for the data to load before seeing anything on the screen.
   - The page remains empty until the API call finishes.

### 2. **Second Approach (Page Loads → UI Renders → API Call → UI Re-renders)**:
- **Flow**:
   1. **Page loads**, and the UI is **rendered** immediately, even before the data is fetched.
   2. The **API call** is made using `useEffect` to fetch the necessary data.
   3. Once the API call is complete, the UI **re-renders** with the fetched data.

- **Characteristics**:
   - In this approach, the UI is shown **immediately**, usually with placeholders (like a loading spinner or shimmer) until the API response is received.
   - Once the API call completes, the data is fetched and stored in a state variable, and the UI is re-rendered to display the actual data.

- **Why it’s more ideal**:
   - Users see something on the screen right away (e.g., loading spinner or shimmer effect).
   - This approach creates a smoother user experience because users can see that the app is working (loading state) even if the data hasn’t arrived yet.

### How **useEffect** fits in:
- In the second approach, **useEffect** is used to make the API call after the **initial render** of the UI.
- **useEffect(() => { ... }, [])**:
   - The empty dependency array (`[]`) ensures that the effect (API call) only runs **once** when the component mounts (or when the page first loads).
   - After the data is fetched, you update the state (e.g., using `useState`), which triggers a **re-render** of the component.
   
- **Re-rendering**:
   - When the state is updated with the fetched data (e.g., `setListOfRestaurant`), React **re-renders** the component, updating the UI with the actual data.
   - **Without dependencies in `useEffect`**, the API call happens once, and the UI re-renders once the data is available.

### Summary:
- **First Approach**: The UI doesn’t render until the API call is complete (which can lead to a blank screen).
- **Second Approach (preferred)**: The UI renders first with placeholders (like a loading spinner or shimmer), then re-renders with the actual data after the API call completes. This approach improves the user experience by using **useEffect** to manage the API call and the subsequent UI re-render.

So yes, using **useEffect** ensures the API call happens only once on component mount, and the UI is re-rendered **once** with the fetched data.

```js
import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/api/seo/getListing?lat=12.9141099&lng=77.6371518&isDineoutCollection=false"
    );
    const json = await response.json();
    setListOfResturant(
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredResturant(
      json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return !listOfResturant.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <h1>Welcome to our website!</h1>
      <div className="searchBar">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search"
          onClick={() => {
            const filteredResturant = listOfResturant.filter(
              (
                res // filter over original resturantList
              ) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredResturant(filteredResturant);
          }}
        >
          Search
        </button>
        <button
          className="search-btn"
          onClick={() => {
            const filteredList = listOfResturant.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilteredResturant(filteredList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="cards">
        {filteredResturant.map((resturant) => (
          <Card key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
```
### Rendering Steps:

1. **Initial Render (Before API call)**:
   - **Page Load**: When the page first loads, React initializes the state variables. At this point, both `listOfRestaurant` and `filteredRestaurant` are empty arrays (`[]`), as you’ve initialized them with `useState([])`.
   - **UI Render (First render)**: Since `filteredRestaurant` is an empty array, the component renders the `<Shimmer />` component (your loading placeholder) because `!listOfRestaurant.length` is true.

2. **API Call (Inside `useEffect`)**:
   - **Fetching Data**: After the first render, the `useEffect()` hook runs (since it has an empty dependency array, meaning it runs once after the initial render). This triggers the `fetchData()` function, which fetches the restaurant data from the API.
   - **Updating State**: Once the API data is fetched, the `setListOfRestaurant` and `setFilteredRestaurant` functions are called, which update both the `listOfRestaurant` and `filteredRestaurant` with the fetched restaurant data.

3. **Re-render (After State Update)**:
   - **Re-render with Data**: After updating the state, React triggers a re-render of the component. Now, `filteredRestaurant` contains the fetched data (which, at this point, is unfiltered). The UI re-renders, and this time, the mapping happens over the `filteredRestaurant`, displaying the list of restaurants in your UI.
   - **At this stage**, since no filter or search has been applied yet, `filteredRestaurant` and `listOfRestaurant` hold the same data, which means the displayed list is unfiltered.

4. **User Interaction (Filtering/Search)**:
   - **Search or Filter Action**: When a user interacts with the search bar or clicks the "Top Rated Restaurants" button, the filtering logic kicks in. You filter the `listOfRestaurant`, and the filtered result is set to `filteredRestaurant`.
   - **Re-render with Filtered Data**: React re-renders the UI again, but now `filteredRestaurant` contains only the restaurants that match the search or rating filter. The UI updates to reflect the filtered list.

### To summarize:
- Initially, on page load, `filteredRestaurant` is empty, and the UI renders the loading component.
- After the API call, `filteredRestaurant` is populated with data, and the UI re-renders to display the unfiltered list.
- User interactions trigger filtering logic, updating `filteredRestaurant` and causing the UI to re-render with the filtered data.

So, as you mentioned, **for the initial render, `filteredRestaurant` is essentially unfiltered, and only after the API data is fetched does the filtering (if any) happen.** That’s why your approach of mapping over `filteredRestaurant` from the start works as expected.


<-------------------------------------------------------------------------------------------------------------------------------------->
# **React development**

### 1. **Shimmer UI (or Skeleton UI)**:
- **Definition**: Shimmer UI (or Skeleton UI) refers to a **placeholder or loading UI** that is shown while waiting for data (typically from an API call) to load. This skeleton acts as a visual representation of what the content will look like, providing a better user experience by indicating that content is on the way.
  
- **Purpose**: 
  - **Improves user experience**: Instead of showing a blank screen while waiting for data, the shimmer UI gives users an idea of what will eventually appear.
  - **Keeps the UI responsive**: Users can see that the app is loading content, which makes the application feel faster and more responsive.

- **Example**: In your case, you’re using a **Shimmer** component that acts as a loading indicator before the restaurant list is fetched.

### 2. **Conditional Rendering**:
- **Definition**: Conditional rendering means displaying content based on a certain condition. In React, you decide whether to render certain components or not based on conditions such as boolean values, API responses, or user actions.

- **Example**: In your code, you use conditional rendering to decide whether to show the **Shimmer** component or the list of restaurants. If the `listOfRestaurant` is empty, the **Shimmer** is shown; otherwise, the restaurant list is displayed.

- **Common Syntax**:
  - **Ternary Operator**: `{ condition ? <Component1 /> : <Component2 /> }`
  - **Logical AND**: `{ condition && <Component /> }` (only renders the component if the condition is true).

- **Use cases**: 
  - Loading spinners (like your shimmer).
  - Displaying error messages when API calls fail.
  - Hiding or showing buttons based on user authentication.

### 3. **Reconciliation Process**:
- **Definition**: The **reconciliation process** in React refers to how React updates the UI efficiently when a component's state or props change. React doesn’t re-render the entire UI. Instead, it compares the current state of the Virtual DOM with the previous state and updates only the parts of the actual DOM that have changed. This process is key to React’s performance optimization.

- **Trigger**: The **reconciliation** process is triggered whenever:
  - A **local state variable** is updated using `setState` or `useState`.
  - A **prop** is updated (when data is passed down from a parent component to a child component).
  
- **Why it’s important**: React’s reconciliation process ensures that only the parts of the component tree that need to be updated are changed, minimizing the number of DOM manipulations and improving performance.

- **Component Re-rendering**:
  - Whenever the state in a component changes, the **entire component re-renders**.
  - However, React optimizes this by updating only the part of the UI that is different, thanks to the **Virtual DOM** and **diffing algorithm**.

### Summary of Key Points:
1. **Shimmer UI**: Placeholder UI shown before the actual data is loaded to keep the user engaged and avoid a blank screen.
2. **Conditional Rendering**: Dynamically showing components based on certain conditions, improving the flexibility and behavior of the UI.
3. **Reconciliation Process**: React’s method of updating only the parts of the UI that have changed when state or props are updated, making the UI more efficient.

These concepts are central to building efficient, responsive, and dynamic UIs in React. Do you have any specific questions about implementing these in a project?