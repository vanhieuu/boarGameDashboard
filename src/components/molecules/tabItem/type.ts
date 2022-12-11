import { IconTypes } from "../../../assets/icons"

export interface TabItemsProps{
     /**
   * current index of the tab
   * @default 0
   */
    index:number
 /**
   * onPress to navigate to tab
   * 
   */
    onPress:(curTab:any) => void,
     /**
   * iconSource
   * @default undefined
   */
    source:IconTypes,
      /**
   * iconSourceActive
   * @default undefined
   */
       sourceActive:IconTypes,
       /**
   * stateIndex
   * @default -
   */
  stateIndex:number,
        /**
   * textTitle
   * @default -
   * 
   */
  textTitle:string
}