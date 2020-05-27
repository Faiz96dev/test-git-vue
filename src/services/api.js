import * as axios from "axios";



const instance = axios.create({
    withCredentials: false,
    baseURL: 'https://api.github.com',
})

export const API = {

    list() {
        return instance.get(`/users`)
    },
    info(payload){
        return instance.get(`/users/${payload}`)
    }

}
