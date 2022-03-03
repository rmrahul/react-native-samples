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

export const FlexDesignRoutes = (props: any) => {
  console.log('From home screen');
  return (
    <SafeAreaView>
      <View style={{backgroundColor: 'white'}}>
        <Text>Refer : https://reactnative.dev/docs/flexbox </Text>

        <Text
          style={{backgroundColor: 'white', height: 50}}
          onPress={() => {
            props.navigation.navigate('BasicView');
          }}>
          Flex grow
        </Text>
        <Text
          style={{backgroundColor: 'white', height: 50}}
          onPress={() => {
            props.navigation.navigate('Routes');
          }}>
          Flex basis
        </Text>
      </View>
    </SafeAreaView>
  );
};
