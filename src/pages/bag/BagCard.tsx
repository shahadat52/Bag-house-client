/* eslint-disable @typescript-eslint/no-explicit-any */
const BagCard = ({ bag }: any) => {
    return (
        <div className="shadow-xl hover:shadow-2xl p-4">

            <div className="w-10 h-10 bg-blue-500 rounded-full hover:animate-spin">

            </div>
            <div>
                <img src={bag?.img} alt="" />
            </div>
            <h2 className="text-2xl font-semibold">{bag?.name}</h2>
            <p className="text-xl font-medium">Price: {bag?.price}</p>
            <div>
                <h2 className='p-3 border-2 text-center uppercase'>add to cart</h2>
            </div>

        </div>
    );
};

export default BagCard;