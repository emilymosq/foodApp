import React, {useEffect, useCallback} from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, StyleSheet } from 'react-native';
import {useProductViewModel} from "./ViewModel";
import {Product} from "../../../../../domain/entities/Product";
import renderItem from "./ProductItem";

const ClienteCategoryList = () => {
    const { products, getProducts } = useProductViewModel();

    //permite la ejecucion de algo, como una funcion.
    useEffect(() => {
        getProducts();
    }, []);

        if(products.length > 0){
           // const renderItem = useCallback(({item} : {item: Product}) => <renderItem/>, []);
            return(
                <View style={styles.container}>
                    <FlatList
                        data={products}
                        //le da un identificar unico, se renderiza tmb, se pone toString porque el key espera un
                        //valor de string. Si es un numero da error,
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItem}
                        initialNumToRender={10}
                        windowSize={10}
                        //Para optimizar si es true, solo para Android.
                        removeClippedSubviews={true}
                        ListFooterComponent={<Text style={{textAlign: "center"}}>No hay mas productos</Text>}
                    />
                </View>
                )
        } else{
            return (
                <ActivityIndicator size={"large"}></ActivityIndicator>
            )
        }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
});

export default ClienteCategoryList;
