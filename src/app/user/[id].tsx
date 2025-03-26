import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

export default function User() {
  const { id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text>Pagina Usuario com ID {id}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});
