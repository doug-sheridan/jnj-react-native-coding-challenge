import React, {useEffect} from 'react';
import {Character} from './Character';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import {Linking, Share, TouchableOpacity} from 'react-native';
import {Typography} from '../../components/Typography';

export type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'Character'
>;

export const CharacterContainer = ({route, navigation}: NavigationProps) => {
  const {character} = route.params;
  const characterMoreInfoUrl = character?.urls?.find(
    url => url?.type === 'comiclink',
  )?.url!;

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Hey! Check out this cool superhero I just discovered in the new Marvel app!
        
${character.name} -
${characterMoreInfoUrl}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      title: character.name,
      headerRight: () => (
        <TouchableOpacity onPress={onShare}>
          <Typography variant="body" color="white">
            Share
          </Typography>
        </TouchableOpacity>
      ),
    });
  });

  const moreInfoOnPress = () => {
    Linking.openURL(characterMoreInfoUrl);
  };

  return <Character character={character} moreInfoOnPress={moreInfoOnPress} />;
};
