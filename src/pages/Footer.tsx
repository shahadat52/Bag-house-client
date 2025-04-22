
const Footer = () => {
    return (
        <>
            <div className="mt-5 bg-gray-400 h-[0.8px]"> </div>
            <footer className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-5 bg-white  p-10 ">

                <aside className="px-3">

                    <img
                        src="/logo2.png"
                        className="w-20 h-20 mb-[-10px] "
                        alt="" />
                    <p className="text-xl font-medium max-w-[1000%] text-justify">
                        Vinnotabd
                        <br />
                        <span className="text-[15px]">
                            ভিন্নতা বিডি—আপনার আস্থার নাম। আমরা মানসম্মত, নিরাপদ, এবং আকর্ষণীয় পণ্যের বৈচিত্র্যময় পরিসর সরবরাহ করতে পেরে আনন্দিত। আমাদের পণ্যগুলো আপনার খাদ্য নিরাপত্তা এবং ফ্যাশনে নতুন মাত্রা যোগ করতে প্রতিশ্রুতিবদ্ধ। নতুনত্বের প্রতিশ্রুতি নিয়ে <a href="https://vinnotabd.com/">Vinnotabd.com</a>-এর মাধ্যমে আপনাকে সেরা সেবা দিতে আমরা আত্মবিশ্বাসী।
                        </span>
                    </p>
                </aside>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <div>
                            <h6 className="text-[15px] font-semibold uppercase mb-8 mt-2">Company</h6>
                            <p className="mb-3">আমাদের সম্পর্কে</p>
                            <p className="mb-3">রিটার্ন পলিসি</p>
                            <p className="mb-3">রিফান্ড পলিসি</p>
                        </div>
                        <div>
                            <h6 className="text-[15px] font-semibold uppercase mb-8 mt-2">Quick help</h6>
                            <p className="mb-3">01737029330</p>
                            <p className="mb-3">01866168264</p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="flex text-white justify-center w-full h-10 bg-primary mt-[-15px]"> <p className="text-center font-extralight text-xs my-auto lowercase">©️ VinnotaBD.Com 2024</p></div>
        </>
    );
};

export default Footer;