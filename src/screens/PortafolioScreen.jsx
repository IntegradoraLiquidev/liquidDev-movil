import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importar iconos para el icono de GitHub
// Importar imágenes locales desde assets
import mitImage from '../../assets/mit.jpg'; // Imagen de encabezado
import m1Image from '../../assets/medical1.png'; // Imagen de la primera tarjeta (implemento médico)
import m2Image from '../../assets/food1.png'; // Imagen de la segunda tarjeta
import m3Image from '../../assets/business1.jpg'; // Imagen de la tercera tarjeta
import { Linking } from 'react-native';


export default function PortafolioScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Aplicación Móvil Medics Ruecas",
      description: "Desarrollo de una aplicación móvil para la gestión de inventarios en tiempo real.",
      image: m1Image,
      githubLink: "https://github.com/IreneLeon23/MedicsApp.git",
      sliderImages: [m1Image, /* Agregar más imágenes relacionadas aquí */],
    },
    {
      title: "App Comercial Michuy",
      description: "Aplicación web para la gestión de pedidos en un negocio de comida.",
      image: m2Image,
      githubLink: "https://github.com/Ontiveroshtml/michuy",
    },
    {
      title: "Promocional DiCTSA",
      description: "Aplicación web promocional para contacto y mostrar trabajos realizados.",
      image: m3Image,
      githubLink: "https://github.com/Ontiveroshtml/DiCTSA",
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
      <View style={styles.headerContainer}>
        <Image source={mitImage} style={styles.headerImage} />
        <View style={styles.overlay}>
          <Text style={styles.headerTitle}>Nuestro Portafolio</Text>
        </View>
      </View>

      <Text style={styles.invitationText}>
        Descubre algunos de los proyectos que hemos desarrollado. Estamos comprometidos en ofrecer soluciones tecnológicas de calidad.
      </Text>
      <Text style={styles.invitationText}>
        Descubre algunos de los proyectos que hemos desarrollado. Estamos comprometidos en ofrecer soluciones tecnológicas de calidad.
      </Text>
      <View style={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} onMoreInfo={() => handleMoreInfo(project)} />
        ))}
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {selectedProject && (
              <>
                <ScrollView horizontal>
                  {selectedProject.sliderImages ? selectedProject.sliderImages.map((img, i) => (
                    <Image key={i} source={img} style={styles.modalImage} />
                  )) : <Image source={selectedProject.image} style={styles.modalImage} />}
                </ScrollView>
                <Text style={styles.modalTitle}>{selectedProject.title}</Text>
                <Text style={styles.modalDescription}>{selectedProject.description}</Text>
                <Pressable style={[styles.buttonClose]} onPress={closeModal}>
                  <Text style={styles.textStyle}>Cerrar</Text>
                </Pressable>
              </>
            )}
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
        <TouchableOpacity style={styles.githubButton} onPress={() => { Linking.openURL(project.githubLink); }}>
          <FontAwesome name="github" size={20} color="#000" />
          <Text style={styles.githubText}>GitHub</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  headerContainer: { position: 'relative' },
  headerImage: { width: '100%', height: 200, borderRadius: 10 },
  overlay: {
    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center', borderRadius: 10,
  },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: '#fff' },
  invitationText: { fontSize: 16, color: '#003366', marginVertical: 20, textAlign: 'center' },
  projectsContainer: { flexDirection: 'column', alignItems: 'center' },
  card: {
    flexDirection: 'row', width: '100%', backgroundColor: '#F2F2F2',
    borderRadius: 10, padding: 20, marginVertical: 10, borderColor: '#003366', borderWidth: 1, alignItems: 'center',
  },
  cardImage: { width: 100, height: 100, borderRadius: 10, marginRight: 15 },
  cardContent: { flex: 1 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  cardDescription: { fontSize: 14, color: '#666', marginVertical: 5 },
  button: { backgroundColor: '#003366', padding: 10, borderRadius: 5 },
  buttonText: { color: '#fff', fontSize: 14, textAlign: 'center' },
  githubButton: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  githubText: { fontSize: 14, color: '#003366', marginLeft: 5 },
  centeredView: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalView: { width: '90%', backgroundColor: 'white', borderRadius: 10, padding: 20, alignItems: 'center' },
  modalImage: { width: 300, height: 200, resizeMode: 'contain', marginVertical: 10 },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  modalDescription: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
  buttonClose: { backgroundColor: '#003366', padding: 10, borderRadius: 5 },
  textStyle: { color: '#fff', fontSize: 14, textAlign: 'center' },
});
