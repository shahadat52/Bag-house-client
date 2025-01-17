import { TProduct } from "../../../interface/products";
import { baseApi } from "../../api/baseApi";

const productsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        createProduct: builder.mutation({
            query: (productData: TProduct) => ({
                url: "/products/create-products",
                method: "POST",
                body: productData
            }),
            invalidatesTags: ['products']
        }),

        getProducts: builder.query({
            query: () => ({
                url: "/products",
                method: "GET",
            }),
            providesTags: ["products"]
        }),

        getSingleProduct: builder.query({
            query: (id: string) => ({
                url: `/products/${id}`,
                method: "GET",
            }),
        }),

        deleteSingleProduct: builder.mutation({
            query: (id: string) => ({
                url: `/products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["products"]
        }),
    }),
});

export const { useGetProductsQuery, useGetSingleProductQuery, useCreateProductMutation } = productsApi;