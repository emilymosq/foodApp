import React from "react";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: "10%",
    },
    logo: {
        width: 140,
        height: 140,
        marginHorizontal: 'auto',
        marginTop: "20%",
    },
    loginContainer: {
        backgroundColor: 'white',
        width: '90%',
        paddingVertical: 20,
        paddingHorizontal: 15,
        marginHorizontal: "auto",
        marginTop: 60,
        borderRadius: 10,
    },
    loginText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingBottom: 9,
    },
    formInputContainer: {
        marginBottom: 20,
        marginTop: 20,
    },
    formInput: {
        borderColor: 'gray',
        borderWidth: 1.5,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    botonPersonalizado: {
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    textoBotonPersonalizado: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    }
});

export default styles;