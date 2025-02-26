import { Tabs } from 'expo-router';
import { colors } from '@/styles/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useAuth } from '@/contexts/AuthContext';

export default function TabsLayout() {
  const { user } = useAuth();

  if (!user) {
    return null; // Ou redirecione para a tela de login
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarStyle: {
          backgroundColor: colors.gray[100],
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons size={23} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="sell"
        options={{
          title: 'Vender',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons size={25} name="add-circle" color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Buscar',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons size={23} name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notificações',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons size={23} name="notifications" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          headerShown: false,
          tabBarIcon: ({ color }) => <Ionicons size={23} name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}