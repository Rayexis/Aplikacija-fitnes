import { Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#e74c3c',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Domov',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="details"
        options={{
          title: 'Vadbe',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'O meni',
          headerShown: false,
        }}
      />
    </Tabs>
  );
}