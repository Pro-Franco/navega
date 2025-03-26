import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { Link, router } from 'expo-router';

export default function Dashboard() {
  function handleNavigate() {
    router.replace('/');
  }

  return (
    <View style={styles.container}>
      <Text>Pagina Painel</Text>
      <Link href={'/'}> ir para Home </Link>
      <Button title="Ir para Home" onPress={() => router.replace('/')} />
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
