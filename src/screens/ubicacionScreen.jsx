import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function UbicacionScreen() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const UTD_COORDS = { latitude: 24.0226, longitude: -104.6587 };

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
            {location && (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                    showsUserLocation
                >
                    <Marker
                        coordinate={UTD_COORDS}
                        title="Universidad Tecnológica de Durango"
                        pinColor="red" // Marcador rojo para la UTD
                    />
                    <Marker
                        coordinate={location.coords}
                        title="Mi ubicación actual"
                        pinColor="blue" // Cambia el color del marcador para la ubicación actual
                    />
                </MapView>
            )}
            <View style={styles.buttonContainer}>
                <Button title="Actualizar ubicación" onPress={obtenerUbicacion} color="#841584" />
            </View>
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
        marginBottom: 10,
    },
    map: {
        width: '100%',
        height: '60%',
    },
    buttonContainer: {
        marginVertical: 20,
        width: '80%',
    },
});
