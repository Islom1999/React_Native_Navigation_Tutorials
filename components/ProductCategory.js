import * as React from 'react';
import { View, Text, Button } from 'react-native';

function ProductCategoryScreen({route,navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{route.params.page}</Text>
      <Button
        title="Go to Product"
        onPress={() => navigation.push('ProductCategory')}
      />

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />

      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default ProductCategoryScreen;