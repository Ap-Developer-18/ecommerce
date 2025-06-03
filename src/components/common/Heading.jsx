import React from 'react';

const Heading = ({ className, redText, simpleText }) => {
    return (
        <h2 className={`tracking-wider font-semibold text-4xl leading-120 font-tc ${className}`}>
            <span className="text-white">{simpleText}</span>{" "}
            <span className="text-primary">{redText}</span>
        </h2>
    );
};

export default Heading;