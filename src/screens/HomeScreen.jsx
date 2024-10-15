import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Alert } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TerminosYCondiciones from './TerminosYCondiciones';

export default function HomeScreen({  }) {
  const [modalVisible, setModalVisible] = useState(true); // Modal visible al iniciar
  const [termsAccepted, setTermsAccepted] = useState(false);

  useEffect(() => {
    const checkTermsAcceptance = async () => {
      const accepted = await AsyncStorage.getItem('termsAccepted');
      if (accepted === 'true') {
        setTermsAccepted(true);
        setModalVisible(true); // Cerrar modal si ya se aceptaron los términos
      } else {
        setModalVisible(true); // Mostrar modal si no se han aceptado los términos
      }
    };

    checkTermsAcceptance();
  }, []);

  const handleAccept = async () => {
    await AsyncStorage.setItem('termsAccepted', 'true'); // Guardar aceptación
    setTermsAccepted(true);
    setModalVisible(false); // Cerrar modal
  };

  const handleReject = () => {
    Alert.alert(
      'Términos Rechazados',
      'Debes aceptar los términos para utilizar todas las funcionalidades de la aplicación.',
      [{ text: 'Aceptar', onPress: () => setModalVisible(true) }] // Reabrir el modal
    );
  };

  const renderTermsModal = () => (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TerminosYCondiciones onAccept={handleAccept} onReject={handleReject} />
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      {/* Modal de Términos y Condiciones */}
      {renderTermsModal()}

      {/* Interfaz principal si se han aceptado los términos */}
      {termsAccepted && (
        <>
          {/* Logo */}
          <View style={styles.logoContainer}>
            <FontAwesome5 name="horse-head" size={100} color="#003366" />
          </View>

          <Text style={styles.title}>Liquid</Text>
          <Text style={styles.subtitle}>Dev</Text>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Servicios')}>
            <Text style={styles.buttonText}>Servicios</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0', // Color de fondo claro
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
    fontSize: 16, // Tamaño de texto más pequeño
    color: '#F2F2F2', // Color claro para el texto del botón
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
});
