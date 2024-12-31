import { baseApi } from "../../api/baseApi";


const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        orderPlace: builder.mutation({
            query: (orderData) => ({
                url: "/order/order-place",
                method: "POST",
                body: orderData
            }),
        }),

        getAllOrders: builder.query({
            query: () => ({
                url: "/order",
                method: "GET"
            }),
        }),


    }),
});

export const { useOrderPlaceMutation, useGetAllOrdersQuery } = orderApi;