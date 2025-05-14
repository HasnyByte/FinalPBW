"use client"

import {Search} from "lucide-react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React, {ChangeEvent} from 'react';

const Header = () => {
    const router = useRouter();
    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set("searchTerm", e.target.value);

        const searchQuery = urlParams.toString();
        router.push(`/search?${searchQuery}`);
    };

    return (
        <nav className="px-4 md:px-12 py-4 md:py-6 bg-black text-white">
            <div className="flex justify-between items-center">
                <a href="/" className="hidden md:inline-block text-lg font-semibold">SisaHarta</a>
                <div className="relative max-w-[300px] md:w-[400px]">

                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <Search className="w-4 h-4"/>
                    </div>

                    <input type="text" placeholder="Search" onChange={handleChange} className="h-[36px] relative pl-10 border border-black/[0.7] text-sm rounded-xl w-full py-2 px-3 bg-transparent focus:outline-none shadow-[0_0_0_2px_white]"/>
                </div>

                <Link href="/addProduct">
                    <button className="bg-white text-black px-3 py-2 rounded-xl cursor-pointer">Add Product</button>
                </Link>
            </div>
        </nav>
    );
};

export default Header;
