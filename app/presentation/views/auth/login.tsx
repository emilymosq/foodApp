import React from "react";
import {Image, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "./StylesLogin";
import {useNavigation} from "@react-navigation/native";

function LoginScreen(){
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <View>
                <Image source={require("../../../../assets/logo.png")}
                       style={styles.logo}></Image>
                <Text style={styles.titulo}>First App</Text>
            </View>

            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Iniciar Sesión</Text>

                <View style={styles.formInputContainer}>
                    <TextInput style={styles.formInput}
                               placeholder={"Usuario"}
                               keyboardType="default"
                               secureTextEntry={false}
                    ></TextInput>
                </View>

                <View style={styles.formInputContainer}>
                    <TextInput style={styles.formInput}
                               placeholder={"Contraseña"}
                               keyboardType="default"
                               secureTextEntry={true}
                    ></TextInput>
                </View>

                <View>
                    <TouchableOpacity style={styles.botonPersonalizado}
                                      onPress={() => {ToastAndroid.show("Presionado Toast", ToastAndroid.LONG)}}>
                        <Text style={styles.textoBotonPersonalizado}>Entrar</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={{marginTop:30}}
                        onPress={() => {
                            navigation.navigate("RegistroScreen")
                        }}>
                        <Text>Registrarse</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}

export default LoginScreen