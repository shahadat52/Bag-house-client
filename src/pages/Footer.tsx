
const Footer = () => {
    return (
        <footer className=" grid grid-cols-2 gap-5 bg-primary  p-10 mt-5">
            <aside className="px-3">

                <img
                    src="/logo.png"
                    className="w-20 h-20 mb-[-10px] "
                    alt="" />
                <p className="text-xl font-medium max-w-[1000%] text-justify">
                    VinnotaBD Group
                    <br />
                    <span className="text-[15px]">
                        ভিন্নতা বিডি, আমরা আপনার চাহিদার মানসম্পন্ন নিরাপদ,আকর্ষনীয় পণ্যগুলির একটি বৈচিত্র্যময় পরিসীমা সরবরাহ করতে পেরে গর্বিত, যা আপনার খাদ্যের নিরাপত্তা ও ফ্যাশনে, অবদান রাখে। নতুনত্বের ভিন্নতা Vinnotabd.com দিতে পারবো বলে বিশ্বাস করি।
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
                        <p className="mb-3">01812345678</p>
                        <p className="mb-3">01812345677</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;