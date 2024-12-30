import { FaStar } from "react-icons/fa6";
import { NavLink } from "react-router";

/* eslint-disable @typescript-eslint/no-explicit-any */
const BagCard = ({ bag }: any) => {
    const bagId = bag?._id

    return (
        <NavLink to={`/bag/${bagId}`} className="bg-white shadow-xl hover:rounded-lg hover:shadow-2xl p-4 hover:border-2 hover:border-primary ">

            <div className=" w-12 h-12 bg-[#dfc492] rounded-full hover:animate-bounce">
                <p className="text-center pt-2 items-center my-auto font-bold">sell!</p>
            </div>
            <div>
                <img src={bag?.img}
                    className=" h-72 mx-auto" alt="" />
            </div>
            <h2 className="text-2xl font-semibold text-center mb-4">{bag?.name}</h2>
            <p className="text-primary flex justify-center mb-2">
                <FaStar />    <FaStar />   <FaStar />   <FaStar />
            </p>
            <p className="text-lg font-medium text-center ">Price: {bag?.price}</p>
            <div>
                <h2 className='mx-auto w-1/2 p-3 border-2 border-primary rounded-sm text-center uppercase hover:bg-primary hover:rounded-lg'>Buy Now</h2>
            </div>

        </NavLink>
    );
};

export default BagCard;