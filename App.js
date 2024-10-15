import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './src/screens/HomeScreen';
import ServiciosScreen from './src/screens/ServiciosScreen';
import PortafolioScreen from './src/screens/PortafolioScreen';
import ContactoScreen from './src/screens/ContactoScreen';
import TerminosYCondiciones from './src/screens/TerminosYCondiciones';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Servicios" component={ServiciosScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Servicios') {
              iconName = 'briefcase';
            } else if (route.name === 'Portafolio') {
              iconName = 'folder';
            } else if (route.name === 'Contacto') {
              iconName = 'mail';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#003366',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={MyStack} />
        <Tab.Screen name="Servicios" component={ServiciosScreen} />
        <Tab.Screen name="Portafolio" component={PortafolioScreen} />
        <Tab.Screen name="Contacto" component={ContactoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
