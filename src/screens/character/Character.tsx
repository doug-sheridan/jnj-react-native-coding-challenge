import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useMemo} from 'react';
import {MarvelCharacter} from '../../api/marvel/models/MarvelCharacter.model';
import {Typography} from '../../components/Typography';
import {getCharacterImageSource} from '../../utils/FormatUtilts';

export type CharacterProps = {
  character: MarvelCharacter;
  moreInfoOnPress: () => void;
};

export const Character = ({character, moreInfoOnPress}: CharacterProps) => {
  const imageSource = useMemo(
    () => getCharacterImageSource(character),
    [character],
  );

  console.log('character: ' + JSON.stringify(character));

  return (
    <View>
      <Image source={imageSource} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.spacer} />
        <View style={styles.scrollContent}>
          <View style={{marginBottom: 20}}>
            <Typography variant="h">{character?.name}</Typography>
            <Typography variant="body">
              {character?.description || 'No description.'}
            </Typography>
          </View>
          <View style={styles.comicsContainer}>
            <Typography variant="body" bold>
              Comics
            </Typography>
            {character.comics.items.map((comic, i) => (
              <Typography variant="body" key={i} style={styles.comicItem}>
                {`• ${comic?.name}` || 'No description.'}
              </Typography>
            ))}
          </View>
          <TouchableOpacity
            style={styles.moreInfoButton}
            onPress={moreInfoOnPress}>
            <Typography variant="body">📕 More Info</Typography>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 500,
  },
  scrollView: {},
  spacer: {
    height: 500,
  },
  scrollContent: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  comicsContainer: {
    marginBottom: 40,
  },
  comicItem: {
    marginLeft: 20,
    marginBottom: 10,
  },
  moreInfoButton: {
    backgroundColor: '#d3d3d3',
    height: 60,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 19,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 40,
  },
});
