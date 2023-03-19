import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const productApi = createApi({
    reducerPath : "Products",
    baseQuery : fetchBaseQuery({
        baseUrl : "https://api.escuelajs.co/"
    }),
    endpoints : (builder) => ({
        getProducts : builder.query({
            query : () => "api/v1/products"
        })
    })
})

export const { useGetProductsQuery } = productApi
export default productApi