import React from 'react'

const CartCards = () => {
    return (
        <div
            className="border p-4 rounded-lg flex items-center justify-between"
        >
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded" />
                <div>
                    <h3 className="font-medium text-sm">
                        PC system All in One APPLE iMac (2023)...
                    </h3>
                    <div className="text-sm text-gray-500 flex gap-3 mt-2">
                        <button className="hover:underline">
                            ♡ Add to Favorites
                        </button>
                        <button className="text-red-500 hover:underline">
                            ✕ Remove
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <button className="px-2 py-1 border rounded">-</button>
                <span>1</span>
                <button className="px-2 py-1 border rounded">+</button>
                <div className="ml-6 font-semibold">1799</div>
            </div>
        </div>
    )
}

export default CartCards