import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [token, setToken] = React.useState('');
  const [error, setError] = React.useState('');

  const handleLogin = () => {
    if (token.trim() !== 'wudbuw') {
      setError('Invalid access token');
      return;
    }
    setError('');
    navigation.replace('Main');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#181A20" />
      <Text style={styles.title}>Bybit P2P</Text>
      <TextInput
        style={styles.input}
        placeholder="Access token"
        placeholderTextColor="#888"
        value={token}
        onChangeText={setToken}
        autoCapitalize="none"
        secureTextEntry
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Enter</Text>
      </TouchableOpacity>
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
    marginBottom: 32,
    letterSpacing: 0.5,
  },
  input: {
    width: '100%',
    backgroundColor: '#23262F',
    color: '#fff',
    borderRadius: 10,
    padding: 16,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#23262F',
  },
  button: {
    width: '100%',
    backgroundColor: '#2D9CDB',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  error: {
    color: '#FF5B5B',
    marginBottom: 8,
    fontSize: 14,
  },
});
