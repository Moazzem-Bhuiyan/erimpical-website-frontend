import { baseApi } from './baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: '/users/register',
        method: 'POST',
        body: data,
      }),

      // invalidatesTags: [tagTypes.users, tagTypes.auth],
    }),

    signIn: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data,
      }),

      // invalidatesTags: [tagTypes.auth, tagTypes.user],
    }),

    verifyOtp: builder.mutation({
      query: (data) => ({
        url: '/otp/verify-otp',
        method: 'POST',
        body: data,
      }),

      // invalidatesTags: [tagTypes.otp],
    }),

    resendOtp: builder.mutation({
      query: (data) => ({
        url: '/auth/resend-otp',
        method: 'POST',
        body: data,
      }),

      // invalidatesTags: [tagTypes.otp],
    }),

    forgotPassword: builder.mutation({
      query: (data) => ({
        url: '/auth/forget-password',
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json',
        },
      }),

      // invalidatesTags: [tagTypes.auth],
    }),

    resetPassword: builder.mutation({
      query: (data) => ({
        url: '/auth/reset-password',
        method: 'POST',
        body: data,
      }),

      // invalidatesTags: [tagTypes.auth],
    }),

    // my user profile
    myProfile: builder.query({
      query: () => ({
        url: '/users/my-profile',
        method: 'GET',
      }),
    }),

    // update my profile
    UpdateProfile: builder.mutation({
      query: (data) => ({
        url: '/users/update-my-profile',
        method: 'PUT',
        body: data,
      }),
    }),
  }),

  overrideExisting: true,
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useVerifyOtpMutation,
  useResendOtpMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useMyProfileQuery,
  useUpdateProfileMutation,
} = authApi;
