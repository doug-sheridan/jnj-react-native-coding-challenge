import React from 'react';
import {StyleSheet, View} from 'react-native';
import {MarvelCharacter} from '../../api/marvel/models/MarvelCharacter.model';
import {Typography} from '../../components/Typography';

export type CharacterListItemProps = {character: MarvelCharacter};

export const CharacterListItem = ({character}: CharacterListItemProps) => {
  return (
    <View style={styles.container}>
      <Typography variant="body">{character.name}</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingVertical: 20,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
