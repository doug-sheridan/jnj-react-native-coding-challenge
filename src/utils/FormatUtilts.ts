import {MarvelCharacter} from '../api/marvel/models/MarvelCharacter.model';

export const getCharacterImageSource = (character: MarvelCharacter) => {
  return {
    uri:
      character.thumbnail.path +
      '/portrait_incredible.' +
      character.thumbnail.extension,
  };
};
