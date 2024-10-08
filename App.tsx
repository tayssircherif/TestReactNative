import { store } from './src/store/store';
import ProductListScreen from './src/screens/ProductListScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';

import Toast from 'react-native-toast-message';  // Correct toast import
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider, useDispatch } from 'react-redux';
const Stack = createStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Products" component={ProductListScreen} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />

        </Stack.Navigator>
      </NavigationContainer>
      {/* Toast component setup without ref */}
      <Toast />

    </Provider>

  );
}
