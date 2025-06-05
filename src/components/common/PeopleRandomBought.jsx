import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from './Button';

const PeopleRandomBought = () => {
    const products = useSelector((store) => store.ProductSlice.products);

    if (!products || products.length === 0) {
        return null; // return nothing if there are no products
    }

    const randomProduct = products[Math.floor(Math.random() * products.length)];

    return (
        <div className="border p-4 flex flex-col bg-[#191919] border-[#2f2f2f]">
            <img
                src={randomProduct.image}
                alt="Product"
                className="h-[200px] w-full object-cover object-center mb-2"
            />
            <h3 className="font-medium text-sm text-white text-start">
                {randomProduct.title.substring(0, 40)}
            </h3>
            <div className='flex items-center justify-between w-full'>
                <div className="text-lg font-semibold my-2 line-through text-gray-500">
                    ${Math.ceil(randomProduct.price + 10)}
                </div>
                <div className="text-lg font-semibold text-red-500">
                    ${Math.ceil(randomProduct.price - 30)}
                </div>
            </div>
            <Button className="mt-4 h-9" to={`/product/${randomProduct.id}`} linkContent="Add to Cart" />
        </div>
    );
};

export default PeopleRandomBought;