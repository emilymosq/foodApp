import React from "react";
import {Text, TouchableOpacity, StyleSheet, KeyboardType, TextInput, View, Image} from "react-native";
import {AppColors} from "../themes/AppTheme";

interface Props {
    image: any,
    placeholder: string,
    keyboardType: KeyboardType,
    secureTextEntry: boolean,
    onPressFormInterface: (text: string) => void
}

export const FormInput = ({image, onPressFormInterface, placeholder, keyboardType, secureTextEntry}:Props) => {
    return(
        <View style={styles.formInputContainer}>
            <Image style={styles.formImageInput} source={image}/>
        <TextInput style={styles.formInput}
               placeholder={placeholder}
               secureTextEntry={secureTextEntry}
               keyboardType={keyboardType}
                   onChangeText={(text) => onPressFormInterface(text)}
               ></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    formInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: AppColors.background,
    },
    formInputContainer: {
        flexDirection: "row",
        marginBottom: 20
    },
    formImageInput: {
        width: 25,
        height: 25,
        alignSelf: "center",
        marginRight: 15
    },
})