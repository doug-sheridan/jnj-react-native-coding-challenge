import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MarvelCharacter} from '../../api/marvel/models/MarvelCharacter.model';

export type CharactersProps = {
  onPress: () => void;
  characters: MarvelCharacter[];
};

/**
 * The Characters list UI.
 */
export const Characters = ({onPress, characters}: CharactersProps) => {
  if (characters && characters.length > 0) {
    console.log('characters: ' + JSON.stringify(characters));
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hello, Characters!</Text>
      <TouchableOpacity onPress={onPress}>
        <Text>Go to Character</Text>
      </TouchableOpacity>
    </View>
  );
};
