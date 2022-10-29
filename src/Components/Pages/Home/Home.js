import React from "react";
import { useLoaderData } from "react-router-dom";
import useSetTitle from "../../../hooks/useSetTitle";
import NewsSummuryCard from "../../NewsSummuryCard/NewsSummuryCard";

const Home = () => {
  useSetTitle("Home"); //used custom hook for changing title name.
  const news = useLoaderData();

  return (
    <div className=" mx-2 sm:mx-0 sm:mr-4">
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
