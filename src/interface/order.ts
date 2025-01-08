export type TOrder = {
    _id: string;
    orderId: string;
    customerName: string;
    quantity: number;
    orderProducts: [];
    image: string;
    orderDate: Date;
    status: 'pending' | 'completed' | 'cancelled';
    totalAmount: number;
    phone: string;
    shippingAddress?:
    {

        address: string;

    }

}