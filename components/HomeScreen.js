import * as React from 'react';
import { View, Text, Button} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Product"
        onPress={() => navigation.navigate('ProductCategory',{page: 'ProductCategory'})}
      />
      <Button
        title="Go to TabNavigator"
        onPress={() => navigation.navigate('TabNavigator',{page: 'TabNavigator'})}
      />
    </View>
  );
}

export default HomeScreen;