import AsyncStorage from '@react-native-async-storage/async-storage';
import {MarvelCharacter} from '../api/marvel/models/MarvelCharacter.model';

const CHARACTERS_STORAGE_KEY = '@characters_key';

/**
 * storeCharacters -
 * Puts the characters into local storage.
 */
const storeCharacters = async (
  characters: MarvelCharacter[],
): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(characters);
    await AsyncStorage.setItem(CHARACTERS_STORAGE_KEY, jsonValue);
  } catch (e) {
    console.error(e);
  }
};

/**
 * readCharactersFromStorage -
 * Reads the characters from local storage.
 */
const readCharactersFromStorage = async (): Promise<MarvelCharacter[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(CHARACTERS_STORAGE_KEY);
    return jsonValue != null
      ? (JSON.parse(jsonValue) as MarvelCharacter[])
      : [];
  } catch (e) {
    console.error(e);
    return [];
  }
};

const clearStorage = () => {
  AsyncStorage.removeItem(CHARACTERS_STORAGE_KEY)
    .then(() => console.log('Cleared storage.'))
    .catch(e => console.error(e));
};

export const StorageUtils = {
  storeCharacters,
  readCharactersFromStorage,
  clearStorage,
};
