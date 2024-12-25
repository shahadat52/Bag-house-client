import { bags } from "../../data/bag";
import BagCard from "./BagCard";

const Bag = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center uppercase py-4 my-6">Our bag collections</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-5">
                {
                    bags.map(bag => <BagCard key={bag.id} bag={bag} />)
                }
            </div>
        </div>
    );
};

export default Bag;