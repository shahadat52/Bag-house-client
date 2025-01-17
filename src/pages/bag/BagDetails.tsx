/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink, useParams } from "react-router";
import { useGetProductsQuery, useGetSingleProductQuery } from "../../redux/features/products/productsApi";
import Skeleton from "../../components/Skeleton";
import Loading from "../../components/Loading";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import ImageCard from "../../components/ImageCard";
import { useEffect, useState } from "react";

const BagDetails = () => {
    const { id } = useParams();;

    const { data, isLoading } = useGetSingleProductQuery(id as string);
    const { data: relatedData, isLoading: relatedLoading } = useGetProductsQuery({ category: "bag" });
    const bag = data?.data;
    const relatedBags = relatedData?.data;

    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
    useEffect(() => {
        if (bag?.images) {
            setSelectedImage(bag.images[0]);
        }
    }, [bag]);
    const detailsArray = bag?.description.split(",");

    if (isLoading) {
        return <Skeleton />
    }


    return (
        <div className="">
            {/* <h1 className="text-2xl font-bold mt-10 mb-6">{bag?.name}</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-5">
                <div className="  col-span-1 lg:col-span-2 mx-auto">
                    <div className="  gap-2">
                        {
                            <ImageCard images={bag?.images} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
                        }
                    </div>
                </div>


                <div className="my-8 mx-2">
                    <h1 className="text-4xl font-bold">* {bag?.name}</h1>
                    <p className="text-red-500 mt-5 font-semibold text-xl"> মূল্য  <span className="text-red-600 font-bold text-4xl">{(bag?.price - (bag?.price * 0.10)).toFixed()}</span> tk</p>
                    {
                        detailsArray?.map((detail: string, index: number) =>
                            <p key={index} className="mt-2 text-justify text-[14px]">
                                ✅ {detail}।
                            </p>)
                    }
                    <p className="text-xl font-medium mt-3 mb-10">
                        * Size: {bag?.size}
                    </p>

                    <NavLink to={`/checkout/${id}`} className="mb-[-50px]">
                        <button className="btn bg-black hover:bg-white hover:text-black hover:rounded text-white rounded-none w-full">অর্ডার করুন</button>
                    </NavLink>
                </div>

                <div className="mx-2">
                    <h1 className="text-xl font-bold text-center">Related products</h1>.......
                    {
                        relatedLoading ? <Loading /> : (
                            <div className="grid grid-cols-1 gap-2">
                                {
                                    relatedBags?.map((bag: any) => (
                                        <NavLink
                                            to={`/bag/${bag._id}`}
                                            key={bag._id}
                                            className="grid grid-cols-4 justify-between items-center bg-white shadow-xl hover:rounded-lg hover:shadow-2xl p-4 hover:border-2 hover:border-primary"
                                            onClick={() => setSelectedImage(bag?.image)}
                                        >
                                            <div className="col-span-1">
                                                <img src={bag?.images[0]}
                                                    className=" h-20 w-16 mx-auto bg-gray-500" alt="" />
                                            </div>
                                            <div className="col-span-3 text-start">
                                                <h2 className="text-md font-semibold  mb-1 w-full">{bag?.name} </h2>
                                                <div className="flex justify-between">

                                                    <p className="">{bag?.size}</p>
                                                    <p className="font-semibold text-green-500">{(bag?.price - (bag?.price * 0.10)).toFixed()} tk</p>
                                                </div>
                                            </div>
                                        </NavLink>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default BagDetails;