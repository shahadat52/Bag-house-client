
const BagDetails = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mt-10 mb-6">প্লাস্টিক বেতের ঝুড়ি ব্যাগ</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="col-span-1 mx-auto">
                    <img
                        src="/mony.png"
                        className="w-[350px] "
                        alt=""
                    />
                </div>
                <div className="my-8">
                    <h1 className="text-4xl font-bold">* প্লাস্টিক বেতের ঝুড়ি ব্যাগ</h1>
                    <p className="mt-5 font-semibold text-xl">* ৬৫০ টাকা</p>
                    <p className="mt-2">
                        ✅ আমাদের ঝুড়িব্যাগ গুলো প্লাস্টিকের বেতের তৈরি তাই টেকসই ও মজবুত হয়।<br />
                        ✅ যেকোন ধরনের হালকা ও ভারি মালামাল ক্যারি করতে পারবেন। <br />
                        ✅ ওয়াশেবল ও কালার গ্যারান্টি। <br />
                        ✅ আমাদের আছে কালারের ভিন্নতা। <br />
                        ✅ আপনার পছন্দের রুচিশীল মানসম্মত পন্যের নিশ্চয়তা।

                    </p>
                    <p className="text-xl font-medium mt-3">
                        * Dimensions: 16 cm * 16 cm
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BagDetails;