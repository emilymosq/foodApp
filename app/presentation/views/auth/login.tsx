import React, {useState} from "react";
import {Image, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "./StylesLogin";
import {useNavigation} from "@react-navigation/native";
import {RoundedButton} from "../../components/RoundedButton";
import {FormInput} from "../../components/FormInput";

function LoginScreen(){
    const navigation = useNavigation();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

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
                           onPressFormInterface={(text) => setEmail(text)}
                >
                </FormInput>

                <FormInput image={require("../../../../assets/password.png")}
                           placeholder={"Contraseña"}
                           keyboardType="default"
                           secureTextEntry={true}
                           onPressFormInterface={(text) => setPassword(text)}                >
                </FormInput>

               <View>
                    <RoundedButton onPress={() => {alert("Hola")}} text={"INICIAR SESION"}/>
                </View>

                <View>
                    <TouchableOpacity style={{marginTop:30}}
                        onPress={() => {
                            navigation.navigate("RegisterScreen");
                        }}>
                        <Text style={styles.textLogin}>Registrarse</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>

    );
}

export default LoginScreen