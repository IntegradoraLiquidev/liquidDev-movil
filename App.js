import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../liquidDev/src/screens/HomeScreen';
import ServiciosScreen from '../liquidDev/src/screens/ServiciosScreen';
import ContactoScreen from '../liquidDev/src/screens/ContactoScreen';
import PortafolioScreen from '../liquidDev/src/screens/PortafolioScreen';

const Tab = createBottomTabNavigator();

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
            }  else if (route.name === 'Portafolio') {
              iconName = 'folder';
            }else if (route.name === 'Contacto') {
              iconName = 'mail';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#003366',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Servicios" component={ServiciosScreen} />
        <Tab.Screen name="Portafolio" component={PortafolioScreen} />
        <Tab.Screen name="Contacto" component={ContactoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
