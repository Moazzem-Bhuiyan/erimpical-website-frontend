import { baseApi } from './baseApi';

const termsAndPrivecyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTermsAndConditionsPrivecy: builder.query({
      query: () => ({
        url: '/contents',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetTermsAndConditionsPrivecyQuery } = termsAndPrivecyApi;
