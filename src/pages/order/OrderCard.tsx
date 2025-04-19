/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from "react-router";
import { TOrder } from "../../interface/order";
import { TProduct } from "../../interface/products";

type OrderCardProps = {
    order: TOrder
}



const OrderCard = ({ order, index }: OrderCardProps & { index: number }) => {
    return (

        <tr className="border-2 p-5 text-justify">
            <th>{index + 1}</th>
            <th><NavLink to={`${order.phone}`} className="uppercase">{order.customerName}</NavLink></th>
            <td> {order?.shippingAddress?.district}, {order?.shippingAddress?.subDistrict}</td>
            <th>{order?.shippingAddress?.address}</th>
            <td> {order.phone}</td>
            <td> {order.orderProducts.map((product: TProduct) => product.name)}</td>
            <td> <img src={order.image} className="h-12 w-10" alt="" /></td>
            <td> {order.quantity}</td>
            <td> {order.totalAmount}</td>
            <td> {order.status}</td>
        </tr>



    );
};

export default OrderCard;