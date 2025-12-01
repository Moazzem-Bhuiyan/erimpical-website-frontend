const { baseApi } = require('./baseApi');

const CartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addToCart: builder.mutation({
      query: (data) => ({
        url: '/carts',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['carts'],
    }),
    getCart: builder.query({
      query: () => ({
        url: '/carts',
        method: 'GET',
      }),
      providesTags: ['carts'],
    }),
    deleteCart: builder.mutation({
      query: (id) => ({
        url: `/carts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['carts'],
    }),
  }),
});

export const { useGetCartQuery, useAddToCartMutation, useDeleteCartMutation } = CartApi;
