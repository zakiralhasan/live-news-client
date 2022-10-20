import React from "react";
import { FaStar, FaEye } from "react-icons/fa";
import { BsBookmarkCheck, BsShareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const NewsSummuryCard = ({ singleNews }) => {
  const { image_url, title, details, total_view, rating, author, _id } =
    singleNews;
  return (
    <div className="bg-white my-4 rounded shadow-md">
      <div className="flex justify-between items-center p-2 border-b">
        <div className="flex">
          <img className="w-10 rounded-full" src={author.img} alt="" />
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
        {details.length > 250 ? (
          <p>
            {details.slice(0, 250) + "..."}{" "}
            <Link className="text-blue-400" to={`/news/${_id}`}>
              Read more
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
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

export default NewsSummuryCard;
