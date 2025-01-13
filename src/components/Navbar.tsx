import { NavLink } from "react-router";
import { FaShoppingCart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logOut } from "../redux/features/auth/authSlice";

const Navbar = () => {
    const dispatch = useAppDispatch()
    const { token, user } = useAppSelector((state) => state.auth)
    const navItems = [
        <li key="home" className="mr-8 text-lg">
            <NavLink to={`/`}>হোম</NavLink>
        </li>,
        <li key="bag" className="mr-8 text-lg">
            <NavLink to={`/bag`}>ব্যাগ</NavLink>
        </li>,
        <li key="fashion" className="mr-8 text-lg">
            <NavLink to={`/fashion`}>ফ্যাশন</NavLink>
        </li>,
        <li key="agro" className="mr-8 text-lg">
            <NavLink to={`/agro`}>এগ্রো</NavLink>
        </li>,
        <li key="food" className="mr-8 text-lg">
            <NavLink to={`/food`}>ফুড</NavLink>
        </li>,
        <li key="about" className="mr-8 text-lg">
            <NavLink to={`/about`}>আমাদের সম্পর্কে</NavLink>
        </li>,
        <li key="review" className="mr-8 text-lg">
            <NavLink to={`/about`}>রিভিউ</NavLink>
        </li>,
    ];

    const handleLogOut = () => {
        dispatch(logOut())
    }
    return (
        <div className="">
            <div className="navbar bg-gray-300">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navItems}
                        </ul>
                    </div>
                    <a className="flex  items-center text-lg text-">
                        <img src="/vinnotabd.png" className='w-12 h-12 rounded-xl mx-1 ' alt="Logo" />
                        <span className=" font-semibold"> Vinnotabd </span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="mx-5 w-full menu menu-horizontal px-1 font-semibold ">
                        {navItems}  {/*  Navbar items */}
                    </ul>
                </div>
                <div className="navbar-end">
                    <span className="mr-8"><NavLink to={`/cart`} className="text-4xl"><FaShoppingCart /></NavLink></span>

                    {
                        token && user ? <button className="btn" onClick={handleLogOut}>Logout</button> : <NavLink to={`/login`} className="btn">Login</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;