/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useParams } from "react-router";
import { useUserOrdersQuery } from "../../redux/features/order/orderApi";
import Loading from "../../components/Loading";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

interface OrderItem {
    productId: string;
    name: string;
    quantity: number;
    price: number;
}

interface GuestInfo {
    name: string;
    email: string;
}

interface ShippingAddress {
    address: string;
    phone: string;
}

interface OrderData {
    invoice: string;
    totalAmount: number;
    guestInfo: GuestInfo;
    shippingAddress: ShippingAddress;
    items: OrderItem[];
}

export default function BillPage() {
    const contentRef = useRef<HTMLDivElement>(null);
    const reactToPrintFn = useReactToPrint({ contentRef });

    const { id } = useParams();
    const { data, isLoading } = useUserOrdersQuery(id);

    const products: OrderData | undefined = data?.data;

    if (isLoading) {
        return <Loading />;
    }

    if (!products || !products.items || products.items.length === 0) {
        return (
            <div className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
                <p className="text-xl text-gray-700">Order data not found.</p>
            </div>
        );
    }

    const { items, totalAmount, guestInfo, shippingAddress } = products;

    const subTotal = items.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0
    );
    const shippingCharge = totalAmount - subTotal;

    const invoiceCompanyInfo = {
        date: new Date().toLocaleDateString(),
        from: {
            name: "Bag house",
            address: "Uttara, Dhaka-1230",
            phone: "+8801817-649356",
            email: "vinnotabdInfo@gmail.com",
        }
    };

    // 🟢 ইনভয়েস কার্ড আলাদা কম্পোনেন্ট
    const InvoiceCard = () => (
        <div className="bg-white rounded-2xl shadow p-6  print:w-[48%]">
            <section>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Invoice:- {products.invoice}</h2>
                    <div className="text-sm text-gray-600">
                        Date: {invoiceCompanyInfo.date}
                    </div>
                </div>
                <header className="flex  flex-col md:flex-row md:items-center md:justify-between mb-2 ">
                    <div className="text-left ">
                        <div className="text-2xl font-bold ">Bag House</div>
                        <div className="text-sm text-gray-600 ">
                            {invoiceCompanyInfo.from.address}
                        </div>
                        <div className="text-sm text-gray-600">
                            {invoiceCompanyInfo.from.email}
                        </div>
                        <div className="text-sm text-gray-600">
                            {invoiceCompanyInfo.from.phone}
                        </div>
                    </div>

                    <section className="grid grid-cols-1 md:grid-cols-1 gap-6 ">
                        <div className="text-right md:text-right">
                            <h3 className="text-sm font-medium text-gray-500">Bill To</h3>
                            <div className="text-base font-semibold">{guestInfo.name}</div>
                            <div className="text-sm text-gray-600">
                                {shippingAddress.address}
                            </div>
                            <div className="text-sm text-gray-600">{guestInfo.email}</div>
                            <div className="text-sm text-gray-600">{shippingAddress.phone}</div>
                        </div>
                    </section>

                </header>

            </section>


            {/* products table */}
            <div className="overflow-x-auto">
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="text-left p-2 text-sm text-gray-600">Item</th>
                            <th className="text-right p-2 text-sm text-gray-600">Qty</th>
                            <th className="text-right p-2 text-sm text-gray-600">
                                Unit Price
                            </th>
                            <th className="text-right p-3 text-sm text-gray-600">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr
                                key={item.productId}
                                className="border-b last:border-b-0"
                            >
                                <td className="p-3 align-top">{item.name}</td>
                                <td className="p-3 align-top text-right">{item.quantity}</td>
                                <td className="p-3 align-top text-right">{item.price}</td>
                                <td className="p-3 align-top text-right font-medium">
                                    {item.quantity * item.price}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <hr />
            {/* Totals */}
            <div className=" flex flex-col md:flex-row md:justify-end gap-4">
                <div className="md:w-1/3 min-w-[200px]">
                    <div className="flex justify-between  border-b mt-3">
                        <span className="text-sm text-gray-600">Subtotal</span>
                        <span className="font-medium">{subTotal}/-</span>
                    </div>
                    <div className="flex justify-between  border-b">
                        <span className="text-sm text-gray-600">Delivery Charge</span>
                        <span className="font-medium">{shippingCharge}/-</span>
                    </div>
                    <div className="flex justify-between  text-lg font-semibold ">
                        <span>Total</span>
                        <span>{totalAmount}/-</span>
                    </div>
                </div>
            </div>

            {/* Notes & Signature */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <p className="text-[11px] text-gray-600">"Thank you for doing business with Bag house<br /> We value your trust"</p>

                </div>

                <div className="text-right md:text-right">
                    <div className="text-sm text-gray-600">Authorized Signature</div>
                    <div className="mt-9 inline-block border-t w-32" />
                </div>
            </div>
            <div>

                <p className="text-xs text-gray-500 text-center mt-2 ">
                    <hr />
                    Generated by VinnotaBD IT • This is a computer generated invoice.
                </p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Controls */}
                <div className="flex items-center justify-between mb-4 print:hidden">
                    <h1 className="text-2xl font-semibold">Invoice / Bill</h1>
                    <div className="flex gap-2">
                        <button
                            onClick={reactToPrintFn}
                            className="px-4 py-2 rounded-md border shadow-sm hover:shadow focus:outline-none bg-white"
                        >
                            Print
                        </button>
                        <button
                            onClick={() =>
                                navigator.clipboard &&
                                navigator.clipboard.writeText(window.location.href)
                            }
                            className="px-4 py-2 rounded-md bg-white border shadow-sm hover:bg-gray-50 focus:outline-none"
                            title="Copy page link"
                        >
                            Copy Link
                        </button>
                    </div>
                </div>

                {/* 🟢 2 কপি ইনভয়েস একসাথে */}
                <div
                    ref={contentRef}

                >
                    <div className="flex justify-between gap-4 print:flex-row flex-col">
                        <InvoiceCard />
                        <InvoiceCard />

                    </div>
                </div>


            </div>
        </div>
    );
}
