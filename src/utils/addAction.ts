"use server" ;

// import cloudinary from "@/utils/cloudinary";
import { connectDB } from '@/../lib/mongoose';
import Product from "@/app/api/models/product.model";
import cloudinary from "./cloudinary";

export async function addAction(formData: FormData) {
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

        //image processes
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

        await Product.create({
            image: imageResponse.secure_url,
            name,
            price,
            sellerPhone,
            description,
        });

        return {
            success: "Product added successfully"
        }
    }
    catch (error) {
        return {
            error: "Something went wrong."
        }
    }
}


