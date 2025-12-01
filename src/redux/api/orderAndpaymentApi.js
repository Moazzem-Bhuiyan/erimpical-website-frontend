const { baseApi } = require('./baseApi');

const orderAndPaymentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query({
      url: '/orders',
      method: 'GET',
    }),
    // add order
    addOrder: builder.mutation({
      query: (data) => ({
        url: '/orders',
        method: 'POST',
        body: data,
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

export const { useGetOrdersQuery, useAddOrderMutation, useCheckoutMutation } = orderAndPaymentApi;
