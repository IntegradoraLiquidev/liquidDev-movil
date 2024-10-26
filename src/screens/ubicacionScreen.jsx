// src/screens/UbicacionScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function UbicacionScreen() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const obtenerUbicacion = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permiso de ubicación denegado');
            return;
        }

        const ubicacionActual = await Location.getCurrentPositionAsync({});
        setLocation(ubicacionActual);
    };

    useEffect(() => {
        obtenerUbicacion();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {errorMsg ? errorMsg : location ? `Latitud: ${location.coords.latitude}, Longitud: ${location.coords.longitude}` : "Cargando ubicación..."}
            </Text>
            <Button title="Actualizar ubicación" onPress={obtenerUbicacion} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        marginBottom: 20,
    },
});
