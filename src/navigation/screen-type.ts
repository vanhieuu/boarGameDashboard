import { Characters, Items } from "../ultils/type"

export enum APP_SCREEN  {
    SPLASH = 'SPLASH',
    HOME_PAGE = 'HOME_PAGE',
    DETAILS_CHARACTERS = 'DETAILS_CHARACTERS',
    LIST_CHARACTERS = 'LIST_CHARACTERS',
    LIST_ITEMS = 'LIST_ITEMS',
    DETAIL_ITEMS = 'DETAIL_ITEMS',
    THIRD_DIMENSION_MODAL_VIEW = '3D_MODAL_VIEW',
    BOTTOM_TAB = 'BOTTOM_TAB',
    GUIDE = 'GUIDE',
    AUTHEN ='AUTHEN',
    UNAUTH ='UNAUTH'
}

export type BottomTabParamsList = {
    [APP_SCREEN.HOME_PAGE]:undefined,
    [APP_SCREEN.LIST_CHARACTERS]:undefined,
    [APP_SCREEN.LIST_ITEMS]:undefined,
    [APP_SCREEN.GUIDE]:undefined
}

export type AuthenScreenParamsList = {
    [APP_SCREEN.DETAILS_CHARACTERS]:{
        characters:Characters
    },
    [APP_SCREEN.DETAIL_ITEMS]:{
        items:Items
    },
    [APP_SCREEN.THIRD_DIMENSION_MODAL_VIEW]:undefined,
    [APP_SCREEN.BOTTOM_TAB]:undefined
}

export type UnAuthenParamsList = {
    [APP_SCREEN.SPLASH]:undefined
}


export type RootStackParamsList = {
   [APP_SCREEN.AUTHEN]: undefined;
   [APP_SCREEN.UNAUTH]:undefined;
} & UnAuthenParamsList & AuthenScreenParamsList