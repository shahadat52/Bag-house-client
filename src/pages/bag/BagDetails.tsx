import { NavLink, useParams } from "react-router";
import { useGetSingleProductQuery } from "../../redux/features/products/productsApi";
import Skeleton from "../../components/Skeleton";

const BagDetails = () => {
    const { id } = useParams();;

    const { data, isLoading } = useGetSingleProductQuery(id as string);
    console.log(data);
    const bag = data?.data;
    if (isLoading) {
        return <Skeleton />
    }
    return (
        <div className="">
            {/* <h1 className="text-2xl font-bold mt-10 mb-6">{bag?.name}</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="col-span-1 mx-auto">
                    <img
                        src={bag?.img}
                        className="w-[350px] "
                        alt=""
                    />
                </div>
                <div className="my-8">
                    <h1 className="text-4xl font-bold">* {bag?.name}</h1>
                    <p className="mt-5 font-semibold text-xl">মূল্য  {bag?.price}</p>
                    <p className="mt-2">
                        ✅ আমাদের ঝুড়িব্যাগ গুলো প্লাস্টিকের বেতের তৈরি তাই টেকসই ও মজবুত হয়।<br />
                        ✅ যেকোন ধরনের হালকা ও ভারি মালামাল ক্যারি করতে পারবেন। <br />
                        ✅ ওয়াশেবল ও কালার গ্যারান্টি। <br />
                        ✅ আমাদের আছে কালারের ভিন্নতা। <br />
                        ✅ আপনার পছন্দের রুচিশীল মানসম্মত পন্যের নিশ্চয়তা।

                    </p>
                    <p className="text-xl font-medium mt-3 mb-10">
                        * Dimensions: {bag?.size}
                    </p>

                    <NavLink to={`/checkout/${id}`} className="mb-[-50px]">
                        <button className="btn bg-black hover:bg-white hover:text-black hover:rounded text-white rounded-none w-full">অর্ডার করুন</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default BagDetails;