import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const Hero = () => {
    return (
        <div className="min-h-[70vh] md:min-h-[60vh] lg:min-h-[90vh] flex flex col md:flex-row justify-center items-center bg-white px-4 md:px-12 text-black">
            <div className="max-w-2xl">
                <h1 className="text-5xl pt-6 md:pt-0 md:text-7xl leading-tight">
                    Past Treasures, Present Charm
                </h1>

                <p className="text-[#495057] mt-4">
                    Discover curated preloved pieces where the charm of the past meets today’s lifestyle.
                </p>

                <Link href="#product">
                    <button className="mt-8 bg-black text-white px-3 py-2 rounded-xl">
                        Shop the Collection
                    </button>
                </Link>
            </div>

            <div>
                <Image src="/klipartz.png" width={600} height={600} alt="baju" />
            </div>
        </div>
    )
};

export default Hero;