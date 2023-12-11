import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carRentalApi = createApi({
  reducerPath: 'carRentalApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://6574a7f2b2fbb8f6509c7f2b.mockapi.io/',
  }),
  tagTypes: ['Adverts'],
  endpoints: builder => ({
    getCarsByPage: builder.query({
      query: (page = 1) => `adverts?page=${page}&limit=12`,
    }),
    getAdverts: builder.query({
      query: () => '/adverts',
      providesTags: ['Adverts'],
    }),
  }),
});

export const { useGetCarsByPageQuery, useGetAdvertsQuery } = carRentalApi;
