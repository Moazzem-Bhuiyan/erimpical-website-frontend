import { baseApi } from './baseApi';

const termsAndPrivecyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTermsAndConditions: builder.query({
      query: () => ({
        url: '/contents',
        method: 'GET',
      }),
    }),
    getPrivacyPolicy: builder.query({
      query: () => ({
        url: '/contents',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetTermsAndConditionsQuery, useGetPrivacyPolicyQuery } = termsAndPrivecyApi;
