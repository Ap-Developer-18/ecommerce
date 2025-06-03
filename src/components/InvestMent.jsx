import React from 'react'
import InvestMentImg from "../assets/image/png/investment.png"
import Heading from './common/Heading'
import Button from './common/Button'

const InvestMent = () => {
    return (
        <div className='pt-[160px]'>
            <div
                className="w-full py-[211px] flex justify-center items-center bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${InvestMentImg})` }}>
                <div className='max-w-[691px] w-full mx-auto'>
                    <Heading className="text-5xl text-center" simpleText="PC Investments specializes in buying and selling classic cars." />
                    <Button className="mx-auto mt-10" btnContent="Buy Now" />
                </div>
            </div>
        </div>
    )
}

export default InvestMent