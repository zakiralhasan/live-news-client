import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummuryCard from "../../NewsSummuryCard/NewsSummuryCard";

const Categories = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div>
      <h1>category page{news.length}</h1>

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
