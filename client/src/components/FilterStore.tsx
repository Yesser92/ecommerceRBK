import React, { useState } from "react";

interface FilterStoreProps {
  allData: () => void;
  categories: string[];
  filterBycategory: (categoryName: string) => void;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  filterByPrice: (minPrice: number | "", maxPrice: number | "") => void;
}

const FilterStore: React.FC<FilterStoreProps> = ({
  allData,
  categories,
  filterBycategory,
  setPrice,
  filterByPrice,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    filterBycategory(category);
    setMinPrice("");
    setMaxPrice("");
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinPrice(value ? Number(value) : 0);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxPrice(value ? Number(value) : Infinity);
  };

  const handleFilterClick = () => {
    if (minPrice !== "" && maxPrice !== "" && minPrice > maxPrice) {
      alert("Minimum price cannot be greater than maximum price");
      return;
    }
    filterByPrice(minPrice, maxPrice);
  };

  return (
    <div className="bg-gray-60 h-screen fixed left-0 top-12 w-2/12 p-4">
      <h3 className="text-blue-900 px-3 text-xl font-mono font-bold italic flex items-left">
        CATEGORIES
      </h3>
      <h6
        className={`text-blue-600 font-bold cursor-pointer mb-2 ${
          selectedCategory === "" ? "text-red-500" : ""
        }`}
        onClick={() => {
          setSelectedCategory("");
          allData();
        }}
      >
        All
      </h6>
      {categories.map((category: string, i: number) => (
        <h6
          className={`text-blue-600 font-bold cursor-pointer mb-2 ${
            selectedCategory === category ? "text-orange-500" : ""
          }`}
          key={i}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </h6>
      ))}
      <div className="mt-8">
        <h3 className="text-blue-900 px-3 text-xl font-mono font-bold italic flex items-left">
          FILTER BY PRICE
        </h3>
        <div className="flex items-center mb-2">
          <input
            type="number"
            id="min-price"
            className="border border-gray-400 px-4 py-2 rounded-md w-full max-w-xs"
            placeholder="Minimum price"
            value={minPrice}
            onChange={handleMinPriceChange}
          />
        </div>
        <div className="flex items-center mb-2">
          <input
            type="number"
            id="max-price"
            className="border border-gray-400 px-4 py-2 rounded-md w-full max-w-xs"
            placeholder="Maximum price"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
          onClick={handleFilterClick}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterStore;
