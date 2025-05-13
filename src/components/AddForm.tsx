"use client"

import React, {ChangeEvent, useState} from 'react';
import {addAction} from "@/utils/addAction";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import Image from 'next/image';

const AddForm = () => {
    const router = useRouter();
    const [imageURL, setImageURL] = useState("");
    // server action
    async function clienAddAction(formData: FormData) {
      const { error, success } = await addAction(formData)

        if (error) {
            toast.error(error)
        }

        if (success) {
            toast.success(success)

            router.push("/")

            setImageURL("")
        }
    }

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            const fileSize = file.size;

            if (Math.round(fileSize / 1024) <= 1024) {
                toast.success("File is not allowed to be larger than 1MB");
            }
            else {
                setImageURL(URL.createObjectURL(file));
            }
        }
    }

    return (
        <form action={clienAddAction} className="w-full max-w-xl mx-auto flex flex-col justify-center items-center space-y-4 mt-3 md:mt-5 text-black">

            {imageURL && (<Image src={imageURL} width={1000} height={1000} alt="img" className="max-w-full max-h-72 object-cover object-center rounded-xl"/>)}
            <div className="flex flex-col w-full">
                <label>Product Image: </label>
                <input type="file" accept="image/*" name="image" onChange={handleImageChange} className="w-full px-3 py-1.5 md:py-2 text-black bg-white border border-black rounded-xl"/>
            </div>

            <div className="flex flex-col w-full">
                <label>Name: </label>
                <input type="text" name="name" placeholder="Enter product name" className="w-full px-3 py-1.5 md:py-2 text-black bg-white border border-black rounded-xl"/>
            </div>

            <div className="flex flex-col w-full">
                <label>Price: </label>
                <input type="number" name="price" placeholder="Enter product name" className="w-full px-3 py-1.5 md:py-2 text-black bg-white border border-black rounded-xl"/>
            </div>

            <div className="flex flex-col w-full">
                <label>Seller Phone Number: </label>
                <input type="tel" name="sellerPhone" placeholder="Enter seller phone number" className="w-full px-3 py-1.5 md:py-2 text-black bg-white border border-black rounded-xl"/>
            </div>

            <div className="flex flex-col w-full">
                <label>Description: </label>
                <textarea name="description" placeholder="Enter product description" rows={4} className="w-full px-3 py-1.5 md:py-2 text-black bg-white border border-black rounded-xl"/>
            </div>

            <button type="submit" className="w-full bg-black text-white px-3 py-2 rounded-md cursor-pointer">
                Add Product
            </button>
        </form>
    )
};

export default AddForm;