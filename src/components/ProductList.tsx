"use client"

import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from "next/link";
import axios from "axios";

interface Product {
    _id: string;
    image: string;
    name: string;
    price: number;
}

const ProductList = () => {
        const [products, setProducts] = useState([]);

        //Todo jangan lupa buat /api/fetch-products
    useEffect(() => {
        axios.get("/api/fetchProducts").then((res) => setProducts(res.data.products));
    }, []);

    return (
        <div id="product"
             className="px-4 md:px-12 py-5 md:py-10 flex justify-center items-center text-black">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {products.map((product: Product, index) => (
                    <Link href={`/product/${product._id}`} key={index}>
                        <Image src={product.image} width={1000} height={1000} alt="mobil" className="max-w-[17rem] h-72 object-cover object-center rounded-xl"/>
                        <div className="mt-4">
                            <h2 className="font-semibold text-lg">{product.name}</h2>
                            <p className="font-medium text-sm mt-1">${product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
};

export default ProductList;