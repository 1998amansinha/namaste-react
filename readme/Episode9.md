# **Custom Hooks**
- **What are Custom Hooks?**
  - A **custom hook** is essentially a **JavaScript function** that allows us to extract and reuse logic across multiple components.
  - It helps **avoid duplication** of logic and **enhances code reuse**, making the code more **modular** and **maintainable**.

- **How Custom Hooks Work**:
  - Just like **built-in hooks** (`useState`, `useEffect`, etc.), a custom hook can encapsulate any logic you want and can be used in any functional component.
  - Example: If you have an API call in multiple components, instead of repeating the same logic, you create a custom hook to manage the API call and reuse it in different components.

  ```jsx
  function useFetchData(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      async function fetchData() {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        setLoading(false);
      }
      fetchData();
    }, [url]);

    return { data, loading };
  }
  ```

  In your components:
  ```jsx
  const { data, loading } = useFetchData('https://api.example.com/items');
  ```

- **Benefits of Custom Hooks**:
  1. **Reusability**: You define the logic once and use it in multiple components.
  2. **Separation of Concerns**: Custom hooks allow you to separate business logic (like API calls) from UI components.
  3. **Cleaner Code**: No need to repeat logic, leading to shorter and easier-to-read components.

---

# **App Optimization Techniques**
Optimizing a React application ensures faster load times and a better user experience.

#### 1. **Code Splitting / Code Chunking**
- **What is Code Splitting?**
  - Code splitting refers to **dividing the app into smaller bundles** that can be loaded on-demand, rather than loading the entire application at once.
  - This technique improves **initial load times** by loading only the necessary code for the current page or section.
  
- **React's Lazy Loading**:
  - In React, you can implement **lazy loading** using `React.lazy()` and `Suspense`.
  - Lazy loading allows components to load **only when they are needed**, which reduces the bundle size initially loaded by the browser.

  ```jsx
  const MaleSection = React.lazy(() => import('./MaleSection'));
  const FemaleSection = React.lazy(() => import('./FemaleSection'));
  
  function App() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Route path="/male" component={MaleSection} />
          <Route path="/female" component={FemaleSection} />
        </Router>
      </Suspense>
    );
  }
  ```

- **`Suspense` and `fallback`**:
  - `Suspense` is used to display a **loading indicator** while the lazy-loaded component is being fetched.
  - The `fallback` prop allows you to display a **loading screen**, **shimmer UI**, or anything you want while the component is being lazily loaded.

#### 2. **Dynamic Import**
- Dynamic import allows you to **load specific modules only when they are needed**.
  ```jsx
  import('./MaleSection').then(module => {
    // use the module dynamically
  });
  ```

#### 3. **Other Optimization Techniques**
- **Chunking**: Divides large JavaScript files into smaller chunks to load them as needed, preventing the user from waiting for the entire app to load at once.
- **Dynamic Bundling**: Only loads the required parts of the code based on user interaction.
- **Tree Shaking**: Removes unused code during the bundling process, making the final bundle smaller.
- **Memoization**: Use `React.memo` or `useMemo` to prevent unnecessary re-renders by caching the results of expensive computations or components.
  
  ```jsx
  const MemoizedComponent = React.memo(Component);
  ```

- **Image Optimization**:
  - Load images lazily, compress them, or use modern image formats like WebP to reduce the size.
  
- **Reduce DOM Re-renders**:
  - Use **keys** correctly in lists to avoid unnecessary re-renders.
  - Use **shouldComponentUpdate** (in class components) or `React.memo` to prevent re-rendering when it's not necessary.

- **Use CDN for Static Assets**:
  - Serving static assets (like images, fonts, JavaScript files) through a **Content Delivery Network (CDN)** can drastically reduce load times for users across the world.

- **Minify CSS and JavaScript**:
  - Compress your JavaScript and CSS files to reduce their size using tools like **Webpack** or **Parcel**.

- **Use of Service Workers**:
  - **Service Workers** can cache assets and **serve them locally**, improving the performance of subsequent page loads and allowing for offline access.

### **Conclusion**
- **Custom Hooks** are crucial for writing clean, reusable logic across components.
- **App Optimization** can be achieved through a variety of techniques like **code splitting**, **lazy loading**, **memoization**, and more to improve performance and user experience.
