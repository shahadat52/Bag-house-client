import { TOrder } from "../../interface/order";
import { TProduct } from "../../interface/products";

type OrderCardProps = {
    order: TOrder;
}

const OrderCard = ({ order, index }: OrderCardProps & { index: number }) => {
    return (

        <tr className="border-2 p-5 text-justify">
            <th>{index + 1}</th>
            <th>{order.customerName}</th>
            <td> {order.phone}</td>
            <td> {order.orderProducts.map((product: TProduct) => product.name)}</td>
            <td> {order.quantity}</td>
            <td> {order.totalAmount}</td>
        </tr>



    );
};

export default OrderCard;