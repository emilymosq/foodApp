import {StyleSheet} from "react-native";

 const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        backgroundColor:"#000"
    },
    imageBackground: {
        width: "100%",
        height: "100%",
        opacity: .7,
        bottom: "18%",
    },
    logoContainer: {
        position: "absolute",
        alignSelf: "center",
        alignItems: "center",
        top: "18%",
    },
     imageContainer: {
         position: 'absolute',
         alignSelf: 'center',
         justifyContent: 'center',
         top: "18%",
     },
    logo: {
        width: 140,
        height: 140,
    },
    formContainer: {
        width: "100%",
        height: "35%",
        backgroundColor: "#FFF",
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding:30,
    },
     title: {
         fontSize: 18,
         marginTop: 8,
         color: "#fff",
         fontWeight: "bold",
     }
 })
export default styles;