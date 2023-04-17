import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaRegSadCry } from "react-icons/fa";
import { BiHappyHeartEyes } from "react-icons/bi";
import CartCard from "./CartCard";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/products.json";

type CartItem = {
  id: number;
  quantity: number;
  title: string;
  price: number;
  image_url: string;
};

type ShoppingCartProps = {
  handleClickCart: () => void;
  cartItems: CartItem[];
};

const Cart = ({ handleClickCart, cartItems }: ShoppingCartProps) => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-full flex items-center justify-center z-9999">
      <div className="relative w-1/2 bg-blue-200 shadow-xl p-3">
        <button
          onClick={() => handleClickCart()}
          className="absolute top-3 right-3"
        >
          <AiOutlineCloseCircle />
        </button>
        <h1 className="text-center text-3xl  font-semibold italic mb-2 text-black">
          your cart
        </h1>
        <hr />
        {cartItems.length == 0 ? (
          <>
            <p className="text-center text-slate-500 mt-4 flex items-center justify-center">
              Your cart is empty <FaRegSadCry className="ml-2" />
            </p>
            <div>
              <button
                onClick={() => handleClickCart()}
                className="text-center mx-auto mt-4 flex items-center justify-center text-red-300 bg-red-50 px-4 py-1 rounded-lg hover:shadow-sm hover:bg-white duration-300"
              >
                Add some <BiHappyHeartEyes className="ml-2" />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="mt-3 grid">
              {cartItems.map((item) => (
                <CartCard {...item} key={item.id} />
              ))}
            </div>
            <strong className="float-left text-green-700">
              Total:{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </strong>
            <button className="py-1 float-right px-3 rounded bg-red-50 text-red-400 hover:shadow-sm hover:bg-white duration-300 font-semibold">
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
