import {useCallback, useEffect, useState} from 'react';
import MarvelApi from '../../api/marvel/MarvelApi';

/**
 * useCharacters -
 * A custom hook that deals with fetching the list of characters and ways to interact with that data or the request.
 */
export const useCharacters = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [pageSize] = useState(20);
  const [endReached, setEndReached] = useState(false);
  const [nextPageLoading, setNextPageLoading] = useState(false);

  /**
   * reset -
   * Resets the common state vars back to initial state.
   */
  const reset = () => {
    setCharacters([]);
    setLoading(true);
    setError(undefined);
    setEndReached(false);
    setNextPageLoading(false);
  };

  /**
   * fetchCharacters -
   * Fetches the list of characters from the Marvel API
   */
  const fetchCharacters = useCallback(() => {
    setLoading(true);
    setError(undefined);
    MarvelApi.getCharacters({
      limit: pageSize,
      offset: characters.length,
    })
      .then(chars => {
        if (chars?.length > 0) {
          if (chars.length < pageSize) {
            console.log('End of list reached!');
            setEndReached(true);
          }
          setCharacters(chars);
        } else {
          setError('No characters found.');
        }
        setLoading(false);
      })
      .catch(e => {
        console.error(e);
        setError(e.message);
        setLoading(false);
      });
  }, [characters.length, pageSize]);

  /**
   * init -
   * Initializes the useCharacters hook with data from the server.
   */
  const init = useCallback(() => {
    if (characters.length === 0) {
      fetchCharacters();
    } else {
      console.log('Characters already fetched, skipping...');
      setLoading(false);
    }
  }, [characters.length, fetchCharacters]);

  /**
   * When this hook first loads, initialize the state.
   */
  useEffect(() => {
    init();
    // eslint-disable-next-line
  }, []);

  /**
   * reloadData -
   * The pull-to-refresh callback mechanism used by the FlatList component.
   */
  const reloadData = () => {
    reset();
    fetchCharacters();
  };

  /**
   * fetchCharactersNextPage -
   * Fetches the next page in the Characters list adds the results to the end of the list.
   */
  const fetchCharactersNextPage = useCallback(() => {
    setNextPageLoading(true);
    setError(undefined);
    MarvelApi.getCharacters({
      limit: pageSize,
      offset: characters.length,
    })
      .then(chars => {
        console.log('chars: ' + JSON.stringify(chars));
        if (chars?.length > 0) {
          if (chars.length < pageSize) {
            console.log('End of list reached!');
            setEndReached(true);
          }
          setCharacters([...characters, ...chars]);
        } else {
          console.log('End of list reached!');
          setEndReached(true);
        }
        setNextPageLoading(false);
      })
      .catch(e => {
        console.error(e);
        setError(e.message);
        setNextPageLoading(false);
      });
  }, [characters, pageSize]);

  /**
   * loadNextPage -
   * The infinite scrolling callback mechanism used to fetch the next page of the list.
   */
  const loadNextPage = () => {
    if (!endReached) {
      fetchCharactersNextPage();
    } else {
      console.log("You're already at the end of the list. Skipping...");
    }
  };

  return {
    characters,
    loading,
    error,
    reloadData,
    loadNextPage,
    nextPageLoading,
  };
};
