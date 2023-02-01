import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherAPI = createApi({
   baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
   endpoints: (builder) => ({
      // this func auto create function component with struct : use<name>query ex: getWeather -> useGetWeatherQuery
      getWeather: builder.query({
         query: () => 'repos/tannerlinsley/react-query',
      }),
      postWeather: builder.mutation({
         query(amount) {
            return {
               url: `repos/tannerlinsley/react-query`,
               method: 'POST',
               body: { amount },
            };
         },
      }),
   }),
});

// Export hooks for usage in functional components
export const { useGetWeatherQuery, userPostWeatherQuery } = weatherAPI;
