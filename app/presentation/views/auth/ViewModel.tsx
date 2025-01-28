import React, {useState} from "react";
import {ApiDelivery} from "../../../data/source/remote/api/ApiDelivery";
import {ResgisterAuthUseCase} from "../../../domain/useCases/auth/RegisterAuth";
import {LoginAuthUseCase} from "../../../domain/useCases/auth/LoginAuth";

const LoginViewModel = () => {

    /*
    *En property llega email o password.
    * en value llega el valor de input.
    *
    * array[email] = value
    */

    const [values, setValues] = useState({
        email: "",
        password: "",
    })
    const onChangeLogin = (property: string, value: any) => {
        setValues({...values, [property]: value});
    }
    const login = async () =>{
        const response = await LoginAuthUseCase(values)
        console.log("Result: " + JSON.stringify(response))
    }
    return {
        ...values,
        onChangeLogin,
        login
    }
}

const RegisterViewModel = () => {
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

    const register = async () =>{

     //   try{
     //       const data = {
     //           email: values.email,
     //          firstName: values.nombre,
     //           lastName: values.apellidos,
     //           phone: values.telefono,
     //           password: values.password,
     //       }

            const response = await ResgisterAuthUseCase(values)
            console.log("Result: " + JSON.stringify(response))
    }
    return {
        ...values,
        onChangeRegister,
        register,
    }
}

export default {LoginViewModel, RegisterViewModel}