/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from "react-router";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logOut } from "../redux/features/auth/authSlice";
import { IoMdMenu } from "react-icons/io";
import { FaCartArrowDown, FaRegUser } from "react-icons/fa";
import { useLocation } from "react-router";

const Navbar = () => {
    const location = useLocation();
    console.log("location", location.pathname.startsWith('/dashboard'));
    const dispatch = useAppDispatch()
    const sta = useAppSelector((state: any) => state);
    console.log("state", sta);
    const { token, user } = useAppSelector((state: any) => state?.auth?.auth);
    const cartItems = useAppSelector((state: any) => state?.auth?.cart);
    console.log("cartItems", cartItems);
    const navItems = [
        <li key="home" className="mr-8 font-bold ">
            <NavLink to={`/`}>HOME</NavLink>
        </li>,
        <li key="bag" className="mr-8 font-bold">
            <NavLink to={`/bag`}>BAG</NavLink>
        </li>,
        <li key="food" className="mr-8 font-bold">
            <NavLink to={`/food`}>FOOD</NavLink>
        </li>,
        <li key="fashion" className="mr-8 font-bold">
            <NavLink to={`/fashion`}>FASHION</NavLink>
        </li>,
        <li key="agro" className="mr-8 font-bold">
            <NavLink to={`/agro`}>AGRO</NavLink>
        </li>,

        <li key="review" className="mr-8 font-bold">
            <NavLink to={`/about`}>REVIEW</NavLink>
        </li>,

    ];
    const handleLogOut = () => {
        dispatch(logOut())
    }
    return (
        <div className="">
            <div className="navbar bg-primary text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <IoMdMenu className="text-4xl" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-700 rounded-box z-[1] mt-1 w-52 p-2 shadow">
                            {navItems}
                            {
                                token && (user?.role === 'admin' || user?.role === 'superAdmin') &&
                                <li key="Dashboard" className="mr-8 font-bold ">
                                    <NavLink to={`/dashboard`}>DASHBOARD</NavLink>
                                </li>
                            }
                        </ul>
                    </div>
                    <a className="hidden md:flex lg:flex  items-center text-lg text-">
                        <img src="/vinnotabd.png" className='w-12 h-12 rounded-xl mx-1 ' alt="Logo" />
                        <span className=" font-semibold"> Vinnotabd </span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="mx-5 w-full menu menu-horizontal px-1 font-semibold ">
                        {navItems}
                        {
                            token && (user?.role === 'admin' || user?.role === 'superAdmin') &&
                            <li key="Dashboard" className="mr-8 font-bold ">
                                <NavLink to={`/dashboard`}>DASHBOARD</NavLink>
                            </li>

                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex justify-center items-center mt-auto">
                        <NavLink to={`/cart`} className="text-4xl">
                            <p>
                                <FaCartArrowDown />
                            </p>
                        </NavLink>
                        <p className="my-auto px-3 mt-[-15px]  text-xl  rounded-[7999px]  bg-red-600 text-white">
                            {cartItems?.items?.length}
                        </p>

                    </div>
                    <div className="dropdown dropdown-end ">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-3xl">
                            <FaRegUser />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40">
                            {token && user ? (
                                <li>
                                    <button onClick={handleLogOut}>Logout</button>
                                </li>
                            ) : (
                                <li>
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                            )}
                        </ul>
                    </div>

                    {location.pathname.startsWith("/dashboard") && (
                        <label htmlFor="dashboard-drawer" className="text-4xl drawer-button lg:hidden">
                            <IoMdMenu />
                        </label>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Navbar;