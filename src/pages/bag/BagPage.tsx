/* eslint-disable @typescript-eslint/no-explicit-any */
import Skeleton from "../../components/Skeleton";
import { useGetCategoryWiseProductsQuery } from "../../redux/features/products/productsApi";
import BagCard from "./BagCard";
import { Helmet } from "react-helmet";

const Bag = () => {
    const { data: bags, isLoading } = useGetCategoryWiseProductsQuery("bag");
    if (isLoading) {
        return <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {
                Array(5).fill(0).map((_, index) => <Skeleton key={index} />)
            }
        </div>
    }
    return (
        <div>
            <Helmet>
                <title>Bag collections</title>
            </Helmet>
            <h1 className="text-4xl font-bold text-center uppercase py-4 my-6">Our bag collections</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5  gap-5">
                {
                    bags?.data?.map((bag: any) => <BagCard key={bag._id} bag={bag} />)
                }
            </div>

        </div>
    );
};

export default Bag;