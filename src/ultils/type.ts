import { Dimensions, Platform } from "react-native";
export type Characters = {
  id: string;
  name: string;
  type: "Chính diện" | "Phản diện";
  chess: string;
  cover: string;
  image: string;
  description: string;
  mission: string;
  dataMienNguocId: "1";
  typeOf: "Characters";
};
export type Items = {
  id: string;
  name: string;
  type: "exchange" | "material" | "primary";
  image: string;
  inSet: boolean;
  function: string;
  dataMienNguocId: "1";
  typeOf: "Items";
  setName: any;
  usingIn: string;
  isMaterial: boolean;
  combinationRecipe: CombinationType[];
  irlImage: string;
  obtain: ObtainProps[];
  description: string;
};

export type ObtainProps = {
  map:"1" | "2",
  obtain:string
}
export type CombinationType = {
  name: string;
  image: string;
};

export type Data = DataCharacters | DataItems;

export type DataCharacters = {
  type: "Characters";
  data: Characters[];
};
export type DataItems = {
  type: "Items";
  data: Items[];
};
export type EventType = {
  name: string;
  image: string;
  title: string;
  description: string;
  id: string;
  startTime: number;
  endTime: number;
};
export const { width, height } = Dimensions.get("screen");
export const isIos = Platform.OS === "ios";
