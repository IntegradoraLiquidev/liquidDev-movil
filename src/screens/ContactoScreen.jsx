import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ContactoScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(''); // Nuevo estado para el asunto
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Aquí puedes manejar el envío del formulario
    console.log('Nombre:', name);
    console.log('Correo electrónico:', email);
    console.log('Asunto:', subject); // Log para el asunto
    console.log('Mensaje:', message);
    // Resetea los campos
    setName('');
    setEmail('');
    setSubject(''); // Resetea el asunto
    setMessage('');
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
          placeholder="Asunto" // Nuevo campo para el asunto
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
    padding: 20,
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
  input: {
    width: '100%',
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    borderColor: '#003366',
    borderWidth: 1,
  },
  textArea: {
    width: '100%',
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    borderColor: '#003366',
    borderWidth: 1,
    height: 100, // Altura del área de texto
  },
  button: {
    width: '100%',
    backgroundColor: '#003366', // Color azul del caballo
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
