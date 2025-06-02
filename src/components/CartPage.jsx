import { useState } from "react";
import { Link } from "react-router-dom";
import PeopleRandomBought from "./common/PeopleRandomBought";
import CartCards from "./common/CartCards";

const CartPage = () => {
  return (
    <div className="p-6 space-y-10">
      {/* Main Cart Layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Cart Items */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
          <div className="space-y-4">
            {Array(3)
              .fill(null)
              .map((obj, index) => (
                <CartCards key={index} />
              ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-80 mt-12">
          <div className="border p-4 rounded-lg space-y-3">
            <h2 className="text-lg font-semibold">Order summary</h2>
            <div className="flex justify-between text-sm">
              <span>Original price</span>
              <span>$ 500</span>
            </div>
            <div className="flex justify-between text-sm text-green-600">
              <span>Savings</span>
              <span>-$ 400</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Store Pickup</span>
              <span>$ 340</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax</span>
              <span>$ 500</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-base">
              <span>Total</span>
              <span>$ 600</span>
            </div>
            <div className="text-sm text-center">
              or{" "}
              <Link to="#" className="text-blue-600 underline">
                Continue Shopping
              </Link>
            </div>
          </div>

          <div className="border mt-4 p-4 rounded-lg">
            <label className="block text-sm font-medium mb-2">
              Do you have a voucher or gift card?
            </label>
            <input
              type="text"
              placeholder="Enter code"
              className="w-full px-3 py-2 border rounded-md text-sm"
            />
          </div>
        </div>
      </div>

      {/* Recommended Products */}
      <div>
        <h2 className="text-xl font-semibold mb-4">People also bought</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array(3)
            .fill(null)
            .map((obj, index) => (
              <PeopleRandomBought key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
