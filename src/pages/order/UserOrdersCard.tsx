import { TOrder } from "../../interface/order";
import { TProduct } from "../../interface/products";

type OrderCardProps = {
    order: TOrder,
    reactToPrintFn: () => void
}

const UserOrdersCard = ({ order, index, reactToPrintFn }: OrderCardProps & { index: number }) => {
    return (
        <tr className="border-2 p-5 text-justify">
            <th>{index + 1}</th>
            <td> {order.orderProducts.map((product: TProduct) => product.name)}</td>
            <td> {order?.shippingAddress?.district}, {order?.shippingAddress?.subDistrict}</td>
            <th>{order?.shippingAddress?.address}</th>
            <td> {order.phone}</td>
            <td> {order.quantity}</td>
            <td> {order.totalAmount}</td>
            <td className="no-print"> <button onClick={() => reactToPrintFn()} className="btn btn-primary">Invoice</button> <button className="btn btn-primary">Order Data</button></td>
        </tr>
    );
};

export default UserOrdersCard;