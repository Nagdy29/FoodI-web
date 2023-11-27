import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card } from "./Card";

export const SpecialDesigen = () => {
  const [recipes, setRecipes] = useState([]);
  const slider = React.useRef(null);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const spacial = data.filter((item) => item.category === "popular");
        console.log(spacial);
        setRecipes(spacial);
      });
  }, []);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 py-16">
        <div className="text-left">
          <p className="subtitle text-rose-600">Customer Favorites</p>
          <h2 className="title text-3xl md:text-5xl font-bold">
            Popular Catagories
          </h2>
        </div>
        <div className="">
          <Slider {...settings}>
            {recipes.map((item, i) => (
              <Card item={item} key={i} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
