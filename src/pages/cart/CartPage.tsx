/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { clearCart, removeFromCart, updateQuantity } from "../../redux/features/cart/cartSlice";
import ConfirmationModalCart from "../../components/ConfirmationModalCart";
import AddressPage from "./AddressPage";
import ConfirmationMsgModal from "../../components/ConfirmationMsgModal";
import { useOrderPlaceMutation } from "../../redux/features/order/orderApi";

const CartPage = () => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector((state) => state.auth.cart.items);
    const address = useAppSelector((state) => state.auth.address);
    const [orderPlace] = useOrderPlaceMutation();
    const [loading, setLoading] = useState(false);

    const { isAdded, ...shippingAddress } = address;
    const [deliveryLocation, setDeliveryLocation] = useState<"inside" | "outside">("outside");
    const shippingFee = deliveryLocation === "inside" ? 60 : 110;

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const onlineFee = (0).toFixed(2);
    const discount = (0).toFixed(2);
    const payableTotal = (
        Number(total) + Number(onlineFee) + Number(shippingFee) - Number(discount)
    ).toFixed(0);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOrderConfirmationOpen, setIsOrderConfirmationOpen] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

    const handleDeleteClick = (id: string) => {
        setSelectedItemId(id);
        setIsModalOpen(true);
    };

    const confirmDelete = () => {
        if (selectedItemId) {
            dispatch(removeFromCart(selectedItemId));
        }
        closeModal();
    };

    const closeModal = () => {
        setIsOrderConfirmationOpen(false);
        setIsModalOpen(false);
        setSelectedItemId(null);
    };

    const handleOrderPlace = async () => {
        setLoading(true);
        const orderData = {
            user: null,
            guestInfo: {
                name: address?.name,
                phone: address?.phone,
                email: address?.email,
            },
            items: cartItems,
            shippingAddress,
            totalAmount: payableTotal,
        };

        const result = await orderPlace(orderData);
        setLoading(false);

        if (result?.data) {
            handleConfirmationMSG();
            dispatch(clearCart());
        }
        if (result.error) {
            alert("Order failed");
        }
    };

    const handleConfirmationMSG = () => {
        setIsOrderConfirmationOpen(true);
    };

    return (
        <div className="bg-gray-50 min-h-screen grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
            <div className="col-span-2 p-4 max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-4">Your Cart:- {"  "} {totalItems} items</h2>

                {cartItems.length === 0 ? (
                    <p className="text-center text-gray-500">Your cart is empty.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left border border-gray-200 rounded-md">
                            <thead className="bg-gray-100 text-gray-700">
                                <tr>
                                    <th className="p-3">Image</th>
                                    <th className="p-3">Item</th>
                                    <th className="p-3">Price</th>
                                    <th className="p-3">Quantity</th>
                                    <th className="p-3">Total</th>
                                    <th className="p-3 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item) => (
                                    <tr key={item.productId} className="border-t border-gray-200 hover:bg-gray-50">
                                        <td className="p-3">
                                            <img src={item.image} alt={item.name} className="w-14 h-14 rounded object-cover" />
                                        </td>
                                        <td className="p-3 font-medium">{item.name}</td>
                                        <td className="p-3">{item.price.toFixed(2)}</td>
                                        <td className="p-3">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    className="p-1 rounded bg-gray-200 hover:bg-gray-300"
                                                    onClick={() => dispatch(updateQuantity({ productId: item.productId, type: "dec" }))}
                                                >
                                                    <FaMinus size={12} />
                                                </button>
                                                <span className="min-w-[20px] text-center">{item.quantity}</span>
                                                <button
                                                    className="p-1 rounded bg-gray-200 hover:bg-gray-300"
                                                    onClick={() => dispatch(updateQuantity({ productId: item.productId, type: "inc" }))}
                                                >
                                                    <FaPlus size={12} />
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-3">{(item.price * item.quantity).toFixed(2)}</td>
                                        <td className="p-3 text-center">
                                            <button
                                                onClick={() => handleDeleteClick(item.productId)}
                                                className="text-red-500 hover:text-red-700"
                                                title="Remove"
                                            >
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="mt-6 text-right">
                            <p className="text-lg font-semibold">Total = {total} tk</p>
                        </div>
                    </div>
                )}

                <ConfirmationModalCart
                    isOpen={isModalOpen}
                    title="Confirm Deletion"
                    message="Are you sure you want to remove this item from your cart?"
                    confirmText="Yes, Delete"
                    cancelText="Cancel"
                    onConfirm={confirmDelete}
                    onCancel={closeModal}
                />

                <ConfirmationMsgModal
                    isOpen={isOrderConfirmationOpen}
                    title="অভিনন্দন!"
                    message="আপনার অর্ডারটি সফলভাবে সম্পন্ন হয়েছে।"
                    closeText="Continue Shopping"
                    onCancel={closeModal}
                />
            </div>

            <div className="bg-gray-100 col-span-1 p-4 rounded-md">
                <div>
                    <h2 className="text-2xl text-center font-bold mb-4">Shipping Address</h2>
                    <AddressPage />
                </div>

                <div className="mt-8">
                    <label className="block font-medium mb-2">Delivery Location</label>
                    <select
                        value={deliveryLocation}
                        onChange={(e) => setDeliveryLocation(e.target.value as "inside" | "outside")}
                        className="w-full border border-gray-300 p-2 rounded"
                    >
                        <option value="inside">ঢাকার ভিতরে - 60tk</option>
                        <option value="outside">ঢাকার বাহিরে - 110tk</option>
                    </select>
                </div>

                <div>
                    <h2 className="text-2xl text-center font-bold mb-4 mt-10">Checkout Summary</h2>
                    <div className="bg-white rounded-xl p-4">
                        <span className="flex justify-between"><p>Products Value</p> <p>{total}</p></span>
                        <hr className="my-2" />
                        <span className="flex justify-between"><p>Online fee</p> <p>{onlineFee}</p></span>
                        <hr className="my-2" />
                        <span className="flex justify-between"><p>Discount</p> <p>{discount}</p></span>
                        <hr className="my-2" />
                        <span className="flex justify-between"><p>Courier Charge</p> <p>{shippingFee}</p></span>
                        <hr className="my-2" />
                        <span className="flex justify-between"><p>Payable Total</p> <p>{payableTotal}</p></span>
                        <hr className="my-2" />
                    </div>
                </div>

                <div className="flex justify-center items-center mt-4">
                    <button
                        onClick={handleOrderPlace}
                        disabled={cartItems.length === 0 || loading}
                        className={`rounded-lg py-2 px-8 text-2xl text-center mb-4 mt-8 bg-primary text-white hover:bg-white hover:text-primary hover:border-primary hover:border-[1px] transition duration-1000 ease-in-out transform hover:scale-105 ${cartItems.length === 0 || loading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        {loading ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                                </svg>
                                Processing...
                            </span>
                        ) : (
                            `Confirm Order TK.${payableTotal}`
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
