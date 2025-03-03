import {Button, Image, Text, View, StyleSheet} from "react-native";
import ViewModel from "./ViewModel";
import {PropsStackNavigation} from "../../../interfaces/StackNav";
import {AppFonts} from "../../../themes/AppTheme";
import {InfoProfileItem} from "./InfoProfileItem";
import { RoundedButton } from "../../../components/RoundedButton";


export const ProfileInfoScreen = ({navigation, route}: PropsStackNavigation) => {

    const {deleteSession, user} = ViewModel.ProfileViewModel();

    return (
        <View style={styles.profileContainer}>
            <Image source={require("../../../../../assets/chef.jpg")} style={styles.imageBackground}/>
            <View style={styles.logoContainer}>
                <Image source={require("../../../../../assets/logo.png")} style={styles.logo}/>
            </View>
            <View style={styles.formContainer}>
                <InfoProfileItem image={require("../../../../../assets/user.png")} title={user?.firstName + " " + user?.lastName} text={"Usuario"}/>
                <InfoProfileItem image={require("../../../../../assets/email.png")} title={`${user?.email}`} text={"Correo electronico"}/>
                <InfoProfileItem image={require("../../../../../assets/phone.png")} title={`${user?.phone}`} text={"Telefono"}/>
                <RoundedButton text={"Actualizar informacion"} onPress={()=>navigation.goBack()}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        backgroundColor: "#000",
    },
    imageBackground: {
        width: "100%",
        height: "100%",
        opacity: .7,
        bottom: "30%"
    },
    logoContainer: {
        position: "absolute",
        alignSelf: "center",
        alignItems: "center",
        top: "18%"
    },
    logo:{
        width: 140,
        height: 140
    },
    formContainer: {
        width: "100%",
        height: "40%",
        backgroundColor: "#fff",
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30
    },
})