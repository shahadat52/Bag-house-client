import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router";
import { useGetSingleProductQuery } from "../../redux/features/products/productsApi";
import Skeleton from "../../components/Skeleton";

export type TShippingAddress = {
    fullName: string;
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
    const { register, handleSubmit } = useForm<IFormInput>();
    const { id } = useParams();;

    const { data, isLoading } = useGetSingleProductQuery(id as string);
    console.log(data);
    const bag = data?.data;
    if (isLoading) {
        return <Skeleton />
    }





    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
    }
    return (
        <div>
            {/* <h2>Checkout </h2> */}
            <h3 className='text-xl font-semibold pb-3 text-center mx-80 border-b-4 border-black border-dashed'>অর্ডার করতে সঠিক তথ্য দিয়ে নিচের ফরম পূরন করুন</h3>
            <div className="grid grid-cols-2 mt-5">
                <div className="mx-auto">
                    <img src={bag?.img} alt="" className="h-[400px]" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-2 gap-5 mx-10">
                        <div>
                            <div>
                                <div className="label">
                                    <span className="label-text font-semibold">আপনার নাম লিখুন <span className="text-red-600 font-semibold text-xl">*</span></span>
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
                                <span className="label-text font-semibold">আপনার মোবাইল নাম্বারটি দিন<span className="text-red-600 font-semibold text-xl">*</span></span>
                            </div>
                            <input
                                {...register("phone", { required: true })}
                                type="text"
                                placeholder="১১ ডিজিটের নাম্বারটি লিখুন"
                                className="input input-bordered input-md w-full max-w-xs" />
                        </div>

                        <div>
                            <div className="label">
                                <span className="label-text font-semibold">আপনার জেলার নাম লিখুন<span className="text-red-600 font-semibold text-xl">*</span></span>
                            </div>
                            <input
                                {...register("shippingAddress.district", { required: true })}
                                type="text"
                                placeholder="জেলার নাম লিখুন"
                                className="input input-bordered input-md w-full max-w-xs" />
                        </div>
                        <div>
                            <div className="label">
                                <span className="label-text font-semibold">আপনার উপজেলার নাম লিখুন<span className="text-red-600 font-semibold text-xl">*</span></span>
                            </div>
                            <input
                                {...register("shippingAddress.subDistrict", { required: true })}
                                type="text"
                                placeholder="উপজেলার নাম লিখুন"
                                className="input input-bordered input-md w-full max-w-xs" />
                        </div>
                        <div>
                            <div className="label">
                                <span className="label-text font-semibold">আপনার সম্পূর্ন ঠিকানা লিখুন<span className="text-red-600 font-semibold text-xl">*</span></span>
                            </div>
                            <input
                                {...register("shippingAddress.address", { required: true })}
                                type="text"
                                placeholder="রোড নাম/নাম্বার, বাড়ির নাম/নাম্বার, এলাকার নাম লিখুন"
                                className="input input-bordered input-md w-full max-w-xs" />
                        </div>
                        <div>
                            <div className="label">
                                <span className="label-text font-semibold">কয়টি পন্য কিনতে চান<span className="text-red-600 font-semibold text-xl">*</span></span>
                            </div>
                            <input
                                {...register("quantity", { required: true })}
                                type="number"
                                placeholder="পন্যের সংখ্যা লিখুন"
                                className="input input-bordered input-md w-full max-w-xs" />
                        </div>


                    </div>

                    <div className="mt-5 flex justify-center" >
                        <input type="submit" value="অর্ডার কনফার্ম করুন" className="border border-black w-1/4 p-2 bg-primary rounded" />
                    </div>
                </form>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Checkout;