import axios from "axios";


const ApiDelivery = axios.create({
    baseURL: "http://192.168.73.184:8080/api",
    headers: {
        "Content-Type": "application/json"
    }
})
export {ApiDelivery};