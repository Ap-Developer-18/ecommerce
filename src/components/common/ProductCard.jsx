import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ obj }) => {
  return (
    <section>
      <div className="bg-white rounded-xl h-full relative overflow-hidden flex flex-col justify-center p-3 shadow-[10px_1px_20px_#0000003b,_inset_-10px_-10px_57px_#ffffff] items-start">
        <div class="absolute w-full h-full bg-[#02020219] blur-[50px] -right-1/2 -bottom-1/2"></div>
        <div className="relative z-10">
          <img
            className="h-54 rounded-xl w-full object-cover object-center mb-6"
            src={obj.image}
            alt="content"
          />
          <h3 className="tracking-widest uppercase text-indigo-500 text-xs font-medium title-font">
            {obj.category}
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
            {obj.title.substring(0, 20)}
          </h2>
          <p className="leading-relaxed text-gray-700 text-base">
            {obj.description.substring(0, 100)}
          </p>
          <div className="flex justify-between items-center mt-4">
            <div className="text-gray-950 font-semibold text-lg">
              {obj.rating.rate}$
            </div>
            <Link
              to={"/product/" + obj.id}
              type="button"
              class="text-white duration-300 cursor-pointer bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Add to card
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
