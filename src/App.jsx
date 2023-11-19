import Home from "./BlogComponents/Home";
import NavBar from "./BlogComponents/NavBar";
// import React, { useContext } from 'react';
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Create from "./BlogComponents/create";
import BlogDetails from "./BlogComponents/BlogDetails";
import About from "./BlogComponents/About";
import Calculator from "./CalComponent/Calculator";
import Signup from "./BlogComponents/Signup";
import Login from "./BlogComponents/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/blogs/:id",
    element: <BlogDetails />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  // return (
  //   <div>
  //     <RouterProvider router={router}>
  //       <NavBar />
  //       <Home />
  //     </RouterProvider>
  //   </div>
  // );

  return (
    <>
      <div>
        <RouterProvider router={router}>
        <Login />
        </RouterProvider>
      </div>
    </>
  );
}
export default App;
