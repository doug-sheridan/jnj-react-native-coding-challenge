import {Image, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {MarvelCharacter} from '../../api/marvel/models/MarvelCharacter.model';
import {Typography} from '../../components/Typography';

export type CharacterProps = {
  character: MarvelCharacter;
};

export const Character = ({character}: CharacterProps) => {
  console.log('Character: ' + JSON.stringify(character));

  const imageSource =
    character.thumbnail.path +
    '/portrait_incredible.' +
    character.thumbnail.extension;
  console.log('imageSource: ' + imageSource);

  return (
    <View>
      <Image source={{uri: imageSource}} style={styles.image} />
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
