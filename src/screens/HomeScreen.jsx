import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <FontAwesome5 name="horse-head" size={100} color="#003366" />
      </View>

      <Text style={styles.title}>Liquid</Text>
      <Text style={styles.subtitle}>Dev</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Servicios')}>
        <Text style={styles.buttonText}>Servicios</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0', // Nuevo color de fondo claro
  },
  logoContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 48, // Tamaño más grande
    color: '#003366', // Color del texto
    fontWeight: 'bold', // Negrita
    fontStyle: 'italic', // Cursiva
  },
  subtitle: {
    fontSize: 24, // Tamaño del subtítulo
    color: '#003366', // Color del texto
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#003366', // Color azul para el botón
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    width: '70%', // Ancho del botón
  },
  buttonText: {
    fontSize: 18,
    color: '#F2F2F2', // Color claro para el texto del botón
  },
});
