import { useForm, SubmitHandler } from "react-hook-form";
import { TProduct } from "../../interface/products";
import { useCreateProductMutation } from "../../redux/features/products/productsApi";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";
import { useState } from "react";



const AddProductModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [isLoading, setIsLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<TProduct>();
    const [addProduct] = useCreateProductMutation()

    const onSubmit: SubmitHandler<TProduct> = async (data) => {
        setIsLoading(true)
        const images = data.image.split(",");
        const productData = {
            name: data.name,
            images,
            zoomImg: data.zoomImg,
            category: data.category,
            subCategory: data.subCategory,
            description: data.description,
            price: Number(data.price),
            quantity: Number(data.quantity),
            size: data.size,
            ratings: Number(data.ratings),
            status: data.status,
        };

        const result = await addProduct(productData)
        if (result?.data) {
            setIsLoading(false)
            toast.success("Order placed successfully")
            reset();
            onClose();
        }
        if (result?.error) {
            setIsLoading(false)
            toast.error("Order failed")
        };
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-[50%]">
                <div className="flex justify-between items-center px-4 py-3 border-b">
                    <h2 className="text-lg font-bold">Add Product</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-red-500">
                        ✕
                    </button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block text-sm font-medium">Product Name</label>
                            <input
                                type="text"
                                {...register("name", { required: "Product name is required" })}
                                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium">Price</label>
                            <input
                                type="number"
                                step="0.01"
                                {...register("price", { required: "Price is required", min: 0 })}
                                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                            {errors.price && <p className="text-sm text-red-500">{errors.price.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Category</label>
                            <input
                                type="text"
                                {...register("category", { required: "Category is required" })}
                                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                            {errors.category && <p className="text-sm text-red-500">{errors.category.message}</p>}
                        </div>


                        <div>
                            <label className="block text-sm font-medium">Size</label>
                            <input
                                type="text"
                                {...register("size", { required: "Size is required" })}
                                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                            {errors.size && <p className="text-sm text-red-500">{errors.size.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Ratings</label>
                            <input
                                type="text"
                                {...register("ratings", { required: "ratings is required" })}
                                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                            {errors.ratings && <p className="text-sm text-red-500">{errors.ratings.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium">ZoomImage</label>
                            <input
                                type="text"
                                {...register("zoomImg", { required: "zoomImg is required" })}
                                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                            {errors.zoomImg && <p className="text-sm text-red-500">{errors.zoomImg.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium">SubCategory</label>
                            <input
                                type="text"
                                {...register("subCategory", { required: "SubCategory is required" })}
                                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                            {errors.subCategory && <p className="text-sm text-red-500">{errors.subCategory.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Quantity</label>
                            <input
                                type="number"
                                {...register("quantity", { required: "Stock is required", min: 0 })}
                                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                            />
                            {errors.quantity && <p className="text-sm text-red-500">{errors.quantity.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Description</label>
                            <textarea
                                {...register("description", { required: "Description is required" })}
                                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                            ></textarea>
                            {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Images (up to 10)</label>
                            <textarea
                                {...register("image", { required: "Images is required" })}
                                className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                            ></textarea>
                            {errors.image && <p className="text-sm text-red-500">{String(errors.image.message)}</p>}
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-500 border rounded-md hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        {
                            isLoading ? <Loading /> : <button
                                type="submit"
                                className="ml-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                            >
                                Add Product
                            </button>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProductModal;


