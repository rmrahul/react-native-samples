import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {FlexDesignRoutes} from './FlexDesignRoutes';
import {BasicView} from './BasicView';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export const FlexDesign = () => {
  console.log('From home screen');
  return (
    <SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="FlexRoutes"
          options={{headerShown: true}}>
          <Stack.Screen name="FlexRoutes" component={FlexDesignRoutes} />
          <Stack.Screen name="BasicView" component={BasicView} />
          <Stack.Screen name="FlexDesign" component={FlexDesign} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
