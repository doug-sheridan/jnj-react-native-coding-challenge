import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useMemo} from 'react';
import {MarvelCharacter} from '../../api/marvel/models/MarvelCharacter.model';
import {Typography} from '../../components/Typography';
import {getCharacterImageSource} from '../../utils/FormatUtilts';
import {isTablet} from '../../utils/DeviceInfoUtils';

export type CharacterProps = {
  character: MarvelCharacter;
  moreInfoOnPress: () => void;
};

export const Character = ({character, moreInfoOnPress}: CharacterProps) => {
  const {width} = useWindowDimensions();
  const tabletPadding = width / 5;

  const imageSource = useMemo(
    () => getCharacterImageSource(character),
    [character],
  );

  return (
    <View style={styles.container}>
      <Image
        source={imageSource}
        style={styles.image}
        resizeMode={isTablet ? 'contain' : 'cover'}
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.spacer} />
        <View
          style={[
            styles.scrollContent,
            isTablet
              ? {
                  paddingHorizontal: tabletPadding,
                  paddingVertical: tabletPadding / 4,
                }
              : undefined,
          ]}>
          <View style={{marginBottom: 20}}>
            <Typography variant="h">{character?.name}</Typography>
            <Typography variant="body">
              {character?.description || 'No description.'}
            </Typography>
          </View>
          <View style={styles.comicsContainer}>
            <Typography variant="body" bold style={{marginBottom: 10}}>
              Comics
            </Typography>
            {character.comics.items?.length > 0 ? (
              character.comics.items.map((comic, i) => (
                <Typography variant="body" key={i} style={styles.comicItem}>
                  {`• ${comic?.name}` || 'No description.'}
                </Typography>
              ))
            ) : (
              <Typography variant="body">No comics found.</Typography>
            )}
          </View>
          <View
            style={
              isTablet
                ? {
                    justifyContent: 'center',
                    alignItems: 'center',
                  }
                : undefined
            }>
            <TouchableOpacity
              style={[styles.moreInfoButton, isTablet ? {} : undefined]}
              onPress={moreInfoOnPress}>
              <Typography variant="body">👊 Punch for More Info...</Typography>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 500,
  },
  scrollView: {
    height: '100%',
  },
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
    paddingVertical: 20,
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 19,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 40,
  },
});
