import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import {MarvelCharacter} from '../../api/marvel/models/MarvelCharacter.model';
import {CharacterListItem} from './CharacterListItem';
import {Loading} from '../../components/Loading';
import {Typography} from '../../components/Typography';

export type CharactersProps = {
  onPress: (character: MarvelCharacter) => void;
  characters: MarvelCharacter[];
};

/**
 * The Characters list UI.
 */
export const Characters = ({onPress, characters}: CharactersProps) => {
  const renderCharactersList = (): ReactNode[] => {
    const results: ReactNode[] = [];
    characters.map((character: MarvelCharacter, i: number) =>
      results.push(
        <TouchableOpacity key={i} onPress={() => onPress(character)}>
          <CharacterListItem character={character} />
        </TouchableOpacity>,
      ),
    );
    return results;
  };

  return (
    <ScrollView contentContainerStyle={style.container}>
      <Typography variant="h">Marvel Characters</Typography>
      {characters && characters.length > 0 ? (
        renderCharactersList()
      ) : (
        <Loading />
      )}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    paddingVertical: 60,
  },
});
