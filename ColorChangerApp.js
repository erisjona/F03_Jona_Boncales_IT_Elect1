import React, { useState } from 'react';
import { View, Button, StyleSheet, SafeAreaView } from 'react-native';

const ColorChangerApp = () => {
  const colors = ['yellow', 'yellowgreen', 'black', 'white'];
  const [colorIndex, setColorIndex] = useState(0);

  return (
    <View style={[styles.container, { backgroundColor: colors[colorIndex] }]}>
      <View style={styles.button}>
        <Button title="White" 
            onPress={() => setColorIndex(3)} />
      </View>
      <View style={styles.button}>
        <Button title="Yellow" 
            onPress={() => setColorIndex(0)} />
      </View>
      <View style={styles.button}>
        <Button title="Yellow-green" 
            onPress={() => setColorIndex(1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 10,
    width: 150,
  },
});
export default ColorChangerApp;
