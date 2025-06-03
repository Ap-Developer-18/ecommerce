import React from "react";
import { useDispatch } from "react-redux";

const CartCards = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className="border p-4 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                    <img
                        src={item.image || "https://via.placeholder.com/64"}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                    />
                </div>
                <div>
                    <h3 className="font-medium text-sm">{item.title}</h3>
                    <div className="text-sm text-gray-500 flex gap-3 mt-2">
                        <button className="hover:underline">♡ Add to Favorites</button>
                        <button
                            className="text-red-500 hover:underline"
                            // onClick={() => dispatch(removeCart(item.id))}
                        >
                            ✕ Remove
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <button
                    className="px-2 py-1 border rounded"
                    // onClick={() => dispatch(decrementQty(item.id))}
                >
                    -
                </button>
                <span>{item.quantity}</span>
                <button
                    className="px-2 py-1 border rounded"
                    // onClick={() => dispatch(incrementQty(item.id))}
                >
                    +
                </button>
                <div className="ml-6 font-semibold">${item.price * item.quantity}</div>
            </div>
        </div>
    );
};

export default CartCards;
