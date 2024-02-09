import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authUser = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/v1/' }),
  endpoints: (builder) => ({
    getUserAuth: builder.query({
      query: (name) => `${name}`,
    }),
  }),
})


export const { useGetUserAuthQuery } = authUser