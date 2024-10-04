import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Pressable } from 'react-native';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';

export default function ServicesScreen() {
  const scrollViewRef = useRef(null);
  const [showArrow, setShowArrow] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleScroll = (event) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const isAtTop = contentOffset.y === 0;
    const isAtBottom = contentOffset.y + layoutMeasurement.height >= event.nativeEvent.contentSize.height;

    setShowArrow(!isAtTop && !isAtBottom);
  };

  const scrollToBottom = () => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  const handleMoreInfo = (service) => {
    setSelectedService(service);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollViewContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.logoContainer}>
          <FontAwesome5 name="horse-head" size={50} color="#003366" />
        </View>

        <Text style={styles.title}>NUESTROS SERVICIOS</Text>

        {/* Botones sin ícono de información */}
        {[
          'Desarrollo de Aplicaciones Móviles Personalizadas',
          'Desarrollo de Aplicaciones Web',
          'Automatización de Procesos Empresariales',
          'Consultoría de Sistemas',
          'Desarrollo de Software a Medida',
          'Integración de APIs',
          'Soporte Técnico y Mantenimiento',
        ].map((service, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => handleMoreInfo(service)}>
            <Text style={styles.buttonText}>{service}</Text>
          </TouchableOpacity>
        ))}

        {showArrow && (
          <TouchableOpacity onPress={scrollToBottom} style={styles.downArrowContainer}>
            <AntDesign name="downcircle" size={24} color="black" style={styles.downArrow} />
          </TouchableOpacity>
        )}
      </ScrollView>

      {/* Modal para más información */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Información sobre: {selectedService}</Text>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={closeModal}>
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  logoContainer: {
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 30,
  },
  card: {
    width: '90%',
    backgroundColor: '#003366', // Fondo azul para las tarjetas
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    transform: [{ scale: 1 }],
    transition: 'transform 0.2s', // Animación para interacción
  },
  cardActive: {
    transform: [{ scale: 1.05 }],
  },
  buttonText: {
    fontSize: 16,
    color: '#fff', // Texto blanco
    textAlign: 'center',
  },
  downArrowContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  downArrow: {
    marginTop: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center', // Centra el modal verticalmente
    alignItems: 'center', // Centra el modal horizontalmente
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro semitransparente
  },
  modalView: {
    width: '80%', // Modal más pequeño
    backgroundColor: '#FFDD57', // Color llamativo para el modal
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
  },
  buttonClose: {
    backgroundColor: '#003366',
    padding: 10,
    borderRadius: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
