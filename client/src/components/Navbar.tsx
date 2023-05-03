import React from "react";
import { RiShoppingCartLine, RiShoppingCartFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import Cart from "./Cart";
import  "../card.css";

import logo from '../image/logo.png';

const Navbar: React.FC = () => {
  const { cartItems, cartQuantity, isOpen, handleClickCart } =
    useShoppingCart();

  return (

    
    <nav className="carddd  z-50 w-full h-30 bg border-b-[1px] z-index-1 sticky top-0 border-b-gray-800 font-titleFont ">
      
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div className="flex-1 flex items-center justify-start">
          <img src={logo} alt="Logo" style={{width:"50px"}}/>
          <ul className="flex items-center gap-8 cursor-pointer">
            <li  className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              {" "}
              <NavLink
                className="px-3 py-3 hover:text-red-300 duration-300"
                to={"/home"}
              >
                Home
              </NavLink>{" "}
            </li>
            <li  className="text-base text-white font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              {" "}
              <NavLink
                className="px-3 py-3 hover:text-red-300 duration-300"
                to={"/store"}
              >
                Store
              </NavLink>{" "}
            </li>
            <li  className="text-base text-white font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              {" "}
              <NavLink
                className="px-3 py-3 hover:text-red-300 duration-300"
                to={"/about"}
              >
                About
              </NavLink>{" "}
            </li>
            <li  className="text-base text-white font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              {" "}
              <NavLink
                className="px-3 py-3 hover:text-red-300 duration-300"
                to={"/signup"}
              >
                Sign Up
              </NavLink>{" "}
            </li>
            <li  className="text-base text-white font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              {" "}
              <NavLink
                className="px-3 py-3 hover:text-red-300 duration-300"
                to={"/login"}
              >
                Login
              </NavLink>{" "}
            </li>
          </ul>
        </div>
        <button
          onClick={() => handleClickCart()}
          className="flex items-center  text-base text-white font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"
        >
          <RiShoppingCartLine />
          <span className="ml-1 text-xs italic">
            "{cartQuantity}" items in cart
          </span>
        </button>
      </div>

      {isOpen && (
        <Cart handleClickCart={handleClickCart} cartItems={cartItems} />
      )}
    </nav>
  );
};

export default Navbar;
