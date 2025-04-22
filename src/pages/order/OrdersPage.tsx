import React, { useState } from "react";
import Loading from "../../components/Loading";
import { useGetAllOrdersQuery } from "../../redux/features/order/orderApi";

type TOrder = {
    _id: string;
    guestInfo: {
        name: string;
        email: string;
        phone: string;
    };
    items: {
        _id: string;
        productId: string;
        name: string;
        price: number;
        quantity: number;
    }[];
    totalAmount: number;
    status: "pending" | "confirmed" | "shipped" | "delivered" | "canceled";
    createdAt: string;
};

const OrdersPage: React.FC = () => {
    const { data, isLoading } = useGetAllOrdersQuery(undefined);
    const orders: TOrder[] = data?.data || [];
    const [expandedRows, setExpandedRows] = useState<string[]>([]);

    const toggleExpand = (orderId: string) => {
        setExpandedRows((prev) =>
            prev.includes(orderId) ? prev.filter((id) => id !== orderId) : [...prev, orderId]
        );
    };

    const getStatusBadge = (status: TOrder["status"]) => {
        const baseClass = "badge capitalize px-3 py-1 text-xs font-medium";
        switch (status) {
            case "pending":
                return <span className={`${baseClass} badge-warning`}>Pending</span>;
            case "confirmed":
                return <span className={`${baseClass} badge-info`}>Confirmed</span>;
            case "shipped":
                return <span className={`${baseClass} badge-primary`}>Shipped</span>;
            case "delivered":
                return <span className={`${baseClass} badge-success`}>Delivered</span>;
            case "canceled":
                return <span className={`${baseClass} badge-error`}>Canceled</span>;
            default:
                return <span className={baseClass}>Unknown</span>;
        }
    };

    if (isLoading) return <Loading />;

    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="bg-white dark:bg-base-100 shadow-xl rounded-2xl overflow-hidden border border-base-300">
                <div className="p-6 border-b border-base-300">
                    <h2 className="text-3xl font-bold text-center">🛒 Order Management</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full text-sm md:text-base">
                        <thead className="bg-base-200 text-base-content text-sm md:text-base font-semibold">
                            <tr>
                                <th>#</th>
                                <th>Customer</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th className="text-right">Total</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => {
                                const isExpanded = expandedRows.includes(order._id);
                                return (
                                    <React.Fragment key={order._id}>
                                        <tr className="hover">
                                            <td>{index + 1}</td>
                                            <td className="font-semibold">{order.guestInfo.name}</td>
                                            <td>{order.guestInfo.email}</td>
                                            <td>{order.guestInfo.phone}</td>
                                            <td className="font-bold text-right">${order.totalAmount.toFixed(2)}</td>
                                            <td>{getStatusBadge(order.status)}</td>
                                            <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                                            <td className="flex justify-center gap-2">
                                                <button
                                                    className="btn btn-sm btn-outline btn-info"
                                                    onClick={() => toggleExpand(order._id)}
                                                >
                                                    {isExpanded ? "Hide" : "View"}
                                                </button>
                                                <button className="btn btn-sm btn-outline btn-warning">Edit</button>
                                                <button className="btn btn-sm btn-outline btn-error">Delete</button>
                                            </td>
                                        </tr>

                                        {isExpanded && (
                                            <tr className="bg-base-100">
                                                <td colSpan={8}>
                                                    <div className="p-4 rounded-xl bg-base-200 mt-2">
                                                        <h4 className="text-lg font-semibold mb-3">🧾 Product Details</h4>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                            {order.items.map((item) => (
                                                                <div
                                                                    key={item._id}
                                                                    className="bg-white dark:bg-base-100 shadow border border-base-300 rounded-xl p-4"
                                                                >
                                                                    <h5 className="font-bold text-base mb-1">
                                                                        {item.name}
                                                                    </h5>
                                                                    <p className="text-sm">
                                                                        Price: <span className="font-medium">${item.price.toFixed(2)}</span>
                                                                    </p>
                                                                    <p className="text-sm">
                                                                        Quantity: <span className="font-medium">{item.quantity}</span>
                                                                    </p>
                                                                    <p className="text-sm">
                                                                        Subtotal:{" "}
                                                                        <span className="font-bold text-success">
                                                                            ${(item.price * item.quantity).toFixed(2)}
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {orders.length === 0 && (
                    <div className="text-center py-8 text-gray-500">No orders available</div>
                )}
            </div>
        </div>
    );
};

export default OrdersPage;
