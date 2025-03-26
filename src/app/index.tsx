import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { Link, router, Redirect } from 'expo-router';

function handleNavigate() {
  router.replace('/dashboard');
}

export default function Home() {
  return (
    <View style={styles.container}>
      <Link href={'/sign-in'}> Ir para tela Login</Link>
      <Text>Pagina Home</Text>
      <Link href={'/profile'}> Ir para tela Perfil</Link>
      <Link href={'/user/123456'}> Ir para tela Usuario</Link>
      <Button title="Ir para Dashboard" onPress={handleNavigate} />
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
