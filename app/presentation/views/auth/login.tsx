import React, {useEffect, useState} from "react";
import {Image, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "./StylesLogin";
import {useNavigation} from "@react-navigation/native";
import {RoundedButton} from "../../components/RoundedButton";
import {FormInput} from "../../components/FormInput";
import viewModel from "./ViewModel";
import {PropsStackNavigation} from "../../interfaces/StackNav"



export function LoginScreen({navigation, route}: PropsStackNavigation){
  //  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  //  const [email, setEmail] = useState<string>("");
  //  const [password, setPassword] = useState<string>("");

    const {email, password, onChangeLogin, login, errorMessage, user} = viewModel.LoginViewModel();

    useEffect(() => {
        if (errorMessage != "")
            ToastAndroid.show(errorMessage, ToastAndroid.LONG)
    },
        [errorMessage])

    useEffect(() => {
        // En el momento que se abre la ventana esto se ejecuta y se comprueba si hay usuario.
        // También, si se efectua un cambio en su estado se ejecuta y vuelve a comprobar.
        if (user && user?.token) {
            // El navigate te lleva a la siguiente pantalla
            // El replace la reemplaza por la otra pantalla.
            navigation.replace("AdminTabNavigator")
        }
    }, [user]);

    return (
        <View style={styles.container}>

            <View>
                <Image source={require("../../../../assets/logo.png")}
                       style={styles.logo}></Image>
                <Text style={styles.titulo}>First App</Text>
            </View>

            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Iniciar Sesión</Text>

                <FormInput image={require("../../../../assets/email.png")}
                           placeholder={"Correo electrónico"}
                           keyboardType="email-address"
                           secureTextEntry={false}
                           onPressFormInterface={(text) => onChangeLogin('email', text)}
                >
                </FormInput>

                <FormInput image={require("../../../../assets/password.png")}
                           placeholder={"Contraseña"}
                           keyboardType="default"
                           secureTextEntry={true}
                           onPressFormInterface={(text) => onChangeLogin('password', text)}                >
                </FormInput>

               <View>
                    <RoundedButton onPress={() => {
                        login();
                        ToastAndroid.show("Login exitoso", ToastAndroid.SHORT);
                    }} text={"Entrar"} />
               </View>

                <View>
                    <TouchableOpacity style={{marginTop:30}}
                        onPress={() => {
                            navigation.navigate("RegistroScreen");
                        }}>
                        <Text style={styles.textLogin}>Registrarse</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>

    );
}

export default LoginScreen