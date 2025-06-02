import React from 'react'
import { useSelector } from 'react-redux'

const PeopleRandomBought = () => {
    const products = useSelector((store) => store.ProductSlice.products)

    // Pick a random product
    const randomProduct = products[Math.floor(Math.random() * products.length)]

    return (
        <div className="border rounded-lg p-4 flex flex-col items-center text-center">
            <img src={randomProduct.image} alt="img" className="w-32 h-32 object-contain mb-2" />
            <h3 className="font-medium text-sm">
                {randomProduct.title}
            </h3>
            <div className="text-lg font-semibold my-2">
                $ {randomProduct.price || '500'}
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
                Add to Cart
            </button>
        </div>
    )
}

export default PeopleRandomBought
