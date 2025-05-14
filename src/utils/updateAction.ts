"use server";


import cloudinary from "./cloudinary";
import { connectDB } from '@/../lib/mongoose';
import Product from "@/app/api/models/product.model";

export async function updateAction(formData: FormData, id: string) {
    try {
        const image = formData.get("image") as File;
        const name = formData.get("name");
        const price = formData.get("price")
        const sellerPhone = formData.get("sellerPhone") ;
        const description = formData.get("description");

        if(!image || !name || !price || !sellerPhone || !description) {
            console.log("Please fill all the fields")

            return {
                error: "Please fill all the fields"
            }
        }

        await connectDB();

        const product = await Product.findById(id);

        if (!product) {
            return {
                error: "No product found",
            };
        }

        if (image.size === 0) {
            // update without the image
            await Product.findByIdAndUpdate(id, {
                name,
                price,
                sellerPhone,
                description,
            });

            return {
                success: "Product updated successfully",
            };
        } else {
            const parts = product.image.split("/");
            const fileName = parts[parts.length - 1];
            const imageId = fileName.split(".")[0];

            cloudinary.uploader
                .destroy(`sisaharta/${imageId}`)
                .then((result) => console.log("Result", result));

            // Image processes
            const arrayBuffer = await image.arrayBuffer();
            const buffer = new Uint8Array(arrayBuffer);
            const imageResponse: any = await new Promise((resolve, reject) => {
                cloudinary.uploader
                    .upload_stream(
                        {
                            resource_type: "auto",
                            folder: "sisaharta",
                        },
                        async (error, result) => {
                            if (error) {
                                return reject(error.message);
                            }
                            return resolve(result);
                        }
                    )
                    .end(buffer);
            });

            console.log("Image response: ", imageResponse);

            // Store in DB

            await Product.findByIdAndUpdate(id, {
                image: imageResponse.secure_url,
                name,
                price,
                sellerPhone,
                description,
            });

            return {
                success: "Product added successfully",
            };
        }
    } catch (error) {
        return {
            error: "Something went wrong.",
        };
    }
}