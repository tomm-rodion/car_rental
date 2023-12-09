import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carRentalApp = createApi({
  reducerPath: 'carRentalApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6574a7f2b2fbb8f6509c7f2b.mockapi.io',
  }),
  tagTypes: ['Advertisement'],
  endpoints: builder => ({
    getCarsByPage: builder.query({
      query: (page = 1) => `advertisement?page=${page}&limit=12`,
    }),
    getAdvertisement: builder.query({
      query: () => 'advertisement',
      providesTags: ['Advertisement'],
    }),
  }),
});

export const { useGetCarsByPageQuery, useGetAdvertsQuery } = carRentalApp;
