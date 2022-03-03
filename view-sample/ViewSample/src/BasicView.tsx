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

export const BasicView = () => {
  console.log('From home screen');
  return (
    <SafeAreaView>
      <View style={{backgroundColor: 'red'}}>
        <Text> Home screen</Text>

        <View>
          <View style={{backgroundColor: 'red'}}>
            <Text>with full width</Text>
          </View>
          <View style={{backgroundColor: 'yellow'}}>
            <Text>So by default is is full width</Text>
            <Text>Child1</Text>
            <Text>Child2</Text>
          </View>

          <View
            style={{backgroundColor: 'powderblue', height: 50, width: '50%'}}>
            <Text>Fixed height with 50% width</Text>
          </View>

          <View
            style={{backgroundColor: 'skyblue', height: '50%', width: '50%'}}>
            <Text>height 50% with 50% width</Text>
            <Text>
              It's variable base on parent. If parent keeps adding childs.. then
              height 50% will be recaulculated based on parent's height
            </Text>
          </View>

          <View style={{backgroundColor: 'powderblue'}}>
            <Text>Default view</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
