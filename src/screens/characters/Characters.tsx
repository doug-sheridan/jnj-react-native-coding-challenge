import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MarvelCharacter} from '../../api/marvel/models/MarvelCharacter.model';
import {CharacterListItem} from './CharacterListItem';
import {Typography} from '../../components/Typography';

export type CharactersProps = {
  onPress: (character: MarvelCharacter) => void;
  characters: MarvelCharacter[];
  charactersLoading: boolean;
};

/**
 * The Characters list UI.
 */
export const Characters = ({
  onPress,
  characters,
  charactersLoading,
}: CharactersProps) => {
  const onRefresh = async () => {
    console.log('onRefresh');
  };

  const renderItem = ({item}: {item: MarvelCharacter}) => {
    return (
      <TouchableOpacity onPress={() => onPress(item)}>
        <CharacterListItem character={item} />
      </TouchableOpacity>
    );
  };

  const onEndReached = () => {
    console.log('onEndReached');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Typography variant="h" style={styles.header}>
          Marvel Characters
        </Typography>
      </View>
      <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.flatListContent}
        data={characters}
        refreshing={charactersLoading}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    borderBottomWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginTop: 80,
    marginBottom: 20,
  },
  flatList: {},
  flatListContent: {},
});
