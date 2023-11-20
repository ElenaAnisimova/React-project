import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { SearchResultType } from '../../components/SearchResults/SearchResultsTypes';
const API_KEY = '_09GhfKA2Ge1Fv9vJdM1';
const BASE_URL = 'https://the-one-api.dev/v2/character';

export type SearchCharactersResponse = {
  docs: SearchResultType[];
  pages: number;
};

export type CharacterResponse = {
  docs: SearchResultType[];
};

export const dataAPI = createApi({
  reducerPath: 'dataAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  }),
  endpoints: (build) => ({
    fetchAllCharacters: build.query<
      SearchCharactersResponse,
      { searchStr: string; limit: number; page: number }
    >({
      query: ({ searchStr, limit, page }) => ({
        url: `?name=/${searchStr.trim()}/i&limit=${limit}&page=${page}`,
      }),
    }),
  }),
});

export const characterAPI = createApi({
  reducerPath: 'dataAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  }),
  endpoints: (build) => ({
    fetchAllCharacters: build.query<SearchCharactersResponse, { id: string }>({
      query: ({ id }) => ({
        url: `${id}`,
      }),
    }),
  }),
});
