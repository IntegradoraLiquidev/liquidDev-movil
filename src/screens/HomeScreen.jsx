import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Animated } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const navigation = useNavigation();
  const fadeAnim = new Animated.Value(0); // Valor inicial para la animación de opacidad

  // Función para autenticar la huella digital
  const handleBiometricAuth = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (!hasHardware || !isEnrolled) {
      Alert.alert("Error", "La autenticación biométrica no está disponible.");
      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Usa tu huella digital para continuar',
    });

    if (result.success) {
      navigation.navigate('Servicios');
    } else {
      Alert.alert("Error", "La autenticación falló.");
    }
  };

  // Animación de entrada para el logo y el título
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <LinearGradient colors={['#003366', '#FFF']} style={styles.background}>
      <View style={styles.container}>
        <Animated.View style={{ ...styles.logoContainer, opacity: fadeAnim }}>
          <FontAwesome5 name="horse-head" size={100} color="#FFF" />
        </Animated.View>
        <Animated.Text style={{ ...styles.title, opacity: fadeAnim }}>Liquid</Animated.Text>
        <Animated.Text style={{ ...styles.subtitle, opacity: fadeAnim }}>Dev</Animated.Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handleBiometricAuth} // Inicia la autenticación biométrica
        >
          <Text style={styles.buttonText}>Usar huella digital</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

// Estilos
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
    transform: [{ scale: 1.2 }],
  },
  title: {
    fontSize: 48,
    color: '#fff', // Amarillo dorado para el título
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  subtitle: {
    fontSize: 24,
    color: '#ffff', // Amarillo dorado para el subtítulo
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#003366', // Azul oscuro para el botón
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    width: '70%',
  },
  buttonText: {
    fontSize: 16,
    color: '#ffff', // Amarillo dorado para el texto del botón
    fontWeight: 'bold',
  },
});
