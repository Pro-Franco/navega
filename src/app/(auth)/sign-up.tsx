import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <TextInput
        label="Nome"
        mode="outlined"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

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

      <Button
        mode="contained"
        onPress={() => console.log('Cadastro')}
        style={styles.button}
      >
        Criar Conta
      </Button>

      <Button mode="text" onPress={() => router.push('/sign-in')}>
        Já tem uma conta? Faça login
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
