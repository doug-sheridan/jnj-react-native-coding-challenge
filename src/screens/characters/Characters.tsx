import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MarvelCharacter} from '../../api/marvel/models/MarvelCharacter.model';
import {CharacterListItem} from './CharacterListItem';
import {Typography} from '../../components/Typography';
import {Loading} from '../../components/Loading';

export type CharactersProps = {
  onPress: (character: MarvelCharacter) => void;
  characters: MarvelCharacter[];
  charactersLoading: boolean;
  charactersError?: string | undefined;
  reloadData: () => void; // pull to refresh callback
  loadNextPage: () => void; // infinite scrolling, fetch next page
  nextPageLoading?: boolean;
};

/**
 * The Characters list UI.
 */
export const Characters = ({
  onPress,
  characters,
  charactersLoading,
  charactersError,
  reloadData,
  loadNextPage,
  nextPageLoading,
}: CharactersProps) => {
  // @region callbacks
  const onRefresh = async () => {
    reloadData?.();
  };

  const onEndReached = () => {
    loadNextPage?.();
  };
  // @region callbacks

  const renderItem = ({item}: {item: MarvelCharacter}) => {
    return (
      <TouchableOpacity onPress={() => onPress(item)}>
        <CharacterListItem character={item} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Typography variant="h" style={styles.header}>
          Marvel Characters
        </Typography>
      </View>
      {!charactersError ? (
        <FlatList
          style={styles.flatList}
          contentContainerStyle={styles.flatListContent}
          data={characters}
          refreshing={charactersLoading}
          onRefresh={onRefresh}
          onEndReached={onEndReached}
          renderItem={renderItem}
          ListFooterComponent={nextPageLoading ? <Loading /> : undefined}
        />
      ) : (
        <View style={styles.errorContainer}>
          <Typography variant="h">Whoops!</Typography>
          <Typography variant="body">{charactersError}</Typography>
        </View>
      )}
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
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
