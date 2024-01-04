import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = 'https://6574a7f2b2fbb8f6509c7f2b.mockapi.io/';

export const carRentalApi = createApi({
  reducerPath: 'carRentalApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
  }),
  tagTypes: ['Advert'],
  endpoints: builder => ({
    getCarsByPage: builder.query({
      query: (page = 1) => `advert?page=${page}&limit=12`,
    }),
    getAdverts: builder.query({
      query: () => '/advert',
      providesTags: ['Advert'],
    }),
  }),
});

export const { useGetCarsByPageQuery, useGetAdvertsQuery } = carRentalApi;
