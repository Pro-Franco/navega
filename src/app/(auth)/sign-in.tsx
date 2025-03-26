import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleNavigate() {
    router.replace('/');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Login do Usario</Text>

      <TextInput
        label="E-mail"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        label="Senha"
        mode="outlined"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <Button mode="contained" onPress={handleNavigate} style={styles.button}>
        Entrar
      </Button>

      <Button mode="text" onPress={() => router.push('/sign-up')}>
        Criar uma conta
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },
  input: { marginBottom: 15 },
  button: { marginTop: 10, paddingVertical: 5 }
});
