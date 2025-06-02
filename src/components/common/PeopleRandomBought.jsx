import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PeopleRandomBought = () => {
    const products = useSelector((store) => store.ProductSlice.products);

    if (!products || products.length === 0) {
        return null; // return nothing if there are no products
    }

    const randomProduct = products[Math.floor(Math.random() * products.length)];

    return (
        <div className="border rounded-lg p-4 flex flex-col items-center text-center">
            <img
                src={randomProduct.image}
                alt="Product"
                className="w-32 h-32 object-contain mb-2"
            />
            <h3 className="font-medium text-sm">
                {randomProduct.title}
            </h3>
            <div className="text-lg font-semibold my-2 line-through text-gray-500">
                ${Math.ceil(randomProduct.price + 10)}
            </div>
            <div className="text-lg font-semibold text-red-500">
                ${Math.ceil(randomProduct.price - 30)}
            </div>
            <Link
                to={`/product/${randomProduct.id}`}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm mt-2"
            >
                Add to Cart
            </Link>
        </div>
    );
};

export default PeopleRandomBought;