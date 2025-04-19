/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { TOrder } from "../interface/order";

// interface CashMemoProps {
//     customerName: string;
//     date: string;
//     orderProducts: any
//     items: { description: string; quantity: number; price: number }[];
//     totalAmount: number;
//     paymentMethod: string;
// }
// type CashMemoProps = TOrder & {
//   index: number;
//   order: any;
//   reactToPrintFn: () => void;
// };

const CashMemo = ({ order }: { order: TOrder }) => {
  //     const memoRef = useRef<HTMLDivElement>(null);
  const pageStyle = `
            @page {
              size: A4 landscape;
              margin: 10mm;
            }
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              -webkit-print-color-adjust: exact;
            }
            h1 {
              color: black;
            }
            table {
              width: 100%;
              border-collapse: collapse;
            }
            table, th, td {
              border: 1px solid black;
            }
            th, td {
              padding: 8px;
              text-align: left;
            }
            .print-only {
              display: none;
            }
            @media print {
            .print-only {
              display: block;
              }
            }
        
            /* Hide elements with the "no-print" class when printing */
            .no-print {
              display: none;
            }
          `;
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef, documentTitle: '', pageStyle });

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen">
      <button onClick={() => reactToPrintFn()} className="mb-6 px-8 py-3 bg-blue-800 text-white rounded-lg shadow-lg hover:bg-blue-900 transition-all">
        Print Cash Memo
      </button>

      <div ref={contentRef} className="w-full max-w-3xl p-10 bg-white shadow-xl rounded-xl border-t-8 border-blue-800">
        {/* Header Section */}
        <div className="flex justify-between items-center border-b-2 pb-6 mb-8">
          <div>
            <h1 className="text-4xl font-extrabold text-blue-900">Vinnotabd</h1>
            <p className="text-sm text-gray-600">Innovating Tomorrow</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Date: {order?.createdAt}</p>
            <p className=" uppercase  text-sm text-gray-500">Customer: <span className="font-semibold text-gray-800">{order?.customerName}</span></p>
          </div>
        </div>

        {/* Item Table */}
        <table className="w-full text-left border-collapse mb-8">
          <thead>
            <tr className="bg-blue-100 text-blue-900">
              <th className="p-3 font-semibold">Item Description</th>
              <th className="p-3 font-semibold text-center">Quantity</th>
              <th className="p-3 font-semibold text-right">Price (BDT)</th>
            </tr>
          </thead>
          <tbody>
            {order?.orderProducts?.map((product: { name: string; price: number }, index: any) => (
              <tr key={index} className="border-t border-gray-300">
                <td className="p-3 text-gray-800">{product?.name}</td>
                <td className="p-3 text-center text-gray-800">1</td>
                <td className="p-3 text-right text-gray-800">{product?.price?.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Summary Section */}
        <div className="flex justify-between items-center border-t-2 pt-6">
          <p className="text-gray-600">Payment Method: <span className="font-medium text-gray-800">Cash On Delivery(COD)</span></p>
          <p className="text-2xl font-bold text-blue-900">Total: {order?.totalAmount?.toFixed(2)}tk</p>
        </div>

        {/* Footer with QR Code Placeholder */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Thank you for choosing <span className="font-semibold text-blue-800">Vinnotabd</span>!</p>
          <p>For verification, scan the QR code below:</p>
          <div className="">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://vinnotabd.com" alt="QR Code" className="mx-auto rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashMemo;
