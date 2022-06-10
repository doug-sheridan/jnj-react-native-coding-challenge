import {useEffect, useState} from 'react';
import MarvelApi from '../../api/marvel/MarvelApi';

export const useCharacters = () => {
  const [characters, setCharacters] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const chars = await MarvelApi.getCharacters({});
      setCharacters(chars);
    }
    if (characters.length === 0) {
      fetchData();
    } else {
      console.log('skipped fetch...');
    }
  });

  return characters;
};
