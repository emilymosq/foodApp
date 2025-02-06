import React from "react";
import {Text, TouchableOpacity, View, Image, StyleSheet} from "react-native";
import {RoleInterface} from "../../../domain/entities/Role";
import {AppColors} from "../../themes/AppTheme";

interface Props{
    role: RoleInterface;
    width: number;
    height: number;
}

export const RolesItem = ({role, width, height}: Props) => {
    return(
        <TouchableOpacity style={{...styles.container, width: width, height: height}} onPress={() => {}}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: role.image}}/>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{role.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        alignSelf: 'center',
        paddingBottom: 20,
        paddingHorizontal: 7
    },
    imageContainer:{
        flex: 1,
        backgroundColor: "white",
        borderRadius: 18
    },
    image:{
        flex: 1,
        resizeMode: 'contain',
    },
    textContainer:{
        height: 50,
        backgroundColor: AppColors.primary,
        borderBottomRightRadius: 18,
        borderBottomLeftRadius: 18,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: 'white',
    }
})
