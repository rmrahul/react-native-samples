import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {BasicView} from './BasicView';
import {Routes} from './Routes';
import {FlexDesignRoutes} from './FlexDesignRoutes';

import {Text, View} from 'react-native';

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <View style={{height: 400, backgroundColor: 'powderBlue'}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Routes"
          options={{headerShown: true}}>
          <Stack.Screen name="Routes" component={Routes} />
          <Stack.Screen name="BasicView" component={BasicView} />
          <Stack.Screen name="FlexDesignRoutes" component={FlexDesignRoutes} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
