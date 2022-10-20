import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummuryCard from "../../NewsSummuryCard/NewsSummuryCard";

const Home = () => {
  const news = useLoaderData();
  console.log(news);
  return (
    <div className=" mx-2 sm:mx-0">
      {news.map((singleNews) => (
        <NewsSummuryCard
          key={singleNews._id}
          singleNews={singleNews}
        ></NewsSummuryCard>
      ))}
    </div>
  );
};

export default Home;
