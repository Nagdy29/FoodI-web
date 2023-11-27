import React from "react";
import bannerImg from "../images/home/banner.png";

export const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl py-8 container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Dive into Delights Of Delectable{" "}
              <span className="text-green">Food</span>
            </h2>
            <p className="text-[#4A4A4A] text-xl">
              Where Each Plate Weaves a Story of Culinary Mastery and Passionate
              Craftsmanship
            </p>
            <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full">
              Order Now
            </button>
          </div>
          <div className="md:w-1/2">
            <img src={bannerImg} alt="" />
            <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
              <div className="bg-white px-3 py-5x rounded-2xl flex items-center gap-3 shadow-sm w-64">
                <img
                  src="../images/home/b-food1.png"
                  alt=""
                  className="rounded-2xl"
                />
                <div className="space-y-1">
                  <h5>Spicy noodles</h5>
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-500"
                      readOnly
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-500"
                      readOnly
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-500"
                      checked
                      readOnly
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                      readOnly
                    />
                  </div>
                  <p className="text-red">$18.00</p>
                </div>
              </div>
              <div className="bg-white px-3 py-2 rounded-2xl md:flex items-center gap-3 shadow-sm w-64 hidden">
                <img
                  src="../images/home/b-food1.png"
                  alt=""
                  className="rounded-2xl"
                />
                <div className="space-y-1">
                  <h5>Spicy noodles</h5>
                  <div className="rating rating-sm">
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-500"
                      readOnly
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-500"
                      readOnly
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-500"
                      checked
                      readOnly
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                      readOnly
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-orange-400"
                      readOnly
                    />
                  </div>
                  <p className="text-red">$18.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
