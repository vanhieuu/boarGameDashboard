import { api } from "./api";

export const apiGetDataCharacters = () => api.onGetDataCharacters().then((res) => res.data);
export const apiGetItems = () => api.onGetItems().then(res => res.data)
export const apiGetCharactersByName = (name:string) => api.onSearchCharacterByName(name).then(res => res.data)
export const apiGetEvent = () => api.onGetEvent().then(res => res.data)