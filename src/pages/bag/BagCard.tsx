import { FaStar } from "react-icons/fa6";
import { NavLink } from "react-router";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { IoEyeOutline } from "react-icons/io5";

/* eslint-disable @typescript-eslint/no-explicit-any */
const BagCard = ({ bag }: any) => {
    const bagId = bag?._id;
    const bagName = bag?.name.slice(0, 20) + "...";
    const dispatch = useAppDispatch()
    const handleAddToCart = () => {
        dispatch(addToCart({ id: bagId, name: bagName, price: (bag?.price), quantity: 1 }))

    }

    return (
        <div className="bg-white shadow-xl hover:rounded-lg hover:shadow-2xl p-4 hover:border-2 hover:border-primary ">


            <div>
                <img src={bag?.images[0]}
                    className="w-36 mb-4 mx-auto" alt="" />
            </div>
            <h2 className="text-xl font-semibold text-center mb-1">{bagName}</h2>
            <p className="text-center">{bag?.size}</p>
            <p className="text-primary flex justify-center">
                <FaStar />    <FaStar />   <FaStar />   <FaStar />
            </p>
            <p className="text-lg font-medium text-center ">Price: <span className="line-through text-red-400">{bag?.price} </span> <span className="text-green-600 mx-2">{(bag?.price - (bag?.price * 0.10)).toFixed()} tk</span></p>
            <p className="text-lg font-medium text-center "></p>
            <div className="mx-auto flex justify-between items-center mt-4">
                <h2
                    className='mx-auto  p-3 border-2 border-primary rounded-sm text-center uppercase hover:bg-primary hover:rounded-lg'
                    onClick={handleAddToCart}
                >
                    Add to cart
                </h2>
                <NavLink to={`/bag/${bagId}`}>
                    <h2
                        className='mx-auto  p-3 border-2 border-primary rounded-sm hover:bg-primary hover:rounded-lg'

                    >
                        <p className="text-2xl"><IoEyeOutline /></p>
                    </h2>
                </NavLink>
            </div>


        </div>
    );
};

export default BagCard;