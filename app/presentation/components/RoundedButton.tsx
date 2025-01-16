import React from "react";
import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {AppColors} from "../themes/AppTheme";

interface Props {
    text: string,
    onPress: () => void
}

export const RoundedButton = ({text, onPress}: Props) => {
    return (
        <TouchableOpacity onPress={() => onPress()}
                          style={styles.buttonForm}>
            <Text style={styles.buttonFromText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  buttonForm: {
      backgroundColor: AppColors.primary,
      paddingVertical: 9,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop: 15,
  },
  buttonFromText: {
      color: "#FFF",
      textAlign: "center",
      fontSize: 17,
  }
})

