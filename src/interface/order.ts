export type TOrder = {
    _id: string;
    orderId: string;
    customerName: string;
    quantity: number;
    orderProducts: [];
    orderDate: Date;
    status: 'pending' | 'completed' | 'cancelled';
    totalAmount: number;
    phone: string;
    shippingAddress?: object
}