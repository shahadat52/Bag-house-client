import { baseApi } from "../../api/baseApi";


const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (userInfo) => ({
                url: "/user/signup",
                method: "POST",
                body: userInfo
            }),
        }),

        login: builder.query({
            query: (userInfo) => ({
                url: '/user/login',
                method: 'GET',
                body: userInfo
            })
        })
    }),
});

export const { useSignUpMutation, useLoginQuery } = authApi