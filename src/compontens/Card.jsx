import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

export const Card = ({ item }) => {
  const [Heart, setHeatt] = useState(false);
  const handelHearts = () => {
    setHeatt(!Heart);
  };
  return (
    <>
      <div>
        <div className="card w-50 bg-base-100 shadow-xl relative flex  gap-10 mx-2 my-3">
          <div
            id="hearts"
            className={`flex absolute top-2 right-2 gap-1 bg-green p-2   ${
              Heart ? "text-rose-800" : "text-white"
            }`}
          >
            <FaHeart
              size={25}
              className="w-8 h-5 cursor-pointer"
              onClick={handelHearts}
            />
          </div>
          <Link>
            <figure>
              <img
                src={item.image}
                alt="Shoes"
                className="hover:scale-105 transition-all duration-200 md:h-60"
              />
            </figure>
          </Link>

          <div className="card-body">
            <h2 className="card-title"> {item.name} </h2>
            <p> {item.recipe} </p>
            <div className="card-actions flex justify-between items-center ">
              <h5 className="">
                $<span className="font-semibold"> {item.price} </span>{" "}
              </h5>
              <button className="btn bg-green text-white">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
