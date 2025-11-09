
import banner1 from "../../assets/bagShowCase.jpg";

const JuteBagShowcase = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">

        {/* Main Section Header */}
        {/* Adjusted header font size for better mobile scaling */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12">
          🛍️ Custom-Made Jute Bags: Where Style Meets Sustainability
        </h2>

        {/* Content Grid - Stacks on mobile, two columns on desktop */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image Column: Re-orders on desktop */}
          <div className="order-1 md:order-1 flex justify-center">
            {/* Image Container: Uses aspect-ratio or min-height for structure on smaller screens if needed, but 'h-auto' allows the image to define the size naturally. */}
            <div className=" bg-amber-100 border-2  mx-auto w-[95%] border-green-500 rounded-xl shadow-xl  md:w-full  overflow-hidden">
              {/* Image itself is made fully responsive */}
              <img
                src={banner1}
                alt="Jute Bag"
                className="w-full mx-auto h-auto object-cover"
              />
            </div>
          </div>

          {/* Text Description Column: Re-orders on desktop */}
          <div className="order-2 md:order-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-gray-700 pb-2">
              🌾 আমাদের কাস্টম জুট ব্যাগ সম্পর্কে
            </h3>

            <p className="text-lg text-gray-600 mb-6">
              জুট বা পাট, যা পরিচিত **“সোনালী আঁশ”** নামে, বিশ্বের অন্যতম পরিবেশবান্ধব ও টেকসই প্রাকৃতিক উপাদান। একটি কাস্টম পাটের ব্যাগ বেছে নেওয়ার মাধ্যমে আপনি শুধু একটি বহুমুখী ও টেকসই পণ্যই পাচ্ছেন না, বরং পরিবেশের প্রতি **দায়িত্বশীল এক সিদ্ধান্তও** নিচ্ছেন।
            </p>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-amber-600 font-bold text-xl mr-3">🌱</span>
                <div>
                  <strong className="block">🌱 পরিবেশবান্ধব ও টেকসই:</strong>
                  ১০০% বায়োডিগ্রেডেবল (প্রাকৃতিকভাবে নষ্টযোগ্য) এবং পরিবেশে কম প্রভাব ফেলে। পাট চাষে খুবই অল্প পরিমাণ পানি প্রয়োজন হয়।
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold text-xl mr-3">💪</span>
                <div>
                  <strong className="block">💪 দৃঢ় ও টেকসই:</strong>
                  উচ্চ মানের শক্তিশালী নকশায় তৈরি হওয়ায় আমাদের ব্যাগগুলো সহজেই ভারী ওজন বহন করতে পারে এবং **দীর্ঘদিন ব্যবহারযোগ্য**।
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 font-bold text-xl mr-3">🎨</span>
                <div>
                  <strong className="block">🎨 সম্পূর্ণ কাস্টমাইজযোগ্য:</strong>
                  আপনার ব্র্যান্ড বা অনুষ্ঠানের উপযোগী করে ব্যাগের **আকার, নকশা, হাতল এবং প্রিন্টিং স্টাইল** নিজের মতো করে বেছে নিতে পারেন।
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section >
  );
};

export default JuteBagShowcase;