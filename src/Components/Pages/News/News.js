import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar, FaEye } from "react-icons/fa";
import { BsBookmarkCheck, BsShareFill } from "react-icons/bs";
import useSetTitle from "../../../hooks/useSetTitle";

const News = () => {
  useSetTitle("Details"); //used custom hook for changing title name.
  const selectedNews = useLoaderData();
  const { image_url, title, details, total_view, rating, author } =
    selectedNews;
  console.log(selectedNews);
  return (
    <div className="bg-white my-4 rounded shadow-md">
      <div className="flex justify-between items-center p-2 border-b">
        <div className="flex">
          <img className="w-12 rounded-full" src={author.img} alt="" />
          <div className="ml-2">
            <p className="">{author.name}</p>
            <small>{author.published_date}</small>
          </div>
        </div>
        <div className="flex">
          <BsBookmarkCheck className="mr-2" />
          <BsShareFill />
        </div>
      </div>
      <div className="p-2">
        <h2 className="font-semibold mb-2">{title}</h2>
        <img src={image_url} alt="" />
        <p>{details}</p>
      </div>
      <div className="flex justify-between p-2 border-t">
        <div className="flex items-center">
          <FaStar className="mr-2 text-yellow-400" />
          <p>{rating.number}</p>
        </div>
        <div className="flex items-center">
          <FaEye className="mr-2" />
          <p>{total_view}</p>
        </div>
      </div>
    </div>
  );
};

export default News;
