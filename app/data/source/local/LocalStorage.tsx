import AsyncStorage from "@react-native-async-storage/async-storage";

export const LocalStorage = () => {

    const save = async (key: string, value: string ) => {
        try {
            await AsyncStorage.setItem(key, value);
        }
        catch (error) {
            console.error("Error en el Save Local Storage" + error);
        }
    }

    const getItem = async (key: string) => {
        try {
            return await AsyncStorage.getItem(key);
        }
        catch (error) {
            console.error("Error en el getItem Local Storage" + error);
        }
    }

    return {
        save,
        getItem
    }

}
