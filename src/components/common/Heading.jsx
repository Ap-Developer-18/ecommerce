import React from 'react'

const Heading = ({ className, redText, simpleText }) => {
    return (
        <h2 className={`${redText ? "text-primary" : "text-white"} ${className} tracking-wider font-semibold text-4xl leading-120 font-tc`}>{redText ? redText : simpleText}</h2>
    )
}

export default Heading