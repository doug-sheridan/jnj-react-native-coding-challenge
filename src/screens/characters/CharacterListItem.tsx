import React from 'react';
import {Text, View} from 'react-native';
import {MarvelCharacter} from '../../api/marvel/models/MarvelCharacter.model';

export type CharacterListItemProps = {character: MarvelCharacter};

export const CharacterListItem = ({character}: CharacterListItemProps) => {
  return (
    <View>
      <Text>{character.name}</Text>
    </View>
  );
};
