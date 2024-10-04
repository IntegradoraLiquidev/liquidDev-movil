import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ServiciosScreen from './screens/ServiciosScreen';
import ContactoScreen from './screens/ContactoScreen';
import PortafolioScreen from './screens/PortafolioScreen';
import { Ionicons } from '@expo/vector-icons'; // Para iconos

const Tab = createBottomTabNavigator();

export default function Navigation() {
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
          tabBarActiveTintColor: '#003366', // Color azul para iconos activos
          tabBarInactiveTintColor: 'gray', // Color gris para iconos inactivos
          tabBarStyle: {
            backgroundColor: '#F2F2F2', // Fondo claro para la barra de navegación
            borderTopWidth: 0, // Sin borde superior
            elevation: 5, // Sombra para dar profundidad
            position: 'absolute', // Para que no se superponga al contenido
            bottom: 0,
            left: 0,
            right: 0,
            height: 60, // Altura de la barra
          },
          tabBarLabelStyle: {
            fontSize: 12, // Tamaño de fuente para las etiquetas
            marginBottom: 5, // Espaciado inferior para las etiquetas
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Servicios" component={ServiciosScreen} />
        <Tab.Screen name="Contacto" component={ContactoScreen} />
        <Tab.Screen name="Portafolio" component={PortafolioScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
