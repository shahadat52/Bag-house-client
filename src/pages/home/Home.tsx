/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from "react-router";
import Carousel from "../../components/Carousel";
import Skeleton from "../../components/Skeleton";
import { useGetCategoryWiseProductsQuery } from "../../redux/features/products/productsApi";
import BagCard from "../bag/BagCard";
import JuteBagShowcase from "./JutBagShowcase";

const Home = () => {
    const { data: bags, isLoading } = useGetCategoryWiseProductsQuery("bag");
    if (isLoading) {
        return <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {
                Array(5).fill(0).map((_, index) => <Skeleton key={index} />)
            }
        </div>
    }
    return (
        <>
            <div className="w-full md-w-[600px}">
                <Carousel />
            </div>
            <JuteBagShowcase />
            <div>
                <h1 className="text-4xl font-bold text-center uppercase py-4 my-6">Our bag collections</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-5">
                    {
                        bags?.data.slice(0, 3)?.map((bag: any) => <BagCard key={bag._id} bag={bag} />)
                    }
                </div>
            </div>
            <div className="w-full flex" >
                <NavLink to="/bag" className="btn btn-primary mx-auto  mt-4 justify-center items-center text-white">see more</NavLink>
            </div>
        </>
    );
};

export default Home;