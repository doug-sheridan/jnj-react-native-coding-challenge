import {useEffect, useState} from 'react';
import MarvelApi from '../../api/marvel/MarvelApi';

export const useCharacters = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  // useEffect(() => {
  //   console.log('characters: ' + JSON.stringify(characters));
  // }, [characters]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const chars = await MarvelApi.getCharacters({});
      setCharacters(chars);
    }
    if (characters.length === 0) {
      fetchData()
        .then(() => {
          console.log('fetch characters success!');
          setLoading(false);
        })
        .catch(e => {
          console.error(e);
          setError(e.message);
          setLoading(false);
        });
    } else {
      console.log('skipped fetch...');
      setLoading(false);
    }
  }, [characters.length]);

  return {characters, loading, error};
};
