import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const CounterButton = () => {
  const [value, setCount] = React.useState(0);

  const incrementCount = () => {
    setCount(value + 1);
  };

  const decrementCount = () => {
    setCount(value - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    
    <View style={styles.container}>
    <View style={styles.hi}>
      <Text style={styles.t1}>Counter App</Text>
      <Text style={styles.m2}>Count: {value}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={incrementCount} color='#617A55'  />
        <Button title="Decrement" onPress={decrementCount} color='pink' />
        <Button title="Reset" onPress={resetCount} color='#CD1818' />
      </View>
    </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B2730',
    margin: 10,
    padding:10
  },
  hi:{
backgroundColor:'#99DBF5',
height:300,
width:300,
borderRadius:40,
 },
  buttonContainer: {
    flexDirection: 'column',
    marginTop: 30,
    backgroundColor: '#FFB100',
    margin: 100,
    borderRadius: 70,
    
  },
  m2: {
    backgroundColor: '#99627A',
    fontSize: 35,
    borderRadius: 20,
    shadowColor: '#FFB100',
    shadowOffset: { height: 3, width: 2 },
    color: 'white',
    width:300
  },
  t1: {
    fontSize: 40,
    color: 'white',
    backgroundColor: '#374259',
    margin: 20,
    borderRadius: 10,
    shadowColor: '#CE7777',
    shadowOffset: { height: 3, width: 6 },
  },
});

export default CounterButton;
