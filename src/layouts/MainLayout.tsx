import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer";
import { FaWhatsappSquare } from "react-icons/fa";

const MainLayout = () => {
    const phoneNumber = "01737029330"
    const message = "Hello, I would like to our products."

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    return (
        <div className="max-w-[1450px] mx-auto ">
            <Navbar />
            <Outlet />
            <div >
                <a
                    href={whatsappLink}
                    target="_blank"

                >
                    <p className="text-green-700 fixed bottom-4 right-4 text-[60px] "><FaWhatsappSquare /></p>
                </a>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;