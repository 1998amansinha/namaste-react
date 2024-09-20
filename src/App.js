import React, {
  lazy,
  Suspense,
  useContext,
  useEffect,
  useState,
  createContext,
} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ResturantMenu from "./components/ResturantMenu";
import UserContext from "./utils/UserContext";
import appStore from "./utils/redux/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";

// Lazy loading
// Code Splitting
// Chunking
// Dynamic Bundling
// On Demand Loading
// Dynamic import
const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  // const { loggedInUser } = useContext(UserContext);

  const [userInfo, SetUserInfo] = useState();

  useEffect(() => {
    const data = {
      name: "Aman Sinha",
    };
    SetUserInfo(data.name);
  }, []);

  // console.log(userInfo);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userInfo, SetUserInfo }}>
        <div className="root">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const routeElement = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <ResturantMenu />,
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={routeElement} />);
