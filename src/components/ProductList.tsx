import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const ProductList = () => {
        const products = ["", "", "", ""];
    return (
        <div id="product"
             className="px-4 md:px-12 py-5 md:py-10 flex justify-center items-center text-black">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {products.map((product, index) => (
                    <Link href="/product/123" key={index}>
                        <Image src="/dummy1.jpg" width={1000} height={1000} alt="mobil" className="max-w-[17rem] h-72 object-cover object-center rounded-xl"/>
                        <div className="mt-4">
                            <h2 className="font-semibold text-lg">A very good car</h2>
                            <p className="font-medium text-sm mt-1">Rp128.000.000</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
};

export default ProductList;