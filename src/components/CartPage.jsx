import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PeopleRandomBought from "./common/PeopleRandomBought";
import CartCards from "./common/CartCards";

const CartPage = () => {
  const cart = useSelector((state) => state.CartSlice.cart);
  console.log("Cart data in CartPage:", cart);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // Assume 10% tax
  const total = subtotal + tax;

  return (
    <div className="p-6 space-y-10">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Cart Items */}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
          <div className="space-y-4">
            {cart.map((item, index) => <CartCards key={index} item={item} />)}
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-80 mt-12">
          <div className="border p-4 rounded-lg space-y-3">
            <h2 className="text-lg font-semibold">Order summary</h2>
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax (10%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-base">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="text-sm text-center">
              or{" "}
              <Link to="/" className="text-blue-600 underline">
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Gift Code Section */}
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
            .map((_, index) => (
              <PeopleRandomBought key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;