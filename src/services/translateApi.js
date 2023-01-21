import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const translateHeaders = {
  "X-RapidAPI-Key": "0a4a90e165msh1c8cc73b48aa9aep1dd97djsn56f4bec7459d",
  "X-RapidAPI-Host": "translated-mymemory---translation-memory.p.rapidapi.com",
};
const baseUrl =
  "https://translated-mymemory---translation-memory.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: translateHeaders });

export const translateApi = createApi({
  reducerPath: "translateApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getTranslate: builder.query({
      query: ({ inputVal, fromLang, toLang }) =>
        createRequest(`/get?langpair=${fromLang}%7C${toLang}&q=${inputVal}`),
    }),
  }),
});

export const { useGetTranslateQuery } = translateApi;
