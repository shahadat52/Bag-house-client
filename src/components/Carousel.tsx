import { useEffect, useState } from "react";


const Carousel = () => {
    const images = [
        'https://i.ibb.co.com/0RrDP8nx/Blue-Orange-Watercolor-Realistic-Product-Facebook-Ad-1100-x-550-px-1100-x-500-px.jpg',
        'https://i.ibb.co.com/G4Jw2zQ0/banner-10.jpg',

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
            <div className="sm:hidden hidden lg:block">
                <div
                    className=" flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Slide ${index}`}
                            className="w-full flex-shrink-0 ]"
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
    );
};

export default Carousel;