const { baseApi } = require('./baseApi');

const orderAndPaymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => ({
        url: '/orders/my-orders',
        method: 'GET',
      }),
    }),
    // add order
    addOrder: builder.mutation({
      query: (data) => ({
        url: '/orders',
        method: 'POST',
        body: data,
      }),
    }),

    // dlete order
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/orders/${id}`,
        method: 'DELETE',
      }),
    }),
    checkout: builder.mutation({
      query: (data) => ({
        url: '/payments/checkout',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useAddOrderMutation,
  useCheckoutMutation,
  useDeleteOrderMutation,
} = orderAndPaymentApi;
