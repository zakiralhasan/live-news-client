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
    ],
  },
]);

export default router;
