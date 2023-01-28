import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen';
import ProductCategoryScreen from './components/ProductCategory';
import TabNavigator from './components/TabNavigator';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductCategory" component={ProductCategoryScreen} />
        {/* <Stack.Screen name="TabNavigator" component={TabNavigator} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;