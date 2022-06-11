import React, {useMemo} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {MarvelCharacter} from '../../api/marvel/models/MarvelCharacter.model';
import {Typography} from '../../components/Typography';
import {getCharacterImageSource} from '../../utils/FormatUtilts';

export type CharacterListItemProps = {character: MarvelCharacter};

export const CharacterListItem = ({character}: CharacterListItemProps) => {
  const imageSource = useMemo(
    () => getCharacterImageSource(character),
    [character],
  );

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageSource} />
      <View style={styles.scrim} />
      <Typography variant="body" style={styles.text} color="white">
        {character.name}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginVertical: 40,
  },
  image: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'pink',
  },
  scrim: {
    backgroundColor: '#000000',
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: 0.5,
  },
});
