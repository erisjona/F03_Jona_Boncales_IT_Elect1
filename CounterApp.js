import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

const CounterApp = () => {
  const [count, setCount] = useState(0);
  
  const handleDecrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  }
  
  const handleIncrement = () => {
    setCount(prev => prev + 1);
  }
  
  const handleReset = () => {
    setCount(count => 0);
  }
  
  return (
    <View style={styles.counterContainer}>
      <Text style={styles.counterTitle}>Counter</Text>
      <Text style={styles.countText}>{count}</Text>
      <View style={styles.counterButtons}>
        <Button 
          title="Increment" 
          onPress={handleIncrement} 
        />
        <Button 
          title="Decrement" 
          onPress={handleDecrement} 
          color="red"
        />
        <Button 
          title="Reset" 
          onPress={handleReset} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    alignItems: 'center',
    padding: 10,
  },
  counterTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
    color: '#333',
  },
  countText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#2196F3',
  },
  counterButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
});

export default CounterApp;
