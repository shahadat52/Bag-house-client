import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Carousel = () => {
    const images = [
        "https://i.ibb.co.com/twp7kM9V/8.jpg",
        "https://i.ibb.co.com/sJ3fqCYy/1.jpg",
        "https://i.ibb.co.com/dJtdsW0S/2.jpg",
        "https://i.ibb.co.com/1YzLkH8B/3.jpg",
        "https://i.ibb.co.com/gbNp889S/4.jpg",
        "https://i.ibb.co.com/5hKq2WSq/5.jpg",
        "https://i.ibb.co.com/1JsVX9VZ/6.jpg",
        "https://i.ibb.co.com/609DLQxw/7.jpg",
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const totalTime = 20000; // 15s total cycle
        const intervalTime = totalTime / images.length;
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, intervalTime);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full overflow-hidden rounded-2xl mt-2">
            {/* Carousel Container */}
            <div className="relative w-full h-[220px] xs:h-[280px] sm:h-[380px] md:h-[500px] lg:h-[650px]">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] 
              ${index === current
                                ? "opacity-100 scale-100 translate-x-0 z-10"
                                : "opacity-0 scale-105 translate-x-5 z-0"
                            }`}
                    >
                        <img
                            src={img}
                            alt={`Slide ${index}`}
                            className="w-full h-auto object-cover object-center rounded-2xl"
                            loading="lazy"
                        />

                        {/* Overlay & Button */}
                        <div className="absolute inset-0 bg-black/10 flex flex-col items-center justify-center px-4 text-center">

                            <NavLink
                                to="/bag"
                                className="px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm bg-white/50 text-black font-semibold rounded-full shadow-md 
                           hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300"
                            >
                                Shop Now
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dots Navigation */}
            <div className=" absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 
              ${i === current
                                ? "bg-black scale-125 shadow-md"
                                : "bg-gray-400 opacity-70 hover:opacity-100"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
