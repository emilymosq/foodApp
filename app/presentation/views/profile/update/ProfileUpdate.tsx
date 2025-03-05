import React, {useState} from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {RoundedButton} from "../../../components/RoundedButton";
import {PropsStackNavigation} from "../../../interfaces/StackNav";
import {ModalPickImage} from "../../../components/ModalPickImage";
import viewModel from "./ViewModel";
import styles from "./StylesProfile";
import { FormInput } from "../../../components/FormInput";

export const InfoUpdateScreen = ({navigation, route}: PropsStackNavigation) => {

    const {
        onChange,
        user,
        pickImage,
        takePhoto,
        firstName,
        lastName,
        phone,
        image
    } = viewModel.ProfileUpdateViewModel();

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.profileContainer}>
            <Image
                style={styles.imageBackground}
                source={require("../../../../../assets/city.jpg")}
            ></Image>
            <View style={styles.imageContainer}>;
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    {
                        image != ''
                            ?
                            <Image
                                style={styles.logo}
                                source={{uri: image}}>
                            </Image>
                            :
                            <Image
                                style={styles.logo}
                                source={require("../../../../../assets/user_image.png")}>
                            </Image>
                    }
                </TouchableOpacity>
                <Text style={styles.title}>Seleccione una imagen</Text>
            </View>

            <View style={styles.formContainer}>
                <FormInput
                    image={require("../../../../../assets/user.png")}
                    placeholder={user?.firstName + ""}
                    keyboardType={"default"}
                    secureTextEntry={false}
                    onPressFormInterface={text => {onChange("firstName", text)}}>
                </FormInput>

                <FormInput
                    image={require("../../../../../assets/my_user.png")}
                    placeholder={user?.lastName + ""}
                    keyboardType={"default"}
                    secureTextEntry={false}
                    onPressFormInterface={text => {onChange("lastName", text)}}>
                </FormInput>

                <FormInput
                    image={require("../../../../../assets/phone.png")}
                    placeholder={user?.phone + ""}
                    keyboardType={"phone-pad"}
                    secureTextEntry={false}
                    onPressFormInterface={text => {onChange("phone", text)}}>
                </FormInput>

                <RoundedButton
                    text={"Actualizar"}
                    onPress={() => {  }}></RoundedButton>
            </View>


            <ModalPickImage openGallery={pickImage} openCamera={takePhoto} modalUseState={modalVisible} setModalUseState={setModalVisible}></ModalPickImage>
        </View>
    );

}
