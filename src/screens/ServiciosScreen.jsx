import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Pressable, Linking, Animated } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ServicesScreen() {
  const scrollViewRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState({});
  const [animatedValue] = useState(new Animated.Value(1));
  
  const services = [
    { name: 'Desarrollo de Aplicaciones Móviles Personalizadas', info: 'Aplicaciones diseñadas para dispositivos móviles según tus necesidades.' },
    { name: 'Desarrollo de Aplicaciones Web', info: 'Web apps rápidas y seguras para tu negocio.' },
    { name: 'Automatización de Procesos Empresariales', info: 'Optimiza procesos y mejora la eficiencia operativa.' },
    { name: 'Consultoría de Sistemas', info: 'Asesoramiento profesional para mejorar tus sistemas.' },
    { name: 'Desarrollo de Software a Medida', info: 'Software personalizado para tus necesidades específicas.' },
    { name: 'Integración de APIs', info: 'Conectamos tus sistemas con soluciones de terceros.' },
    { name: 'Soporte Técnico y Mantenimiento', info: 'Soporte continuo para garantizar el buen funcionamiento.' },
  ];

  const messages = {
    'Desarrollo de Aplicaciones Móviles Personalizadas': 'Hola, estoy interesado en el desarrollo de aplicaciones móviles personalizadas.',
    'Desarrollo de Aplicaciones Web': 'Hola, quiero saber más sobre el desarrollo de aplicaciones web.',
    'Automatización de Procesos Empresariales': 'Hola, me gustaría información sobre la automatización de procesos empresariales.',
    'Consultoría de Sistemas': 'Hola, estoy interesado en sus servicios de consultoría de sistemas.',
    'Desarrollo de Software a Medida': 'Hola, necesito información sobre desarrollo de software a medida.',
    'Integración de APIs': 'Hola, me gustaría saber más sobre la integración de APIs.',
    'Soporte Técnico y Mantenimiento': 'Hola, quiero saber más sobre su soporte técnico y mantenimiento.',
  };

  const handleMoreInfo = (service) => {
    setSelectedService(service);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleWhatsApp = () => {
    const message = messages[selectedService.name];
    const url = `whatsapp://send?text=${encodeURIComponent(message)}&phone=6182064292`;
    Linking.openURL(url).catch(err => console.error("Error al abrir WhatsApp", err));
  };

  const animateButton = () => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1.1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.spring(animatedValue, {
        toValue: 1,
        friction: 2,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.logoContainer}>
          <FontAwesome5 name="horse-head" size={50} color="#003366" />
        </View>
        <Text style={styles.title}>NUESTROS SERVICIOS</Text>
        {services.map((service, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => { handleMoreInfo(service); animateButton(); }}
            activeOpacity={0.7}
          >
            <Animated.View style={{ transform: [{ scale: animatedValue }] }}>
              <Text style={styles.buttonText}>{service.name}</Text>
            </Animated.View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Modal para más información */}
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Información sobre: {selectedService.name}</Text>
            <Text style={styles.modalDescription}>{selectedService.info}</Text>
            <Pressable style={[styles.button, styles.buttonContact]} onPress={handleWhatsApp}>
              <FontAwesome5 name="whatsapp" size={20} color="#FFFFFF" />
              <Text style={styles.contactText}> Contactar por WhatsApp</Text>
            </Pressable>
            <Pressable style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeText}>✖</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.whatsappButton} onPress={handleWhatsApp}>
        <FontAwesome5 name="whatsapp" size={30} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 30,
  },
  card: {
    width: '90%',
    backgroundColor: '#FFFF', // Fondo amarillo
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000', // Sombra para destacar
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#003366',
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  modalDescription: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
    color: '#555',
  },
  button: {
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  buttonContact: {
    backgroundColor: '#25D366',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  contactText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeText: {
    fontSize: 24,
    color: '#003366',
  },
  whatsappButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#25D366',
    borderRadius: 50,
    padding: 10,
    elevation: 5,
  },
});
