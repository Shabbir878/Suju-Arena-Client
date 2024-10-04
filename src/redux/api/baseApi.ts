import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Use environment variable for baseUrl
const apiUrl = import.meta.env.VITE_API_URL;

export const baseApi = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: apiUrl, // Dynamic base URL from .env

    prepareHeaders: (headers) => {
      const persistedState = localStorage.getItem("persist:user");
      if (persistedState) {
        const parsedState = JSON.parse(persistedState);
        const token = parsedState.token && JSON.parse(parsedState.token);
        if (token) {
          headers.set("Authorization", `Bearer ${token}`); // Correct string interpolation
        }
      }
      return headers;
    },
  }),
  tagTypes: ["fac", "book"],
  endpoints: () => ({}),
});
