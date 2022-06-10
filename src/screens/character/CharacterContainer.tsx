import React, {useEffect} from 'react';
import {Character} from './Character';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';

export type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'Character'
>;

export const CharacterContainer = ({route, navigation}: NavigationProps) => {
  const {character} = route.params;

  useEffect(() => {
    navigation.setOptions({title: character.name});
  });

  return <Character character={character} />;
};
