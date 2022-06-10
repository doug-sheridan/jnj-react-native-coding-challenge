import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CharacterContainer} from './src/screens/character/CharacterContainer';
import {CharactersContainer} from './src/screens/characters/CharactersContainer';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Characters" component={CharactersContainer} />
        <Stack.Screen name="Character" component={CharacterContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
