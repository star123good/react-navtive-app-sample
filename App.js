import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './src/Counter';
import ClassComponent from './src/ClassComponent';
import { Card1, Card2, Card3 } from './src/ConditionalRendering';
import UserInput from './src/UserInput';

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
