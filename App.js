import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import ColorChangerApp from './ColorChangerApp';
import CounterApp from './CounterApp.js';

const App = () => {
  return (
    <View style={styles.container}>

      <CounterApp />
      <ColorChangerApp />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
