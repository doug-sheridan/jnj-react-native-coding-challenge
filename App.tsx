import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CharacterContainer} from './src/screens/character/CharacterContainer';
import {CharactersContainer} from './src/screens/characters/CharactersContainer';
import {MarvelCharacter} from './src/api/marvel/models/MarvelCharacter.model';

export type RootStackParamList = {
  Characters: {};
  Character: {character: MarvelCharacter};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Characters">
        <Stack.Screen
          name="Characters"
          component={CharactersContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Character" component={CharacterContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
