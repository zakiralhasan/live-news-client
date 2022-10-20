import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Pages/Home/Home";
import News from "../Pages/News/News";
import Categories from "../Pages/Categories/Categories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "news", element: <News></News> },
      { path: "categories/:categoryID", element: <Categories></Categories> },
    ],
  },
]);

export default router;
