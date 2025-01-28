import React, {useState} from "react";
import {Image, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "./StylesLogin";
import {useNavigation} from "@react-navigation/native";
import {RoundedButton} from "../../components/RoundedButton";
import {FormInput} from "../../components/FormInput";
import viewModel from "./ViewModel";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../../App";

function LoginScreen(){
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  //  const [email, setEmail] = useState<string>("");
  //  const [password, setPassword] = useState<string>("");

    const {email, password, onChangeLogin, login} = viewModel.LoginViewModel();

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