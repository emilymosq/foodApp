import React, {useEffect, useState} from "react";
import {ApiDelivery} from "../../../data/source/remote/api/ApiDelivery";
import {ResgisterAuthUseCase} from "../../../domain/useCases/auth/RegisterAuth";
import {LoginAuthUseCase} from "../../../domain/useCases/auth/LoginAuth";
import {UserLogin, UserLoginInterface} from "../../../domain/entities/User";
import {saveUserUseCase} from "../../../domain/useCases/userLocal/SaveUser";
import {getUserUseCase} from "../../../domain/useCases/userLocal/GetUser";
import {useUserLocalStorage} from "../../hooks/useUserLocalStorage";

const LoginViewModel = () => {

    /*
    *En property llega email o password.
    * en value llega el valor de input.
    *
    * array[email] = value
    */
    const [errorMessage, setErrorMessage] = useState<string>("")

    const [values, setValues] = useState({
        email: "",
        password: "",
    })

    const {user, getUserSession} = useUserLocalStorage();

    const onChangeLogin = (property: string, value: any) => {
        setValues({...values, [property]: value});
    }

    const login = async () => {
        if (validateForm()) {
            const response = await LoginAuthUseCase(values as UserLoginInterface)
            console.log("Result: " + JSON.stringify(response))
            if (!response.success) {
                setErrorMessage(response.message)
            } else {
                await saveUserUseCase(response.data as UserLogin)
                getUserSession()
            }
        }
    }

    const validateForm = () => {
        if (values.email === "") {
            setErrorMessage("El correo electronico es obligatorio")
            return false;
        }
        if (values.password === "") {
            setErrorMessage("La contraseña es obligatoria")
            return false;
        }
        return true
    }

    return {
        ...values,
        onChangeLogin,
        login,
        errorMessage,
        user
    }
}

const RegisterViewModel = () => {
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [values, setValues] = useState({
        email: "",
        password: "",
  //    repeatPassword: "",
        firstName: "",
        lastName: "",
        phone: "",
    })

    const onChangeRegister = (property: string, value: any) => {
        setValues({...values, [property]: value});
    }

    const register = async () => {

        //   try{
        //       const data = {
        //           email: values.email,
        //          firstName: values.nombre,
        //           lastName: values.apellidos,
        //           phone: values.telefono,
        //           password: values.password,
        //       }

        if (validateForm()) {
        const response = await ResgisterAuthUseCase(values)
        console.log("Result: " + JSON.stringify(response))
        }
    }

    const validateForm = () => {
        if (values.firstName === "") {
            setErrorMessage("El nombre es obligatorio")
            return false;
        }
        if (values.lastName === "") {
            setErrorMessage("El apellido es obligatorio")
            return false;
        }
        if (values.email === "") {
            setErrorMessage("El correo electronico es obligatorio")
            return false;
        }
        if (values.phone === "") {
            setErrorMessage("El número de telefono es obligatorio")
            return false;
        }
        if (values.password === "") {
            setErrorMessage("La contraseña es obligatoria")
            return false;
        }
        return true
    }

    return {
        ...values,
        onChangeRegister,
        register,
        errorMessage
    }
}

export default {LoginViewModel, RegisterViewModel}