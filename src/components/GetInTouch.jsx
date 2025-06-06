import React from 'react'
import InvestMentImg from "../assets/image/png/investment.png"
import Heading from './common/Heading'
import Button from './common/Button'

const GetInTouch = () => {
    return (
        <div className='lg:max-w-[1290px] mx-auto px-6 container'>
            <div
                className="w-full py-[120px] flex justify-center items-center bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${InvestMentImg})` }}>
                <div className='max-w-[691px] w-full mx-auto'>
                    <Heading className="text-5xl text-center" simpleText="Get into touch" />
                    <p className='text-gray-700 leading-160'>Lorem ipsum dolor sit amet consectetur. Nunc dictum convallis eget ut in bibendum lacus pharetra. Nec lectus sit arcu malesuada quisque eu facilisis aliquet eget. Egestas arcu massa</p>
                    <Button className="mx-auto mt-8" btnContent="Get Started" />
                </div>
            </div>
        </div>
    )
}

export default GetInTouch