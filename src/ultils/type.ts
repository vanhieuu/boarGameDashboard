export type Characters = {

    id:string,
    name:string,
    type:"Chính diện" | "Phản diện",
    chess:string,
    cover:string,
    image:string,
    description:string,
    mission:string,
    dataMienNguocId:"1"
}
export type Items = {
    id:string,
    name:string,
    type:string,
    image:string,
    inSet:boolean,
    function:string, 
    dataMienNguocId:"1"
}
export type Data = DataCharacters | DataItems

export type DataCharacters = {
    type:"Characters",
    data:Characters[]
}
export type DataItems = {
    type:"Items",
    data:Items[]
}