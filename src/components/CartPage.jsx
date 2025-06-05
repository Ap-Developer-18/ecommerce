import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PeopleRandomBought from "./common/PeopleRandomBought";
import CartCards from "./common/CartCards";
import { useEffect } from "react";
import Heading from "./common/Heading";

const CartPage = () => {
  const cart = useSelector((state) => state.CartSlice.cart);
  console.log("Cart data in CartPage:", cart);

  const subtotal = cart.reduce((acc, item) => {
    const cleanPrice = parseFloat(item.price.toString().replace(/,/g, ""));
    return acc + cleanPrice * item.quantity;
  }, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;


  return (
    <div className="py-20 lg:max-w-[1290px] mx-auto px-6 container">
      <Heading simpleText="Shopping" redText="Cart" />
      <p className="leading-160 mt-3 mb-8 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, consectetur.</p>
      <div className="flex h-full flex-col md:flex-row gap-6">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="space-y-4">
            {cart.map((item, index) => <CartCards key={index} item={item} />)}
          </div>
        </div>
        {/* Order Summary */}
        <div className="w-full h-full md:w-80">
          <div className="p-4 space-y-3 h-full bg-[#191919] border border-[#2F2F2F]">
            <h2 className="text-lg text-white font-semibold">Order Summary</h2>

            {cart.map((item, index) => (
              <div key={index} className="text-sm border-b border-gray-700 pb-2 mb-2">
                <div className="flex justify-between text-white">
                  <span>{item.title.substring(0,22)}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <div className="text-gray-400 text-xs">
                  {item.quantity} x ${item.price.toFixed(2)} each
                </div>
              </div>
            ))}

            <div className="flex justify-between text-sm">
              <span className="text-white">Subtotal</span>
              <span className="text-white">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-white">Tax (10%)</span>
              <span className="text-white">${tax.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      {/* Recommended Products */}
      <div className="pt-20">
        <Heading className="mb-4" simpleText="People also" redText="bought" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <PeopleRandomBought key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;