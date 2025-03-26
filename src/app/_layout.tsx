import { Stack } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#061a44'
        },
        headerTintColor: '#fff'
      }}
    >
      <Stack.Screen
        name="(auth)/sign-in"
        options={{ headerShown: false, title: 'Login' }}
      />
      <Stack.Screen
        name="(auth)/sign-up"
        options={{ headerShown: false, title: 'Criar Conta' }}
      />

      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="profile" options={{ title: 'Perfil' }} />
      <Stack.Screen name="user/[id]" options={{ title: 'Usuario' }} />
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, title: 'Painel' }}
      />
    </Stack>
  );
}
