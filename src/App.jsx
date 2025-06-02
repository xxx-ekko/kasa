import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import "./App.scss";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
