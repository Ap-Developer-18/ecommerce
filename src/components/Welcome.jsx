import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import WelcomeImg from '../assets/image/png/welcome.png';
import Button from './common/Button';

const Welcome = () => {
    const sectionRef = useRef();
    const imageRef = useRef();
    const paraRef = useRef();
    const buttonRef = useRef();
    const headingCharsRef = useRef([]);

    const headingText = "Welcome to Ecommerce our store";
    useEffect(() => {
        headingCharsRef.current.forEach(el => {
            if (el) el.style.visibility = "hidden";
        });

        const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 1 } });

        // First animate the main section in
        tl.to(sectionRef.current, { opacity: 1, y: 0 })

            // Then image and content appear
            .to(imageRef.current, { opacity: 1, scale: 1 }, "-=0.5")
            .to(paraRef.current, { opacity: 1, y: 0 }, "-=0.4")
            .to(buttonRef.current, { opacity: 1, y: 0 }, "-=0.3")

            // THEN typewriter heading animates
            .add(() => {
                gsap.to(headingCharsRef.current, {
                    visibility: "visible",
                    stagger: 0.05,
                    ease: "none"
                });
            }, "+=0.2"); // slight delay before heading starts
    }, []);


    return (
        <div ref={sectionRef} className='lg:max-w-[1290px] mx-auto px-6 container pt-14 opacity-0 translate-y-10'>
            {/* Typewriter heading */}
            <h2 className="tracking-wider font-semibold text-4xl leading-120 font-tc text-white max-w-[350px] flex flex-wrap">
                {headingText.split("").map((char, i) => (
                    <span
                        key={i}
                        ref={(el) => (headingCharsRef.current[i] = el)}
                        style={{ visibility: "hidden" }}
                        className="inline-block"
                    >
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </h2>

            <div className='mt-4'>
                <img ref={imageRef} className='h-[365px] w-full opacity-0 scale-90' src={WelcomeImg} alt="welcome" />
            </div>

            <div className='flex justify-between items-center mt-4'>
                <p ref={paraRef} className='leading-160 text-gray-700 max-w-[522px] opacity-0 translate-y-8'>
                    Lorem ipsum dolor sit amet consectetur. Rutrum purus vitae risus vitae ullamcorper volutpat. Et mauris nulla nec
                </p>
                <div ref={buttonRef} className="opacity-0 translate-y-8">
                    <Button btnContent="Get Started" />
                </div>
            </div>
        </div>
    );
};

export default Welcome;