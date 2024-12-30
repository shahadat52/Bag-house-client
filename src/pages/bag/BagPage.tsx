/* eslint-disable @typescript-eslint/no-explicit-any */
import Skeleton from "../../components/Skeleton";
import { bags } from "../../data/bag";
import { useGetProductsQuery } from "../../redux/features/products/productsApi";
import BagCard from "./BagCard";

const Bag = () => {
    const { data: bags, isLoading } = useGetProductsQuery(undefined);
    console.log(bags)

    if (isLoading) {
        return <Skeleton />
    }
    return (
        <div>
            <h1 className="text-4xl font-bold text-center uppercase py-4 my-6">Our bag collections</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-5">
                {
                    bags?.data?.map((bag: any) => <BagCard key={bag._id} bag={bag} />)
                }
            </div>
        </div>
    );
};

export default Bag;