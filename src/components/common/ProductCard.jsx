import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const ProductCard = ({ obj }) => {
  return (
    <section>
      <div className="h-full shadow-[0px_0px_13px_#ccccccbd] rounded-md relative overflow-hidden flex flex-col justify-center items-start">
        <div class="absolute w-full h-full bg-[#02020219] blur-[50px] -right-1/2 -bottom-1/2"></div>
        <div className="relative z-10 flex flex-col h-full w-full justify-between">
          <img
            className="h-[300px] w-full object-cover object-center"
            src={obj.image}
            alt="content"
          />
          <div className="p-4">
            <h3 className="tracking-widest uppercase text-primary text-xs font-medium title-font">
              {obj.category}
            </h3>
            <h2 className="text-lg text-white font-medium title-font mb-2 mt-1">
              {obj.title.substring(0, 20)}
            </h2>
            <p className="leading-relaxed text-gray-700 text-base">
              {obj.description.substring(0, 100)}
            </p>
            <div className="flex justify-between items-center mt-4">
              <div className="text-white font-semibold text-lg">
                {obj.rating.rate}$
              </div>
              <Button
                to={"/product/" + obj.id}
                type="button"
                linkContent="Add to card" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
