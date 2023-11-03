const API_KEY = '_09GhfKA2Ge1Fv9vJdM1';

export async function APILord(searchStr: string, limit: number, page: number) {
  const headers = { Authorization: `Bearer ${API_KEY}` };
  const response: Response = await fetch(
    `https://the-one-api.dev/v2/character?name=/${searchStr.trim()}/i&limit=${limit}&page=${page}`,
    {
      headers,
    }
  );
  return response.json();
}
