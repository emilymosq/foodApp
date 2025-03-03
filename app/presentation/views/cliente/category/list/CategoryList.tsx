import React from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet } from 'react-native';
import { useProductViewModel } from './ViewModel';
import { Product } from '../../../../../domain/entities/Product';
import {renderItem} from "./ProductItem"; // Importa la interfaz correcta

const ClienteCategoryList = () => {
    const { products } = useProductViewModel();

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
});

export default ClienteCategoryList;
