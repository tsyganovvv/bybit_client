import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#181A20" />
      <Text style={styles.title}>Bybit P2P Client</Text>
      <Text style={styles.subtitle}>Main screen</Text>
      {/* Main functionality will be here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A20',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  subtitle: {
    color: '#aaa',
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 8,
    letterSpacing: 0.2,
  },
});
