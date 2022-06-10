import React from 'react';
import {Characters} from './Characters';
import {useCharacters} from './useCharacters';

// @ts-ignore
export const CharactersContainer = ({navigation}) => {
  const characters = useCharacters();

  const onPress = () => {
    navigation.navigate('Character');
  };

  return <Characters onPress={onPress} characters={characters} />;
};
