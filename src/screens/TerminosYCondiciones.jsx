import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TerminosYCondiciones = ({ onAccept }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Términos y Condiciones</Text>
      <Text style={styles.termsText}>1. Aceptas utilizar esta aplicación bajo tu propio riesgo.</Text>
      <Text style={styles.termsText}>2. Los datos proporcionados serán tratados de acuerdo con la política de privacidad.</Text>
      <Text style={styles.termsText}>3. Esta aplicación no se hace responsable de cualquier mal uso de los datos proporcionados.</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.acceptButton} onPress={() => { navigation.navigate('TerminosYCondiciones'); setModalVisible(false) }} // Usa el nombre correcto
        >
          <Text style={styles.buttonText}>Aceptar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  termsText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    textAlign: 'left',
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  acceptButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default TerminosYCondiciones;
