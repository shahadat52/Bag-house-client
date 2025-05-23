import { baseApi } from "../../api/baseApi";


const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        orderPlace: builder.mutation({
            query: (orderData) => ({
                url: "/order/order-place",
                method: "POST",
                body: orderData
            }),
            invalidatesTags: ['orders']
        }),

        getAllOrders: builder.query({
            query: () => ({
                url: "/order",
                method: "GET"
            }),
            providesTags: ['orders']
        }),

        userOrders: builder.query({
            query: (phone) => ({
                url: `/order/${phone}`,
                method: "GET"
            }),
            providesTags: ['orders']
        }),


    }),
});

export const { useOrderPlaceMutation, useGetAllOrdersQuery, useUserOrdersQuery } = orderApi;