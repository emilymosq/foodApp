import { Product } from "../../../../../domain/entities/Product";
import { Image, Text, View, StyleSheet } from "react-native";
import React from "react";

export const renderItem = ({ item }: { item: Product }) => (
    <View style={styles.productoContainer}>
        <View style={styles.info}>
            <Text style={styles.nombre}>{item.name}</Text>
            <Text style={styles.descripcion}>{item.description}</Text>
        </View>
        <View style={styles.imagenContainer}>
            <Image source={{ uri: item.image }} style={styles.imagen} />
            <Text style={styles.precio}>{item.price} €</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    productoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    info: {
        flex: 1,
    },
    nombre: {
        fontSize: 16,
    },
    descripcion: {
        fontSize: 14,
    },
    imagenContainer: {
        alignItems: 'center',
    },
    imagen: {
        width: 70,
        height: 70,
        borderRadius: 40,
    },
    precio: {
        fontSize: 14,
        marginTop: 5,
    },
});
