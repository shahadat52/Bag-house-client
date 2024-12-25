/* eslint-disable @typescript-eslint/no-explicit-any */
const BagCard = ({ bag }: any) => {
    return (
        <div className="bg-white shadow-xl hover:rounded-lg hover:shadow-2xl p-4 hover:border-2 hover:border-primary ">

            <div className=" w-12 h-12 bg-[#dfc492] rounded-full hover:animate-bounce">
                <p className="text-center pt-2 items-center my-auto font-bold">sell!</p>
            </div>
            <div>
                <img src={bag?.img}
                    className="" alt="" />
            </div>
            <h2 className="text-2xl font-semibold">{bag?.name}</h2>
            <p className="text-xl font-medium">Price: {bag?.price}</p>
            <div>
                <h2 className='p-3 border-2 border-primary rounded-sm text-center uppercase hover:bg-primary hover:rounded-lg'>add to cart</h2>
            </div>

        </div>
    );
};

export default BagCard;