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

export const Routes = (props: any) => {
  console.log('From home screen');
  return (
    <SafeAreaView>
      <View style={{backgroundColor: 'white'}}>
        <Text
          style={{backgroundColor: 'white', height: 50}}
          onPress={() => {
            props.navigation.navigate('BasicView');
          }}>
          Basic View
        </Text>
        <Text
          style={{backgroundColor: 'white', height: 50}}
          onPress={() => {
            props.navigation.navigate('FlexDesignRoutes');
          }}>
          Flex View
        </Text>
      </View>
    </SafeAreaView>
  );
};
