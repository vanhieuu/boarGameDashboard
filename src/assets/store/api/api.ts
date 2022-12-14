import axios from "axios"

const API_URL ='https://6396107ba68e43e418fa099d.mockapi.io/dataMienNguoc'

export const api = {
    onGetData(){
        return axios.get(API_URL)
    }
}

