import {Text, View} from 'react-native';
import React from 'react';
import {MarvelCharacter} from '../../api/marvel/models/MarvelCharacter.model';

export type CharacterProps = {
  character: MarvelCharacter;
};

export const Character = ({character}: CharacterProps) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hello, {character?.name}</Text>
    </View>
  );
};
