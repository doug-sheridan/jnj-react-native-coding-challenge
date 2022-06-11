import {networkRequest} from '../NetworkRequest';
import {
  MARVEL_API_CREDENTIALS,
  MARVEL_API_ROUTES,
  MARVEL_BASE_URL,
  MARVEL_DEFAULT_HEADERS,
} from './MarvelConstants';

export type MarvelRequestParams = {
  route: string;
  method: string;
  params: any;
  data?: any;
  headers?: any;
};

/**
 * A generic Marvel API request.
 */
const marvelRequest = ({
  route,
  method,
  params,
  data,
  headers,
}: MarvelRequestParams) => {
  const url = MARVEL_BASE_URL + route;
  return networkRequest({
    url,
    method,
    params: {
      apikey: MARVEL_API_CREDENTIALS.publicKey,
      ...params,
    },
    data,
    headers: {...MARVEL_DEFAULT_HEADERS, ...headers},
  });
};

export type GetCharactersParams = {
  nameStartsWith?: string | undefined;
  limit?: number | undefined;
  offset?: number | undefined;
};

/**
 * Gets a paged list of Marvel characters
 */
const getCharacters = async ({
  nameStartsWith = undefined,
  limit = 20,
  offset = 0,
}: GetCharactersParams): Promise<any[]> => {
  try {
    const response = await marvelRequest({
      route: MARVEL_API_ROUTES.characters,
      method: 'GET',
      params: {
        nameStartsWith,
        limit,
        offset,
      },
    });
    if (response?.data?.data?.results) {
      return response.data.data.results;
    } else {
      return [];
    }
  } catch (e) {
    return [];
  }
};

const MarvelApi = {
  getCharacters,
};

export default MarvelApi;
