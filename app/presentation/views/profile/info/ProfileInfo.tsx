import {Button, Image, Text, View, StyleSheet, TouchableOpacity} from "react-native";
import ViewModel from "./ViewModel";
import {PropsStackNavigation} from "../../../interfaces/StackNav";
import {AppFonts} from "../../../themes/AppTheme";
import {InfoProfileItem} from "./InfoProfileItem";
import { RoundedButton } from "../../../components/RoundedButton";


export const ProfileInfoScreen = ({navigation, route}: PropsStackNavigation) => {

    const {user, deleteSession} = ViewModel.ProfileViewModel();

    return (
        <View style={styles.profileContainer}>
            <Image
                style={styles.imageBackground}
                source={require("../../../../../assets/chef.jpg")}
            ></Image>
            <TouchableOpacity style={styles.logoutContainer}
                              onPress={() => {
                                  deleteSession()
                                  navigation.navigate("LoginScreen")
                              }}>
                <Image style={styles.logout} source={require("../../../../../assets/logout.png")}></Image>
            </TouchableOpacity>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../../../../../assets/logo.png")}/>
            </View>

            <View style={styles.formContainer}>
                <InfoProfileItem
                    image={require("../../../../../assets/user.png")}
                    title={user?.firstName + " " + user?.lastName}
                    text={'Usuario'}
                ></InfoProfileItem>
                <InfoProfileItem
                    image={require("../../../../../assets/email.png")}
                    title={`${user?.email}`}
                    text={'Correo electronico'}
                ></InfoProfileItem>
                <InfoProfileItem
                    image={require("../../../../../assets/phone.png")}
                    title={`${user?.phone}`}
                    text={'Telefono'}
                ></InfoProfileItem>

                <RoundedButton text={"Actualizar información"}
                               onPress={() => { navigation.navigate("ProfileUpdateScreen") }}>
                </RoundedButton>

            </View>

        </View>
    );

}

export const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        backgroundColor:"#000"
    },
    imageBackground: {
        width: "100%",
        height: "100%",
        opacity: .7,
        bottom: "30%",
    },
    logoContainer: {
        position: "absolute",
        alignSelf: "center",
        alignItems: "center",
        top: "18%",
    },
    logo: {
        width: 140,
        height: 140,
    },
    formContainer: {
        width: "100%",
        height: "47%",
        backgroundColor: "#FFF",
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding:30,
    },
    logoutContainer: {
        position: "absolute",
        top: "6%",
        right: 25,
    },
    logout: {
        width: 40,
        height: 40,
    },
})