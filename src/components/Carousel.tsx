import { useEffect, useState } from "react";


const Carousel = () => {
    const images = [
        'https://i.ibb.co.com/7t1jP6wr/bg-banner.jpg',

    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 1500);

        return () => clearInterval(interval);
    }, [paused, currentIndex]);


    return (
        <div
            className="w-full mx-auto overflow-hidden  shadow-lg"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* sm:hidden hidden lg:block */}
            <div>
                <div className="">
                    <div
                        className=" flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Slide ${index}`}
                                className="lg:w-[75%]  sm:w-[90%] md:w-[80%] mx-auto py-2 h-auto max-h-[600px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] overflow-auto object-cover flex-shrink-0"

                            />
                        ))}
                    </div>

                    <div className="flex justify-center gap-2 mt-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 mb-2  ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
                                    }`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;