import { useParams } from "react-router";
import { useUserOrdersQuery } from "../../redux/features/order/orderApi";
import { TOrder } from "../../interface/order";
import Loading from "../../components/Loading";
import { useRef } from "react";
import CashMemo from "../../components/CashMemo";

const UserOrdersPage = () => {

  const contentRef = useRef<HTMLDivElement>(null);
  const { id } = useParams();
  const { data, isLoading } = useUserOrdersQuery(id)
  const orders = data?.data
  if (isLoading) {
    return <Loading />
  }
  return (

    <div ref={contentRef} className=""  >
      {/* <h1 className="uppercase text-xl font-semibold text-center  mb-10">{orders[0].customerName} placed  <span className="text-green-500 text-4xl mx-2"> {orders?.length}</span> orders</h1> <hr /> <hr />
             */}


      {
        orders?.map((order: TOrder) => (<CashMemo order={order} />))
      }



      {/* <div className="grid grid-cols-3">
                <p></p>
                <p className="text-sm text-center">বিসমিল্লাহির রহমানির রহিম</p>
                <div className="flex flex-col justify-end ">
                    <p className="text-sm text-end">মোবাইলঃ 01817649356  </p>
                    <p className="text-sm text-end">01866168264</p>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <img className="w-40 h-40 " src="/public/bag house logo 2.png" alt="" /> <p className=" text-4xl text-center uppercase font-bold"> ব্যাগ হাউজ ডট কম </p>
            </div>
            <h1 className="text-[12px] text-center uppercase font-bold mt-[-40px]">আমাদের এখানে  পাট এবং প্লাস্টিকের তৈরি বাহারী ডিজাইনের ব্যাগ পাইকারী ও খুচরা বিক্রি করা হয় </h1>
            <p className="text-center uppercase">রোড ২৩, সেক্টর ১৪, উত্তরা, ঢাকা-১২৩০।</p>
            <div className="grid grid-cols-1 gap-1 mt-5">

                <p className="text-start uppercase ">ক্রেতার নামঃ </p>
                <p className="text-start uppercase">তারিখঃ  </p>
                <p className=" text-start  mr-[280px]  uppercase">ক্রেতার মোবাইলঃ  </p>
                <p className="text-start mr-[280px]  uppercase">ক্রেতার ঠিকানাঃ  </p>

                <div className="flex flex-col justify-end">

                </div>
            </div>


            <div className="overflow-x-auto">
                <table className="table table-md">
                    <thead>
                        <tr className="bg-gray-200 uppercase text-sm leading-normal">
                            <th>No</th>
                            <th>Product Name</th>
                            <th>District & Sub-Dis</th>
                            <th>Address</th>
                            <th>phone</th>
                            <th>quantity</th>
                            <th>price</th>
                            <th className="no-print">Action</th>

                        </tr>
                    </thead>
                    <tbody >
                        {
                            orders?.map((order: TOrder, index: number) => (<UserOrdersCard key={order._id} index={index} order={order} reactToPrintFn={reactToPrintFn} />))
                        }

                    </tbody>

                </table>
            </div> */}
    </div>
  );
};

export default UserOrdersPage;