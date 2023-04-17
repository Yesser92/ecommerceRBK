import React, { MouseEventHandler, useState } from "react";
import Card from "../components/Card";
import products from "../data/products.json";
import FilterStore from "../components/FilterStore";

interface product {
  id: number;
  category: string;
  title: string;
  price: number;
  image_url: string;
  quantity: number;
}

const Store: React.FC = () => {
  const [data, setData] = useState<product[]>(products);
  const [price, setPrice] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredProducts = data.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const allProduct: product[] = structuredClone(products);

  var categories = [...new Set(allProduct.map((product) => product.category))];

  const filterBycategory = (categoryName: string) => {
    setData(allProduct);
    setData(allProduct.filter((product) => product.category === categoryName));
  };

  const allData = (): void => {
    setData(allProduct);
  };

  const filterByPrice = (minPrice: number | '', maxPrice: number | '') => {
    setData((prevData) => {
      if (minPrice === '' && maxPrice === '') {
        return prevData;
      }
      const filteredData = prevData.filter(
        (item) =>
          (minPrice === '' || item.price >= minPrice) &&
          (maxPrice === '' || item.price <= maxPrice)
      );
      return filteredData;
    });
  };

  return (
    <div className="container mx-auto mt-2">
      <div className="flex">
        <div className="w-2/12 fixed top-0 left-0">
          <FilterStore
            allData={allData}
            categories={categories}
            filterBycategory={filterBycategory}
            setPrice={setPrice}
            filterByPrice={filterByPrice} 
               
          />
        </div>
        <div className="w-10/12 ml-auto">
          <div className="flex items-center justify-center  mb-3 mt-0">
            <input
              type="text"
              placeholder="Search products"
              className="border border-gray-400 px-4 py-2 rounded-md max-w-sm w-96"              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {filteredProducts.length === 0 ? (
          <h2 className="text-3xl ">Sorry, we don't find any result</h2>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3">
            {filteredProducts.map((product) => (
              <Card {...product} key={product.id} />
            ))}
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Store;
