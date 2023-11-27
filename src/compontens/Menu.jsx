import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { FaFilter } from "react-icons/fa";

export const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Number of items to display per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        console.log(data);
        setMenu(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  // Filter items based on category selection

  const filterByCategory = (category) => {
    const filliter =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);
    setFilteredItems(filliter);
    setSelectedCategory(filliter);
    setCurrentPage(1);
  };

  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  const handleSortChange = (option) => {
    setSortOption(option);

    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        // Do nothing for the "default" case
        break;
    }

    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div>
        <div className="min-h-screen flex items-center justify-center ">
          <div className=" py-44 container  bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
            <div className="flex  justify-center my-4">
              <div className="flex flex-col items-center">
                <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
                  For the Love of Delicious{" "}
                  <span className="text-green">Food</span>
                </h2>
                <p className="text-[#4A4A4A] text-xl my-6">
                  Where Each Plate Weaves a Story of Culinary Mastery and
                  Passionate Craftsmanship
                </p>
                <button className="bg-green font-semibold btn text-white px-8 py-3 rounded-full  ">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row md:flex-row md:gap-8 gap-5  flex-wrap absolute left-10 md:bottom-3 bottom-2 my-5 ">
          <button
            onClick={showAll}
            className="hover:text-red hover:border-b-2 hover:border-red"
          >
            All
          </button>
          <button
            onClick={() => filterByCategory("salad")}
            className="hover:text-red hover:border-b-2 hover:border-red  "
          >
            Salad
          </button>
          <button
            onClick={() => filterByCategory("pizza")}
            className="hover:text-red hover:border-b-2 hover:border-red"
          >
            Pizza
          </button>
          <button
            onClick={() => filterByCategory("soup")}
            className="hover:text-red hover:border-b-2 hover:border-red"
          >
            Soups
          </button>
          <button
            onClick={() => filterByCategory("dessert")}
            className="hover:text-red hover:border-b-2 hover:border-red"
          >
            Desserts
          </button>
          <button
            onClick={() => filterByCategory("drinks")}
            className="hover:text-red hover:border-b-2 hover:border-red"
          >
            Drinks
          </button>
          <div className="flex  items-end justify-end">
            <div className="flex  mb-4 rounded-sm items-end justify-end ">
              <div className="bg-black p-2 ">
                <FaFilter className="text-white h-4 w-4" />
              </div>
              <select
                id="sort"
                onChange={(e) => handleSortChange(e.target.value)}
                value={sortOption}
                className="bg-black text-white px-2 py-1 rounded-sm"
              >
                <option value="default"> Default</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="low-to-high">Low to High</option>
                <option value="high-to-low">High to Low</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex  items-center">
          <div className=" lg:px-28 px-4  py-4 my-6 grid md:grid-cols-4 gap-4 sm:grid-cols-2 grid-cols-1 z-0 ">
            {currentItems.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="flex justify-center my-8">
          {Array.from({
            length: Math.ceil(filteredItems.length / itemsPerPage),
          }).map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded-full ${
                currentPage === index + 1
                  ? "bg-green text-white"
                  : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
