import axios from "axios"

const API_URL ='https://6396107ba68e43e418fa099d.mockapi.io/dataMienNguoc/1'
const API_EVENT = 'https://6396107ba68e43e418fa099d.mockapi.io/event'
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
    }
    
}

