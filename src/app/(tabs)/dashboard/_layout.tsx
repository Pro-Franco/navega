import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'Painel',
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <FontAwesome name="tags" size={size} color={color} />;
            }
            return <FontAwesome name="tag" size={size} color={color} />;
          }
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          title: 'Configurações',
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <FontAwesome name="gear" size={size} color={color} />;
            }
            return <FontAwesome name="gear" size={size} color={color} />;
          }
        }}
      />
    </Tabs>
  );
}
