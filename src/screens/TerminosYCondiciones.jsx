import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';

const TerminosYCondiciones = ({ onAccept, onReject }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Términos y Condiciones</Text>
      <Text style={styles.sectionTitle}>1. Introducción</Text>
      <Text style={styles.text}>
        Bienvenido a liquidDev. Al utilizar nuestra aplicación, usted acepta cumplir y estar sujeto a 
        los siguientes términos y condiciones. Si no está de acuerdo con alguna parte de estos 
        términos, por favor, no utilice nuestra aplicación.
      </Text>
      
      <Text style={styles.sectionTitle}>2. Descripción de Servicios</Text>
      <Text style={styles.text}>
        liquidDev desarrolla aplicaciones web y móviles con el propósito de gestionar inventarios, 
        optimizar operaciones comerciales y ofrecer soluciones publicitarias. Todos los servicios 
        proporcionados a través de esta aplicación están destinados exclusivamente para uso 
        informativo y profesional.
      </Text>

      <Text style={styles.sectionTitle}>3. Uso Aceptable</Text>
      <Text style={styles.text}>
        Al utilizar esta aplicación, usted se compromete a:
      </Text>
      <Text style={styles.text}>
        • No utilizar nuestros servicios para actividades ilegales.
      </Text>
      <Text style={styles.text}>
        • No copiar, modificar o distribuir nuestros contenidos sin autorización.
      </Text>
      <Text style={styles.text}>
        • No intentar acceder sin permiso a nuestros sistemas o datos.
      </Text>

      <Text style={styles.sectionTitle}>4. Propiedad Intelectual</Text>
      <Text style={styles.text}>
        Todo el contenido, diseño, imágenes, logos, y otros elementos pertenecen a liquidDev. 
        Cualquier uso no autorizado de estos materiales está prohibido.
      </Text>

      <Text style={styles.sectionTitle}>5. Limitación de Responsabilidad</Text>
      <Text style={styles.text}>
        liquidDev no es responsable por pérdidas o daños, directos o indirectos, que resulten del 
        uso o incapacidad de utilizar nuestra aplicación, incluyendo, sin limitación, daños por la 
        pérdida de datos o interrupciones del servicio.
      </Text>

      <Text style={styles.sectionTitle}>6. Actualizaciones</Text>
      <Text style={styles.text}>
        Nos reservamos el derecho de modificar estos términos y condiciones en cualquier 
        momento. Las actualizaciones se publicarán en nuestra aplicación y es su responsabilidad 
        revisarlas periódicamente.
      </Text>

      <Text style={styles.sectionTitle}>7. Política de Privacidad</Text>
      <Text style={styles.text}>
        Al utilizar nuestra aplicación, acepta que recopilemos y utilicemos su información personal 
        de acuerdo con nuestra Política de Privacidad.
      </Text>

      <Text style={styles.sectionTitle}>8. Contacto</Text>
      <Text style={styles.text}>
        Si tiene preguntas sobre estos términos, puede contactarnos en 
        contactoliquidev@gmail.com
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onAccept}>
          <Text style={styles.buttonText}>Aceptar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onReject}>
          <Text style={styles.buttonText}>Rechazar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F0F0F0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#003366',
    borderRadius: 5,
    padding: 10,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#F2F2F2',
    fontSize: 16,
  },
});

export default TerminosYCondiciones;
