import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ToastAndroid} from "react-native";
import styles from "./StylesRegister";
import {useNavigation} from "@react-navigation/native";
import {RoundedButton} from "../../components/RoundedButton";
import { FormInput } from '../../components/FormInput';
import viewModel from "./ViewModel";
import {RootStackParamList} from "../../../../App";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

function RegistroScreen(){
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const {email, password, firstName, lastName, phone, onChangeRegister, register} = viewModel.RegisterViewModel();
    return(
        <View style={styles.container}>
            <View style={styles.contenedorimagen}>
                <Image source={require("../../../../assets/logo.png")} style={styles.imagen}></Image>
                <Text style={styles.texto}>Aplicación</Text>
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.formTitle}>Registrate</Text>
                <FormInput
                    image={require("../../../../assets/user.png")}
                    placeholder={"Nombre"}
                    keyboardType="default"
                    secureTextEntry={false}
                    onPressFormInterface={(text) => onChangeRegister("firstName", text)}
                ></FormInput>

                <FormInput
                    image={require("../../../../assets/my_user.png")}
                    placeholder={"Apellidos"}
                    keyboardType="default"
                    secureTextEntry={false}
                    onPressFormInterface={(text) => onChangeRegister("lastName", text)}
                ></FormInput>

                <FormInput
                    image={require("../../../../assets/email.png")}
                    placeholder={"Correo electrónico"}
                    keyboardType="email-address"
                    secureTextEntry={false}
                    onPressFormInterface={(text) => onChangeRegister("email", text)}
                ></FormInput>

                <FormInput
                    image={require("../../../../assets/phone.png")}
                    placeholder={"Teléfono"}
                    keyboardType="numeric"
                    secureTextEntry={false}
                    onPressFormInterface={(text) => onChangeRegister("phone", text)}
                ></FormInput>

                <FormInput
                    image={require("../../../../assets/password.png")}
                    placeholder={"Contraseña"}
                    keyboardType="default"
                    secureTextEntry={true}
                    onPressFormInterface={(text) => onChangeRegister("password", text)}
                ></FormInput>
                <View>
                    <RoundedButton onPress={() => {
                        register();
                        ToastAndroid.show("Registro exitoso", ToastAndroid.SHORT);
                    }} text={"REGISTRAR"} />
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

export default RegistroScreen;