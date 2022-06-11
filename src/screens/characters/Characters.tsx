import {
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {MarvelCharacter} from '../../api/marvel/models/MarvelCharacter.model';
import {CharacterListItem} from './CharacterListItem';
import {Typography} from '../../components/Typography';
import {Loading} from '../../components/Loading';
import {Colors} from '../../constants';

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
      <SafeAreaView style={styles.headerContainer}>
        <Image
          resizeMode="contain"
          source={require('../../../assets/marvel-logo.png')}
          style={styles.logo}
        />
      </SafeAreaView>
      {!charactersError ? (
        !charactersLoading ? (
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={charactersLoading}
                onRefresh={onRefresh}
                title="Refresh List.."
                tintColor="white"
                titleColor="#white"
              />
            }
            refreshing={charactersLoading}
            style={styles.flatList}
            contentContainerStyle={styles.flatListContent}
            data={characters}
            onEndReached={onEndReached}
            renderItem={renderItem}
            ListFooterComponent={nextPageLoading ? <Loading /> : undefined}
          />
        ) : (
          <View style={styles.loadingContainer}>
            <Loading />
          </View>
        )
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
  logo: {
    width: 100,
    height: 100,
  },
  headerContainer: {
    backgroundColor: Colors.primary,
    borderBottomWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    backgroundColor: 'black',
  },
  flatListContent: {},
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
