import { api } from "./api";

export const apiGetData = (id?:string) => api.onGetData().then((res) => res.data);
