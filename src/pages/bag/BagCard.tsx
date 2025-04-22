import { FaStar } from "react-icons/fa6";
import { NavLink } from "react-router";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { IoEyeOutline } from "react-icons/io5";
import { MdAddShoppingCart } from "react-icons/md";

/* eslint-disable @typescript-eslint/no-explicit-any */
const BagCard = ({ bag }: any) => {
    const bagId = bag?._id;
    const bagName = bag?.name.slice(0, 20) + "...";
    const cartItems = useAppSelector(state => (state.auth as any)?.cart?.items);
    const isAlreadyInCart = cartItems?.some((item: any) => item.productId === bagId);
    const dispatch = useAppDispatch()
    const handleAddToCart = () => {
        dispatch(addToCart({ productId: bagId, name: bagName, price: (bag?.price), quantity: 1, image: bag?.images[0] }))

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
                <FaStar />  <FaStar />   <FaStar />   <FaStar />
            </p>
            {/* <p className="text-lg font-medium text-center ">Available:{bag?.stock}</p> */}
            <p className="text-lg font-medium text-center ">Price: <span className="line-through text-red-400">{bag?.price} </span> <span className="text-green-600 mx-2">{(bag?.price - (bag?.price * 0.10)).toFixed()} tk</span></p>
            <p className="text-lg font-medium text-center "></p>
            <div className="mx-auto flex justify-around items-center mt-4">
                {
                    isAlreadyInCart ? (
                        <p className="text-green-600 font-semibold">✔ Already in Cart</p>
                    ) : (
                        <div onClick={handleAddToCart} className="">
                            {/* <Lottie
                                animationData={addToCartButton}
                                loop={true} /> */}
                            <p className="cursor-pointer text-green-600 font-semibold px-2 py-1 border-2 rounded-md border-green-700 "><span className="flex items-center gap-3"><span>Add to Cart</span> <span className="text-black"><MdAddShoppingCart /></span></span> </p>
                        </div>
                    )
                }
                <NavLink to={`/bag/${bagId}`}>
                    <h2
                        className='mx-auto  rounded-sm hover:bg-primary hover:rounded-lg hover:p-1'

                    >
                        <p className="text-2xl hover:text-white text-primary"><IoEyeOutline /></p>
                    </h2>
                </NavLink>
            </div>


        </div>
    );
};

export default BagCard;