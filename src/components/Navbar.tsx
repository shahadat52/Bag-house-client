/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from "react-router";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logOut } from "../redux/features/auth/authSlice";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1744966805264.json"

const Navbar = () => {
    const dispatch = useAppDispatch()
    const { token, user } = useAppSelector((state: any) => state?.auth?.auth);
    const cartItems = useAppSelector((state: any) => state?.auth?.cart);
    const navItems = [
        <li key="home" className="mr-8 text-lg">
            <NavLink to={`/`}>HOME</NavLink>
        </li>,
        <li key="bag" className="mr-8 text-lg">
            <NavLink to={`/bag`}>BAG</NavLink>
        </li>,
        <li key="food" className="mr-8 text-lg">
            <NavLink to={`/food`}>FOOD</NavLink>
        </li>,
        <li key="fashion" className="mr-8 text-lg">
            <NavLink to={`/fashion`}>FASHION</NavLink>
        </li>,
        <li key="agro" className="mr-8 text-lg">
            <NavLink to={`/agro`}>AGRO</NavLink>
        </li>,

        <li key="review" className="mr-8 text-lg">
            <NavLink to={`/about`}>REVIEW</NavLink>
        </li>,

    ];

    const handleLogOut = () => {
        dispatch(logOut())
    }
    return (
        <div className="">
            <div className="navbar bg-[#f3dc2a]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-1 w-52 p-2 shadow">
                            {navItems}
                            {
                                token && (user?.role === 'admin' || user?.role === 'superAdmin') &&
                                <li key="Dashboard" className="mr-8 text-lg">
                                    <NavLink to={`/dashboard`}>DASHBOARD</NavLink>
                                </li>
                            }
                        </ul>
                    </div>
                    <a className="flex  items-center text-lg text-">
                        <img src="/vinnotabd.png" className='w-12 h-12 rounded-xl mx-1 ' alt="Logo" />
                        <span className=" font-semibold"> Vinnotabd </span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="mx-5 w-full menu menu-horizontal px-1 font-semibold ">
                        {navItems}
                        {
                            token && (user?.role === 'admin' || user?.role === 'superAdmin') &&
                            <li key="Dashboard" className="mr-8 text-lg">
                                <NavLink to={`/dashboard`}>DASHBOARD</NavLink>
                            </li>

                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex mr-8 mt-auto">
                        <NavLink to={`/cart`} className="text-4xl">

                            <div className="w-10 h-10">
                                <Lottie animationData={animationData} loop={true} />
                            </div>

                        </NavLink>
                        <p className="my-auto px-3 py-[2px] text-xl mt-[-15px] ml-[-10px] rounded-full  bg-red-600 text-white">
                            {cartItems.items.length}
                        </p>

                    </div>

                    {
                        token && user ? <button className="btn" onClick={handleLogOut}>Logout</button> : <NavLink to={`/login`} className="btn">Login</NavLink>
                    }
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>

                </div>
            </div>
        </div>
    );
};

export default Navbar;