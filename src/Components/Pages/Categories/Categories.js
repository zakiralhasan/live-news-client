import React from "react";
import { useLoaderData } from "react-router-dom";
import useSetTitle from "../../../hooks/useSetTitle";
import NewsSummuryCard from "../../NewsSummuryCard/NewsSummuryCard";

const Categories = () => {
  useSetTitle("Category"); //used custom hook for changing title name.
  const news = useLoaderData();

  return (
    <div>
      {news.map((singleNews) => (
        <NewsSummuryCard
          key={singleNews._id}
          singleNews={singleNews}
        ></NewsSummuryCard>
      ))}
    </div>
  );
};

export default Categories;
