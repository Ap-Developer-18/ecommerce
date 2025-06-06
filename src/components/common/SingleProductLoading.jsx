import React from "react";

const SingleProductLoading = () => {
    return (
        <section className="text-gray-700 body-font overflow-hidden animate-pulse">
            <div className="lg:max-w-[1290px] mx-auto px-6 container py-24">
                <div className="flex gap-6 items-center flex-col lg:flex-row">
                    {/* Image Skeleton */}
                    <div className="lg:w-[40%] w-full h-[350px] bg-gray-800 rounded" />

                    {/* Text Content Skeleton */}
                    <div className="space-y-4 w-[60%]">
                        {/* Category */}
                        <div className="h-4 w-24 bg-gray-800 rounded"></div>

                        {/* Title */}
                        <div className="h-8 w-full bg-gray-800 rounded"></div>

                        {/* Rating + Icons */}
                        <div className="flex items-center gap-3">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <div key={i} className="w-4 h-4 bg-gray-800 rounded" />
                                ))}
                            </div>
                            <div className="h-4 w-20 bg-gray-800 rounded" />
                            <div className="flex gap-2">
                                <div className="w-5 h-5 bg-gray-800 rounded-full" />
                                <div className="w-5 h-5 bg-gray-800 rounded-full" />
                                <div className="w-5 h-5 bg-gray-800 rounded-full" />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <div className="w-full h-4 bg-gray-800 rounded" />
                            <div className="w-5/6 h-4 bg-gray-800 rounded" />
                            <div className="w-2/3 h-4 bg-gray-800 rounded" />
                        </div>

                        {/* Price + Button */}
                        <div className="flex justify-between items-center border-t pt-3 mt-3">
                            <div className="w-24 h-6 bg-gray-800 rounded" />
                            <div className="w-32 h-10 bg-gray-800 rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleProductLoading;
