import React from "react";
import { useDispatch } from "react-redux";
import { decrementQty, incrementQty, removeCart } from "../../redux/Cart.Slice";

const CartCards = ({ item }) => {
    const dispatch = useDispatch();

    return (
        <div className="p-4 bg-[#191919] flex items-center justify-between border border-[#2F2F2F]">
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">
                    <img
                        src={item.image || "https://via.placeholder.com/64"}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                    />
                </div>
                <div>
                    <h3 className="font-medium text-sm text-white">{item.title}</h3>
                    <div className="text-sm text-gray-500 flex gap-3 mt-2">
                        <button className="hover:underline">♡ Add to Favorites</button>
                        <button
                            className="text-red-500 hover:underline"
                            onClick={() => dispatch(removeCart(item.id))}
                        >
                            ✕ Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCards;
