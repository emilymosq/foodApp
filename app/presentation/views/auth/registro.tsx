import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ToastAndroid} from "react-native";
import styles from "./StylesRegister";
import {useNavigation} from "@react-navigation/native";
import {RoundedButton} from "../../components/RoundedButton";
import {FormInput} from "../../components/FormInput";

function RegisterScreen(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.contenedorimagen}>
                <Image source={require("../../../../assets/logo.png")} style={styles.imagen}></Image>
                <Text style={styles.texto}>Formulario de Registro</Text>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.formTitle}>Registrate</Text>

                <FormInput
                    image={require("../../../../assets/user.png")}
                    placeholder={"Nombre"}
                    keyboardType="default"
                    secureTextEntry={false}
                ></FormInput>

                <FormInput
                    image={require("../../../../assets/my_user.png")}
                    placeholder={"Apellidos"}
                    keyboardType="default"
                    secureTextEntry={false}
                ></FormInput>

                <FormInput
                    image={require("../../../../assets/email.png")}
                    placeholder={"Correo electrónico"}
                    keyboardType="email-address"
                    secureTextEntry={false}
                ></FormInput>

                <FormInput
                    image={require("../../../../assets/phone.png")}
                    placeholder={"Teléfono"}
                    keyboardType="numeric"
                    secureTextEntry={false}
                ></FormInput>

                <FormInput
                    image={require("../../../../assets/password.png")}
                    placeholder={"Contraseña"}
                    keyboardType="default"
                    secureTextEntry={true}
                ></FormInput>

                <FormInput
                    image={require("../../../../assets/confirm_password.png")}
                    placeholder={"Repetir contraseña"}
                    keyboardType="default"
                    secureTextEntry={true}
                ></FormInput>
                <View>
                    <RoundedButton onPress={() => {alert("Bienvenido")}} text={"REGISTRARSE"}/>
                </View>
                <View style={{marginTop: 20}}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("LoginScreen");
                    }}>
                        <Text style={styles.textRegistro}>Iniciar sesión</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default RegisterScreen;