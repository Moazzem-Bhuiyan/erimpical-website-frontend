const { baseApi } = require('./baseApi');

const GalleryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getGallery: builder.query({
      query: () => '/galleries',
    }),
  }),
});

export const { useGetGalleryQuery } = GalleryApi;
