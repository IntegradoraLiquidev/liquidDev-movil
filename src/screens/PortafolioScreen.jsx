import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal, Pressable } from 'react-native';

// Importar imágenes locales desde assets
import mitImage from '../../assets/mit.jpg'; // Imagen de encabezado
import m1Image from '../../assets/m1.jpg'; // Imagen de la primera tarjeta
import m2Image from '../../assets/m2.avif'; // Imagen de la segunda tarjeta
import m3Image from '../../assets/m3.jpg'; // Imagen de la tercera tarjeta

export default function PortafolioScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Aplicación Móvil Personalizada",
      description: "Desarrollo de una aplicación móvil para la gestión de inventarios en tiempo real.",
      image: m1Image, // Usar imagen local
    },
    {
      title: "Sistema Web de Finanzas",
      description: "Plataforma web para la gestión de préstamos diarios, integrando gráficos y reportes automáticos.",
      image: m2Image, // Usar imagen local
    },
    {
      title: "Automatización Empresarial",
      description: "Implementación de un sistema automatizado para optimizar procesos empresariales y mejorar la eficiencia.",
      image: m3Image, // Usar imagen local
    },
  ];

  const handleMoreInfo = (project) => {
    setSelectedProject(project);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Imagen con el título sobrepuesto */}
      <View style={styles.headerContainer}>
        <Image
          source={mitImage} // Usar la imagen local de assets
          style={styles.headerImage}
        />
        <View style={styles.overlay}>
          <Text style={styles.headerTitle}>Nuestro Portafolio</Text>
        </View>
      </View>

      {/* Texto de invitación */}
      <Text style={styles.invitationText}>
        Descubre algunos de los proyectos que hemos desarrollado. Estamos comprometidos en ofrecer soluciones tecnológicas de calidad.
      </Text>

      {/* Cards de Proyectos */}
      <View style={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} onMoreInfo={() => handleMoreInfo(project)} />
        ))}
      </View>

      {/* Modal para mostrar más información */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {selectedProject && (
              <>
                <Image source={selectedProject.image} style={styles.modalImage} />
                <Text style={styles.modalTitle}>{selectedProject.title}</Text>
                <Text style={styles.modalDescription}>{selectedProject.description}</Text>
              </>
            )}
            <Pressable style={[styles.buttonClose]} onPress={closeModal}>
              <Text style={styles.textStyle}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

function ProjectCard({ project, onMoreInfo }) {
  return (
    <View style={styles.card}>
      <Image source={project.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{project.title}</Text>
        <Text style={styles.cardDescription}>{project.description}</Text>
        <TouchableOpacity style={styles.button} onPress={onMoreInfo}>
          <Text style={styles.buttonText}>Ver más</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  headerContainer: {
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  invitationText: {
    fontSize: 16,
    color: '#003366', // Color azul del caballo
    marginVertical: 20,
    textAlign: 'center',
  },
  projectsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    borderColor: '#003366', // Azul del caballo
    borderWidth: 1,
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#003366',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro semitransparente
  },
  modalView: {
    width: '80%',
    backgroundColor: '#fff',
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
  modalImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
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
