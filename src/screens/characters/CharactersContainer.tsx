import React from 'react';
import {Characters} from './Characters';
import {useCharacters} from './useCharacters';
import {MarvelCharacter} from '../../api/marvel/models/MarvelCharacter.model';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';

export type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'Characters'
>;

export const CharactersContainer = ({navigation}: NavigationProps) => {
  const characters = useCharacters();

  const onPress = (character: MarvelCharacter) => {
    navigation.navigate('Character', {character});
  };

  return <Characters onPress={onPress} characters={characters} />;
};
