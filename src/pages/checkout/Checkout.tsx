import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router";
import { useGetSingleProductQuery } from "../../redux/features/products/productsApi";
import Skeleton from "../../components/Skeleton";
import { useState } from "react";
import { generateOrderId } from "../../utils/orderIdGenarator";
import { useOrderPlaceMutation } from "../../redux/features/order/orderApi";

export type TShippingAddress = {

    district: string;
    subDistrict: string;
    address: string;
};

type IFormInput = {
    customerName: string;
    phone: string;
    orderId: string;
    quantity: number;
    orderDate: string;
    status: string;
    totalAmount: number;
    shippingAddress: TShippingAddress;
};

const Checkout = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>();
    const [quantity, setQuantity] = useState(1);
    const [orderPlace] = useOrderPlaceMutation();
    const { id } = useParams();;

    const orderId = generateOrderId();

    const { data, isLoading } = useGetSingleProductQuery(id as string);
    const bag = data?.data;
    if (isLoading) {
        return <Skeleton />
    }

    const total = ((bag?.price * Number(quantity)) + 120).toFixed(2);


    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        const shippingAddress: TShippingAddress = {
            district: data.shippingAddress.district,
            subDistrict: data.shippingAddress.subDistrict,
            address: data.shippingAddress.address
        }
        const orderData = {
            orderId,
            customerName: data.customerName,
            orderProducts: bag?._id,
            quantity: Number(data.quantity),
            totalAmount: total,
            phone: data.phone,
            shippingAddress: shippingAddress
        }
        const result = await orderPlace(orderData);
        console.log(result);
        if (result?.data) {
            reset()
            alert("Order placed successfully")
        }
    }
    return (
        <div>
            {/* <h2>Checkout </h2> */}
            <h3 className='lg:text-xl md:text-sm text-[5px] hidden sm:hidden md:hidden lg:block font-semibold pb-3 text-center mx-80 border-b-4 mt-4 border-black border-dashed'>অর্ডার করতে সঠিক তথ্য দিয়ে নিচের ফরম পূরন করুন</h3>
            <h3 className='lg:text-xl text-[20px] mx-5 lg:hidden  font-semibold pb-3 text-center  border-b-4 border-black border-dashed'>অর্ডার করতে সঠিক তথ্য দিয়ে নিচের ফরম পূরন করুন</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-5 text-gray-500">
                <div>
                    <div className="flex mx-auto justify-between items-center border border-r-slate-300 h-24 w-[95%] px-2 rounded mt-4">
                        <img src={bag?.img} alt="" className="h-[80px]" />
                        <h3 className="font-semibold">{bag?.name}</h3>
                        <h3>Size: {bag?.size}</h3>
                        <h3 className="font-bold" >{(bag?.price * quantity).toFixed(1)}tk</h3>
                    </div>
                    <div className="mx-4 mt-4 font-bold ">
                        <div className="flex justify-between mb-5 ">
                            <h5 className="font-semibold">মোট</h5>  <h5 className="font-bold">{(bag?.price * quantity).toFixed(1)} tk</h5>
                        </div>

                        <div className="flex justify-between mb-10">
                            <h5>ডেলিভারি চার্জ</h5> <h5>120 tk</h5>
                        </div>
                        <hr /><hr />
                        <div className="flex justify-between">
                            <h5>সর্বোমোট</h5> <h5>{total}</h5>
                        </div>
                    </div>

                    <div>
                        <h1 className=" w-[95%] px-2  mt-5 mx-auto font-bold text-xl">Payment Methods</h1>
                        <div className="flex flex-col border border-r-slate-300  w-[95%] px-2 rounded mt-4 mx-auto h-auto">
                            <div className="flex items-center"><input type="checkbox" className="mr-4" defaultChecked name="" id="" /> <span>ক্যাশ অন ডেলিভারি</span>  <img src="/cod.png" alt="" className="ml-[-25px] w-[100px] h-9" /> </div>
                            <div className="flex items-center"><input type="checkbox" disabled className="mr-4" name="" id="" /> <span>বিকাশ</span><img src="/bkash.png" alt="" className="ml-[-25px] w-[100px] h-9" /> </div>
                            <div className="flex items-center"><input type="checkbox" disabled className="mr-4" name="" id="" /> <span>নগদ</span><img src="/nogod.png" alt="" className="ml-[-25px] w-[100px] h-9" /> </div>
                            <div className="flex items-center"><input type="checkbox" disabled className="mr-4" name="" id="" /> <span>রকেট</span><img src="/rocket.png" alt="" className="ml-[-25px] w-[100px] h-9" /> </div>
                            <div className="flex items-center"><input type="checkbox" disabled className="mr-4" name="" id="" /> <span>ভিসা/মাস্টার কার্ড</span><img src="/visa.png" alt="" className="ml-[-20px] w-[100px] h-9" /> </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 gap-5 mx-10 text-gray-500 ">
                        <div>
                            <div>
                                <div className="label">
                                    <span className="label-text font-semibold text-gray-600 ">আপনার নাম লিখুন <span className="text-red-600 font-semibold text-xl">*</span></span>
                                </div>
                                <input
                                    {...register("customerName", { required: true })}
                                    type="text"
                                    placeholder="সম্পুর্ন নামটি লিখুন"
                                    className="input input-bordered input-md w-full max-w-xs" />
                            </div>
                        </div>

                        <div>
                            <div className="label">
                                <span className="label-text font-semibold text-gray-600 ">আপনার মোবাইল নাম্বারটি দিন<span className="text-red-600 font-semibold text-xl">*</span></span>
                            </div>
                            <input
                                {...register("phone", {
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^[0-9]{11}$/, // Ensure it's 11 digits
                                        message: "Please enter a valid 11-digit phone number",
                                    },
                                })}
                                type="text"
                                placeholder="১১ ডিজিটের নাম্বারটি লিখুন"
                                className={`input input-bordered input-md w-full max-w-xs ${errors.phone ? "border-red-500" : ""
                                    }`}
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                            )}
                        </div>

                        <div>
                            <div className="label">
                                <span className="label-text font-semibold text-gray-600 ">আপনার জেলার নাম লিখুন<span className="text-red-600 font-semibold text-xl">*</span></span>
                            </div>
                            <input
                                {...register("shippingAddress.district", { required: true })}
                                type="text"
                                placeholder="জেলার নাম লিখুন"
                                className="input input-bordered input-md w-full max-w-xs" />
                        </div>
                        <div>
                            <div className="label">
                                <span className="label-text font-semibold text-gray-600 ">আপনার উপজেলার নাম লিখুন<span className="text-red-600 font-semibold text-xl">*</span></span>
                            </div>
                            <input
                                {...register("shippingAddress.subDistrict", { required: true })}
                                type="text"
                                placeholder="উপজেলার নাম লিখুন"
                                className="input input-bordered input-md w-full max-w-xs" />
                        </div>

                        <div>
                            <div className="label">
                                <span className="label-text font-semibold text-gray-600 ">কয়টি পন্য কিনতে চান<span className="text-red-600 font-semibold text-xl">*</span></span>
                            </div>
                            <input
                                {...register("quantity", { required: true })}
                                type="number"
                                min="1"
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                placeholder="পন্যের সংখ্যা লিখুন"
                                className="input input-bordered input-md w-full max-w-xs" />
                        </div>

                        <div>
                            <div className="label">
                                <span className="label-text font-semibold text-gray-600 ">আপনার সম্পূর্ন ঠিকানা লিখুন<span className="text-red-600 font-semibold text-xl">*</span></span>
                            </div>
                            <input
                                {...register("shippingAddress.address", { required: true })}
                                type="text"
                                placeholder="রোড নাম/নাম্বার, বাড়ির নাম/নাম্বার, এলাকার নাম লিখুন"
                                className="input input-bordered input-md w-full max-w-xs" />
                        </div>


                    </div>

                    <div className="mt-5 flex justify-center" >
                        <input type="submit" value="অর্ডার সম্পন্ন করুন " className="border text-gray-800 border-black hover:bg-white w-1/3 p-2 bg-primary rounded" />
                    </div>
                </form>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Checkout;