import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSide = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  console.log(categories);
  return (
    <div className="px-2">
      <h1 className="text-2xl font-semibold py-4">All categories</h1>
      <div className="underline text-blue-600">
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`categories/${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
