import React from 'react';

import products from "../data/products.json";

interface Props {
  products: Products[];
  bestSellers: Products[];
}

const ProductPromotion: React.FC<Props> = ({ products, bestSellers }) => {
  return (
    <div className="p-4 md:p-8 lg:p-12 bg-gray-100">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8">
          Check out our latest products!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
              <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-bold">${product.price}</span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-2xl md:text-4xl font-bold my-8">
          Our best-selling products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {bestSellers.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-bold">${product.price}</span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPromotion;
