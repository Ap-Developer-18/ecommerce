import React from 'react'
import AboutUsImg from "../assets/image/png/about-us.png"
import Heading from './common/Heading'
import Button from './common/Button'

const AboutUs = () => {
    return (
        <div className='py-[160px] lg:max-w-[1290px] mx-auto px-6 container'>
            <div className='flex gap-6 items-center justify-between'>
                <div className='max-w-[608px] w-full'>
                    <img className='w-full h-[572px] object-center object-cover' src={AboutUsImg} alt="about us image" />
                </div>
                <div className='w-full'>
                    <Heading simpleText="About" redText="Us" />
                    <p className='leading-160 text-gray-700'>As a trusted marketplace for buying and selling classic cars, we offer a seamless experience for both sellers and buyers. Our team of experts is passionate about matching the right car with the right owner, ensuring that each transaction is a celebration of automotive history and a testament to the enduring allure of classic automobiles</p>
                    <p className='leading-160 text-gray-700 mt-3'>
                        Explore our collection, and let the stories of these timeless machines unfold. At pc classic, we don't just sell and buy classic cars; we share in the joy of preserving a legacy on wheels. Welcome to a world where passion drives history forward.</p>
                    <Button btnContent="Learn More" className="mt-10" />
                </div>
            </div>
        </div>
    )
}

export default AboutUs