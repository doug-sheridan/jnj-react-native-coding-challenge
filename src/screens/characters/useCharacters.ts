import {useEffect, useState} from 'react';
import MarvelApi from '../../api/marvel/MarvelApi';

export const useCharacters = () => {
  const [characters, setCharacters] = useState<any[]>([]);

  useEffect(() => {
    console.log('characters: ' + JSON.stringify(characters));
  }, [characters]);

  useEffect(() => {
    async function fetchData() {
      const chars = await MarvelApi.getCharacters({});
      setCharacters(chars);
    }
    if (characters.length === 0) {
      fetchData()
        .then(() => console.log('fetch characters success!'))
        .catch(e => console.error(e));
    } else {
      console.log('skipped fetch...');
    }
  });

  return characters;
};
