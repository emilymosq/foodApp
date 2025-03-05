import {useUserLocalStorage} from "../../../hooks/useUserLocalStorage";
import * as ImagePicker from "expo-image-picker";
import {useState} from "react";

const ProfileUpdateViewModel = () =>{
    const {user} = useUserLocalStorage();

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        image:""
    });

    const [file, setFile] = useState<ImagePicker.ImagePickerAsset>();

    const pickImage = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: false,
            quality: 1,
            aspect: [4, 3]
        })

        if (!result.canceled) {
            onChange("image", result.assets[0].uri)
            setFile(result.assets[0])
        }
    }


    const takePhoto = async() => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: false,
            quality: 1,
            aspect: [4, 3]
        })

        if (!result.canceled) {
            onChange("image", result.assets[0].uri)
            setFile(result.assets[0])
        }
    }
    const onChange = (property: string, value: any) => {
        setValues({...values, [property]: value});
    }

    return{
        onChange,
        user,
        pickImage,
        takePhoto,
        ...values,
    }
}

export default {ProfileUpdateViewModel};