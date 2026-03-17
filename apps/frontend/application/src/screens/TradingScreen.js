import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TradingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Trading</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A20',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
  },
});
