import { NavLink } from "react-router";

const ComingSoon = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-purple-600">
            <div className="text-center text-white px-6 md:px-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Coming Soon</h1>
                <p className="text-lg md:text-xl mb-8">
                    Our website is under construction. We’re working hard to give you the best experience!
                </p>
                <div className="flex items-center justify-center space-x-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 rounded-lg text-gray-800 focus:outline-none w-64"
                    />
                    <button className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-purple-200 transition duration-300">
                        Notify Me
                    </button>
                    <NavLink to='/' className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-purple-200 transition duration-300">
                        Go to Home
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;