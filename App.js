import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import BreedListScreen from './BreedListScreen';
import BreedDetailScreen from './BreedDetailScreen';
import AboutScreen from './AboutScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BreedsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Breeds" component={BreedListScreen} />
      <Stack.Screen name="BreedDetail" component={BreedDetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Breeds" component={BreedsStack} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
