import React from "react";
import PageLogo from "../../assets/image/svg/logo.svg"
import Heading from "./Heading";
import { navItems } from "./Helper";
import { Link } from "react-router-dom";
import Button from "./Button";

const Hero = () => {
  return (
    <header className="text-gray-600">
      <div className="lg:max-w-[1290px] mx-auto px-6 container flex flex-wrap py-5 flex-col md:flex-row items-center">
        <div className="flex items-center justify-between w-full">
          <Link to={"/"} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={PageLogo} alt="page logo" />
          </Link>
          <div className="flex gap-6">
            <nav className="flex items-center gap-6">
              {navItems.map((obj, index) => (
                <Link key={index} to={obj.path} className="text-gray-700">
                  {obj.label}
                </Link>
              ))}
            </nav>
            <Button btnContent="Add to Cart" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;