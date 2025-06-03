import React from 'react'
import Heading from './common/Heading'
import WelcomeImg from "../assets/image/png/welcome.png"
import Button from './common/Button'

const Welcome = () => {
    return (
        <div className='lg:max-w-[1380px] mx-auto px-6 container pt-14'>
            <Heading simpleText="Welcome to Ecommerce our store" className="max-w-[380px]" />
            <div className='mt-4'>
                <img className='h-[365px] w-full' src={WelcomeImg} alt="welcome" />
            </div>
            <div className='flex justify-between items-center mt-4'>
                <p className='leading-160 text-gray-700 max-w-[522px]'>Lorem ipsum dolor sit amet consectetur. Rutrum purus vitae risus vitae ullamcorper volutpat. Et mauris nulla nec</p>
                <Button btnContent="Get Started" />
            </div>
        </div>
    )
}

export default Welcome