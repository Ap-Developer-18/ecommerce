import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Heading from "./common/Heading";

const SeeOurClassicItems = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const swiperRef = useRef(null);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            setData(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleSlideChange = (swiper) => {
        setCurrentIndex(swiper.realIndex);
    };

    const goPrev = () => {
        if (swiperRef.current) swiperRef.current.slidePrev();
    };

    const goNext = () => {
        if (swiperRef.current) swiperRef.current.slideNext();
    };

    if (loading) return <p style={{ color: "white" }}>Loading...</p>;

    return (
        <div className="lg:max-w-[1290px] py-[160px] mx-auto px-6 container">
            <Heading simpleText="Here The" redText="Product Review" />
            <p className="text-gray-700 leading-160">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, sed. Consequatur, dolore deleniti placeat sint facere similique quibusdam asperiores doloremque?</p>
            <Swiper
                modules={[Navigation]}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={32}
                onSlideChange={handleSlideChange}
                onInit={(swiper) => {
                    swiperRef.current = swiper;
                    swiper.slideTo(1); // move to second slide on init
                    setCurrentIndex(1); // set index manually to 1
                }}
                style={{ marginTop: "2rem" }}
                navigation={false} // Disable built-in navigation
            >
                {data.map((obj, index) => (
                    <SwiperSlide key={index}>
                        <div>
                            <img className="h-[365px] w-full object-cover object-center" src={obj.image} alt="work on img" />
                            <h2 className="text-lg text-white font-medium title-font mb-2 mt-3">
                                {obj.title.substring(0, 20)}
                            </h2>
                            <p className="leading-relaxed text-gray-700 text-base">
                                {obj.description.substring(0, 100)}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Progress Line and Buttons */}
            <div className="flex items-center gap-8 w-full mt-6">
                <div className="overflow-hidden h-[3px] w-full bg-[#444] relative">
                    <div
                        className="bg-white h-full transition-all duration-300 ease-in"
                        style={{
                            width: `${(currentIndex / (data.length - 2)) * 100}%`,
                        }}
                    />
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={goPrev}
                        className="size-12 cursor-pointer rounded-full border border-white flex justify-center items-center"
                    >
                        <IoIosArrowBack className="text-white" size={22} />
                    </button>
                    <button
                        onClick={goNext}
                        className="size-12 cursor-pointer rounded-full border border-white flex justify-center items-center"
                    >
                        <IoIosArrowForward className="text-white" size={22} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SeeOurClassicItems;