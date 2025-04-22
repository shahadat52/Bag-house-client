/* eslint-disable @typescript-eslint/no-unused-vars */
import { Helmet } from "react-helmet";
import Skeleton from "../../components/Skeleton";
import { useGetCategoryWiseProductsQuery } from "../../redux/features/products/productsApi";
import { TBag } from "../../interface/bag";
import BagCard from "../bag/BagCard";
import Carousel from "../../components/Carousel";

const FoodPage = () => {
    const { data: foods, isLoading } = useGetCategoryWiseProductsQuery("food");
    if (isLoading) {
        return <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {
                Array(5).fill(0).map((_, index) => <Skeleton key={index} />)
            }
        </div>
    }
    return (
        <>
            <Helmet>
                <title>Food collections</title>
            </Helmet>

            <div className=" my-2 flex items-center justify-center mx-5">
                <Carousel />
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  gap-5">
                {
                    foods?.data?.map((bag: TBag) => <BagCard key={bag._id} bag={bag} />)
                }
            </div>
        </>

    );
};

export default FoodPage;