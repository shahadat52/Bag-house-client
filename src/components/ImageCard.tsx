import React, { useEffect, useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import { useAppDispatch } from '../redux/hooks';
import { selectedProduct } from '../redux/features/products/productsSlice';

interface ImageCardProps {
    images: string[];
}

const ImageCard: React.FC<ImageCardProps> = ({ images }) => {
    const dispatch = useAppDispatch();
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const leftImages = images.slice(0, 5);
    const rightImages = images.slice(5);

    useEffect(() => {
        dispatch(selectedProduct(selectedImage));
    }, [selectedImage, dispatch]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
                {/* Left Side Thumbnails */}
                <div className="flex flex-row md:flex-col gap-2">
                    {leftImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Left Thumbnail ${index + 1}`}
                            className={`w-16 h-16 sm:w-20 sm:h-20 object-cover cursor-pointer rounded-md border ${selectedImage === image ? "border-blue-500" : "border-gray-300"
                                }`}
                            onClick={() => setSelectedImage(image)}
                        />
                    ))}
                </div>

                {/* Main Image */}
                <div className="flex justify-center items-center">
                    <InnerImageZoom src={selectedImage} zoomSrc={selectedImage} className="w-[80%] rounded-md mx-auto" /> :
                </div>

                {/* Right Side Thumbnails */}
                <div className="flex flex-row md:flex-col gap-2">
                    {rightImages.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Right Thumbnail ${index + 1}`}
                            className={`w-16 h-16 sm:w-20 sm:h-20 object-cover cursor-pointer rounded-md border ${selectedImage === image ? "border-blue-500" : "border-gray-300"
                                }`}
                            onClick={() => setSelectedImage(image)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCard;