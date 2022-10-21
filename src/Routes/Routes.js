import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Pages/Home/Home";
import News from "../Components/Pages/News/News";
import Categories from "../Components/Pages/Categories/Categories";
import LogIn from "../Components/Pages/LogIn/LogIn";
import Register from "../Components/Pages/Register/Register";
import ResetPassword from "../Components/Pages/ResetPassword/ResetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/news/:newsID",
        element: <News></News>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.newsID}`),
      },

      {
        path: "categories/:categoryID",
        element: <Categories></Categories>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.categoryID}`),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/reset",
        element: <ResetPassword></ResetPassword>,
      },
    ],
  },
]);

export default router;
