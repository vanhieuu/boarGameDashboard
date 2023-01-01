import axios from "axios"

const API_URL ='https://6396107ba68e43e418fa099d.mockapi.io/dataMienNguoc/1'
const API_EVENT = 'https://6396107ba68e43e418fa099d.mockapi.io/event'
const API_CARD = 'https://63a6a894f8f3f6d4ab0fa1f0.mockapi.io/api/v1/card'
const API_LOCATION = 'https://63a6ac3059fd83b1bb3593d7.mockapi.io/v1/Location'
export const api = {
    onGetDataCharacters(){
        return axios.get(API_URL + '/characters')
    },
    onGetItems(){
        return axios.get(API_URL + '/items')
    },
    onSearchCharactersById(id:string){
        return axios.get(API_URL + `/characters/${id}`)
    },
    onSearchCharacterByName(name:string){
        return axios.get(API_URL + `/characters?name=${name}`)
    },
    onGetEvent(){
        return axios.get(API_EVENT)
    },
    onGetCard(){
        return axios.get(API_CARD)
    },
    onGetLocation(){
        return axios.get(API_LOCATION)
    }
    
}

