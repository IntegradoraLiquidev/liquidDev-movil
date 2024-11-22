import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Modal, Alert } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ContactoScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(''); // Nuevo estado para el asunto
  const [message, setMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    setModalVisible(true); // Muestra el modal cuando se presiona enviar
  };

  const handleAcceptTerms = () => {
    setModalVisible(false); // Cierra el modal
    Alert.alert("Formulario enviado", "Gracias por aceptar los términos.");
    // Aquí puedes manejar el envío del formulario
    console.log('Nombre:', name);
    console.log('Correo electrónico:', email);
    console.log('Asunto:', subject);
    console.log('Mensaje:', message);
    // Resetea los campos
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const handleRejectTerms = () => {
    setModalVisible(false); // Cierra el modal
    Alert.alert("Términos Rechazados", "Debes aceptar los términos para enviar el formulario.");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <FontAwesome5 name="envelope" size={50} color="#003366" />
        </View>
        {/* Title */}
        <Text style={styles.title}>CONTACTO</Text>
        {/* Input for Name */}
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={name}
          onChangeText={setName}
        />
        {/* Input for Email */}
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        {/* Input for Subject */}
        <TextInput
          style={styles.input}
          placeholder="Asunto"
          value={subject}
          onChangeText={setSubject}
        />
        {/* Input for Message */}
        <TextInput
          style={styles.textArea}
          placeholder="Mensaje"
          value={message}
          onChangeText={setMessage}
          multiline={true}
          numberOfLines={4}
        />
        {/* Submit Button */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Modal de Términos y Condiciones */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Términos y Condiciones</Text>
            <Text style={styles.modalText}>
              Por favor, lee y acepta los términos y condiciones para continuar con el envío del formulario.
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.acceptButton} onPress={handleAcceptTerms}>
                <Text style={styles.buttonText}>Aceptar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.rejectButton} onPress={handleRejectTerms}>
                <Text style={styles.buttonText}>Rechazar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollViewContainer: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  logoContainer: { marginTop: 40, marginBottom: 20, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#003366', marginBottom: 30 },
  input: { width: '100%', backgroundColor: '#F2F2F2', borderRadius: 10, padding: 15, marginBottom: 20, borderColor: '#003366', borderWidth: 1 },
  textArea: { width: '100%', backgroundColor: '#F2F2F2', borderRadius: 10, padding: 15, marginBottom: 20, borderColor: '#003366', borderWidth: 1, height: 100 },
  button: { width: '100%', backgroundColor: '#003366', borderRadius: 10, padding: 15, alignItems: 'center' },
  buttonText: { fontSize: 16, color: '#fff', fontWeight: 'bold' },
  modalOverlay: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  modalContainer: { width: '80%', backgroundColor: '#fff', borderRadius: 10, padding: 20, alignItems: 'center' },
  modalTitle: { fontSize: 20, fontWeight: 'bold', color: '#003366', marginBottom: 10 },
  modalText: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
  modalButtons: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  acceptButton: { flex: 1, backgroundColor: '#003366', borderRadius: 10, padding: 10, alignItems: 'center', marginRight: 5 },
  rejectButton: { flex: 1, backgroundColor: '#b22222', borderRadius: 10, padding: 10, alignItems: 'center', marginLeft: 5 },
});

