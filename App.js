import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter';
import ClassComponent from './components/ClassComponent';
import { Card1, Card2, Card3 } from './components/ConditionalRendering';
import UserInput from './components/UserInput';
import UseReducerComponent from './components/UseReducerComponent';
import { UseEffect1, UseEffect2, UseEffect3 } from './components/UseEffectComponent';
import UseRefComponent from './components/UseRefComponent';
import CustomHook from './components/CustomHook';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Counter />
      <ClassComponent />
      <Card1 />
      <Card2 />
      <Card3 />
      <UserInput />
      <UseReducerComponent />
      <UseEffect1 />
      <UseEffect2 />
      <UseEffect3 />
      <UseRefComponent />
      <CustomHook />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
