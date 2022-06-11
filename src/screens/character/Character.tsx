import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React, {useMemo} from 'react';
import {MarvelCharacter} from '../../api/marvel/models/MarvelCharacter.model';
import {Typography} from '../../components/Typography';
import {getCharacterImageSource} from '../../utils/FormatUtilts';

export type CharacterProps = {
  character: MarvelCharacter;
};

export const Character = ({character}: CharacterProps) => {
  const imageSource = useMemo(
    () => getCharacterImageSource(character),
    [character],
  );

  return (
    <View>
      <Image source={imageSource} style={styles.image} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.spacer} />
        <View style={styles.scrollContent}>
          <Typography variant="h">{character?.name}</Typography>
          <Typography variant="body">
            {character?.description || 'No description.'}
          </Typography>
          {character.comics.items.map((comic, i) => (
            <Typography variant="body" key={i}>
              {comic?.name || 'No description.'}
            </Typography>
          ))}
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
    backgroundColor: 'white',
  },
});
