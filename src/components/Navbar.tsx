import { NavLink } from "react-router";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
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
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="flex  items-center text-lg text-">
                        <img src="/logo.png" className='w-12 h-12 rounded-xl ' alt="Logo" />
                        <span className="uppercase font-semibold"> Vinnota </span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li>
                            <NavLink to={`/`}>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/bag`}>BAG</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/fashion`}>FASHION</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/agro`}>AGRO</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/food`}>FOOD</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/about`}>ABOUT</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <span className="mr-8"><NavLink to={`/cart`} className="text-4xl"><FaShoppingCart /></NavLink></span>
                    <NavLink to={`/login`} className="btn">Login</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;