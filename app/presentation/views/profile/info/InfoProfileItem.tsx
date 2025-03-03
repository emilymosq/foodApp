import React from "react";
import {Image, View, Text, StyleSheet} from "react-native";
import { AppColors } from "../../../themes/AppTheme";

interface Props{
    image: any,
    title: string,
    text: string,
}

export const InfoProfileItem = ({image, title, text}: Props) => {
    return (
        <View style={styles.formInfo}>
            <Image source={image} style={styles.formImage}/>
            <View style={styles.formContent}>
                <Text style={styles.formTextTitle}>{title}</Text>
                <Text style={styles.formTextDescription}>{text}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    formInfo: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom:30
    },
    formImage: {
        width: 40,
        height: 40
    },
    formContent:{
        marginLeft: 15
    },
    formTextTitle:{
        fontSize: 16,
    },
    formTextDescription:{
        fontSize: 13,
        color: AppColors.secondary,
        marginTop: 3,
    }
})