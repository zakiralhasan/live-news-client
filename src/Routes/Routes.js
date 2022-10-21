import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Pages/Home/Home";
import News from "../Components/Pages/News/News";
import Categories from "../Components/Pages/Categories/Categories";
import LogIn from "../Components/Pages/LogIn/LogIn";
import Register from "../Components/Pages/Register/Register";
import ResetPassword from "../Components/Pages/ResetPassword/ResetPassword";
import PrivetRute from "./PrivetRute";
import ErrorPage from "../Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://live-news-server.vercel.app/news"),
      },
      {
        path: "/news/:newsID",
        element: (
          <PrivetRute>
            <News></News>
          </PrivetRute>
        ),
        loader: ({ params }) =>
          fetch(`https://live-news-server.vercel.app/news/${params.newsID}`),
      },

      {
        path: "categories/:categoryID",
        element: <Categories></Categories>,
        loader: ({ params }) =>
          fetch(
            `https://live-news-server.vercel.app/category/${params.categoryID}`
          ),
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
