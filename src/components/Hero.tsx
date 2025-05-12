import React from 'react';

const Hero = () => {
    return (
        <div className="min-h-[70vh] md:min-h-[60vh] lg:min-h-[90vh] flex flex col md:flex-row justify-center items-center bg-white px-4 md:px-12 text-black">
            <div className="max-w-2xl">
                <h1 className="text-5xl pt-6 md:pt-0 md:text-7xl leading-tight">
                    Past Treasures, Present Charm
                </h1>

                <p>
                    Discover curated preloved pieces where the charm of the past meets today’s lifestyle.
                </p>

                <a href="#product">
                    <button>Shop the Collection</button>
                </a>
            </div>
        </div>
    )
};

export default Hero;