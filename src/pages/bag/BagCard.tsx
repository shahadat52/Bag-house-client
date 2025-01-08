import { FaStar } from "react-icons/fa6";
import { NavLink } from "react-router";

/* eslint-disable @typescript-eslint/no-explicit-any */
const BagCard = ({ bag }: any) => {
    const bagId = bag?._id

    return (
        <NavLink to={`/bag/${bagId}`} className="bg-white shadow-xl hover:rounded-lg hover:shadow-2xl p-4 hover:border-2 hover:border-primary ">


            <div>
                <img src={bag?.images[0]}
                    className="w-36 mb-4 mx-auto" alt="" />
            </div>
            <h2 className="text-2xl font-semibold text-center mb-1">{bag?.name}</h2>
            <p className="text-center">{bag?.size}</p>
            <p className="text-primary flex justify-center">
                <FaStar />    <FaStar />   <FaStar />   <FaStar />
            </p>
            <p className="text-lg font-medium text-center ">Price: <span className="line-through text-red-400">{bag?.price} </span> <span className="text-green-600 mx-2">{bag?.price - (bag?.price * 0.10)} tk</span></p>
            <p className="text-lg font-medium text-center "></p>
            <div>
                <h2 className='mx-auto w-1/2 p-3 border-2 border-primary rounded-sm text-center uppercase hover:bg-primary hover:rounded-lg'>Buy Now</h2>
            </div>

        </NavLink>
    );
};

export default BagCard;