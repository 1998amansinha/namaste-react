# **Class Components vs. Functional Components**

- **Definition**:
  - **Functional Component**: Defined using a function or an arrow function.
    ```jsx
    function MyComponent() {
      return <div>Hello World!</div>;
    }
    ```
  - **Class Component**: Defined using the `class` keyword. The class component extends from `React.Component`.
    ```jsx
    class MyComponent extends React.Component {
      render() {
        return <div>Hello World!</div>;
      }
    }
    ```

### **Render Method**:
- In a **class component**, the `render()` method is **required** and is where you define what gets returned to the DOM. Inside `render()`, you return the JSX (similar to the return in functional components).
- Functional components don't require the `render()` method. The JSX is returned directly from the function.

### **State Management**:
- In **functional components**, state is handled using the `useState` hook:
    ```jsx
    const [state, setState] = useState(initialState);
    ```
- In **class components**, state is an object that is initialized in the **constructor**:
    ```jsx
    class MyComponent extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }

      render() {
        return <div>{this.state.count}</div>;
      }
    }
    ```

### **Lifecycle Methods in Class Components**:
Class components have lifecycle methods, which allow you to perform certain actions during different phases of a component's life. The lifecycle has **three phases**:
1. **Mounting** (when the component is being added to the DOM).
2. **Updating** (when the component's state or props change).
3. **Unmounting** (when the component is being removed from the DOM).

#### **Mounting Phase**
- **constructor()**: 
  - Called when the component is initialized. It’s used to initialize the state and bind event handlers.
    ```jsx
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
    ```

- **render()**:
  - Required method that returns the JSX to render on the screen.

- **componentDidMount()**:
  - Invoked immediately after the component is mounted in the DOM. This is where you would typically make **API calls**, **set up subscriptions**, or handle other **side effects** (similar to `useEffect` in functional components).
    ```jsx
    componentDidMount() {
      // Make API calls here
    }
    ```

#### **Updating Phase**
- **componentDidUpdate(prevProps, prevState)**:
  - Called after the component is updated. This is where you can perform operations that depend on the previous state or props, such as **re-fetching data** when props change.
    ```jsx
    componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
        // Do something when the state changes
      }
    }
    ```

#### **Unmounting Phase**
- **componentWillUnmount()**:
  - Called right before the component is removed from the DOM. This is where you would **clean up** subscriptions, timers, or other resources that were initialized in `componentDidMount()`.
    ```jsx
    componentWillUnmount() {
      // Clean up code here
    }
    ```

### **Comparison to Functional Components and Hooks**
- In **functional components**, the lifecycle behavior (like mounting, updating, and unmounting) is handled using the **`useEffect` hook**. 
  - `useEffect` allows you to combine functionality of `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in one place:
    ```jsx
    useEffect(() => {
      // componentDidMount logic here
      return () => {
        // componentWillUnmount logic here
      };
    }, [dependency]); // If you want to run it only when certain variables change
    ```

### **Example: Class Component with Lifecycle Methods**
```jsx
class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    // API calls or other side effects
    console.log('Component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      // Do something if count changes
      console.log('Component updated');
    }
  }

  componentWillUnmount() {
    // Clean up actions
    console.log('Component will unmount');
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
```

### **Lifecycle Execution Order**
In the context of parent and child components:
- First, the **constructor** of the parent component is called.
- Then, the **constructor** of the child component is called, followed by their respective **render()** methods.
- **componentDidMount** is called in the child components first, and only after that, it is called in the parent component.

Example Order:
1. Parent `constructor()`
2. Child `constructor()`
3. Parent `render()`
4. Child `render()`
5. Child `componentDidMount()`
6. Parent `componentDidMount()`

### **Conclusion**
Class components are powerful, but with the introduction of **hooks** in React, functional components can now handle state and lifecycle events, making them more popular in modern React development. However, understanding class components is still crucial for working with legacy codebases or certain advanced patterns.

---

Does this explanation cover what you were aiming for in your notes, or would you like to add anything else?