// import React, { useState, useEffect } from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { NavigationContainer } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Alert } from 'react-native';
// import HomeScreen from './screens/HomeScreen';
// import ServiciosScreen from './screens/ServiciosScreen';
// import ContactoScreen from './screens/ContactoScreen';
// import PortafolioScreen from './screens/PortafolioScreen';
// import TerminosYCondiciones from './screens/TerminosYCondiciones';

// const Tab = createBottomTabNavigator();

// export default function Navigation() {
//   const [termsAccepted, setTermsAccepted] = useState(false);

//   useEffect(() => {
//     const checkTermsAcceptance = async () => {
//       const accepted = await AsyncStorage.getItem('termsAccepted');
//       setTermsAccepted(accepted === 'true');
//     };
//     checkTermsAcceptance();
//   }, []);

//   const handleAcceptTerms = async () => {
//     await AsyncStorage.setItem('termsAccepted', 'true');
//     setTermsAccepted(true);
//     Alert.alert('Términos aceptados', 'Gracias por aceptar los términos y condiciones.');
//   };

//   return (
//     <NavigationContainer>
//       {!termsAccepted ? (
//         <TerminosYCondiciones onAccept={handleAcceptTerms} />
//       ) : (
//         <Tab.Navigator
//           screenOptions={({ route }) => ({
//             tabBarIcon: ({ color, size }) => {
//               let iconName;
//               if (route.name === 'Home') {
//                 iconName = 'home';
//               } else if (route.name === 'Servicios') {
//                 iconName = 'briefcase';
//               } else if (route.name === 'Portafolio') {
//                 iconName = 'folder';
//               } else if (route.name === 'Contacto') {
//                 iconName = 'mail';
//               }
//               return <Ionicons name={iconName} size={size} color={color} />;
//             },
//             tabBarActiveTintColor: '#003366',
//             tabBarInactiveTintColor: 'gray',
//           })}
//         >
//           <Tab.Screen name="Home" component={HomeScreen} />
//           <Tab.Screen
//             name="Servicios"
//             component={ServiciosScreen}
//             listeners={{
//               tabPress: (e) => {
//                 if (!termsAccepted) {
//                   e.preventDefault();
//                   Alert.alert(
//                     'Acceso Restringido',
//                     'Debes aceptar los términos y condiciones para acceder a esta sección.',
//                     [{ text: 'Aceptar' }]
//                   );
//                 }
//               },
//             }}
//           />
//           <Tab.Screen name="Portafolio" component={PortafolioScreen} />
//           <Tab.Screen
//             name="Contacto"
//             component={ContactoScreen}
//             listeners={{
//               tabPress: (e) => {
//                 if (!termsAccepted) {
//                   e.preventDefault();
//                   Alert.alert(
//                     'Acceso Restringido',
//                     'Debes aceptar los términos y condiciones para acceder a esta sección.',
//                     [{ text: 'Aceptar' }]
//                   );
//                 }
//               },
//             }}
//           />
//         </Tab.Navigator>
//       )}
//     </NavigationContainer>
//   );
// }
