import { baseApi } from "../../api/baseApi";

const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: "/products",
                method: "GET",
            }),
        }),

        getSingleProduct: builder.query({
            query: (id: string) => ({
                url: `/products/${id}`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productsApi;