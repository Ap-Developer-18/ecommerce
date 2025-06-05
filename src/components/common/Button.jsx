import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

const Button = ({ to, linkContent, btnContent, className, onClick }) => {
    return (
        <div>
            {to ?
                <Link className={`bg-transparent flex items-center gap-2 justify-center border border-white text-white font-medium overflow-hidden relative hover:bg-primary px-4 h-12 cursor-pointer hover:shadow-[0px_0px_14px_#acacacb3] hover:brightness-150 active:opacity-75 outline-none duration-300 group ${className}`} to={to}>
                    <span class="bg-transparent shadow-white absolute -top-[150%] left-0 inline-flex w-full h-[10px] opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    {linkContent}<FaArrowRight />
                </Link>
                :
                <button onClick={onclick} className={`bg-transparent flex items-center gap-2 justify-center border border-white text-white font-medium overflow-hidden relative hover:bg-primary px-4 h-11 cursor-pointer hover:shadow-[0px_0px_14px_#acacacb3] hover:brightness-150 active:opacity-75 outline-none duration-300 group ${className}`}>
                    <span class="bg-transparent shadow-white absolute -top-[150%] left-0 inline-flex w-full h-[10px] opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    {btnContent} <FaArrowRight />
                </button>
            }
        </div>
    )
}

export default Button