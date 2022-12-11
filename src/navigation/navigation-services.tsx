/* eslint-disable @typescript-eslint/no-explicit-any */
import {CommonActions, NavigationContainerRef, StackActions} from '@react-navigation/native';
import {createRef} from 'react';
import type { NavigationAction } from '@react-navigation/routers';
import { RootStackParamsList } from './screen-type';



export const navigationRef =
  createRef<NavigationContainerRef<RootStackParamsList>>();

export function navigate<RouteName extends keyof RootStackParamsList>(
  ...arg: undefined extends RootStackParamsList[RouteName]
    ?
        | [screen: RouteName]
        | [screen: RouteName, params?: RootStackParamsList[RouteName]]
    : [screen: RouteName, params: RootStackParamsList[RouteName]]
) {
  navigationRef.current?.navigate(
    arg[0] as any,
    arg.length > 1 ? arg[1] : undefined,
  );
}

export function navigateMerge<RouteName extends keyof RootStackParamsList>(
  options: undefined extends RootStackParamsList[RouteName]
    ? {
        name: RouteName;
        params?: RootStackParamsList[RouteName];
      }
    : {
        name: RouteName;
        params: RootStackParamsList[RouteName];
      },
) {
  navigationRef.current?.navigate({
    key: options?.name!,
    name: options?.name!,
    params: options?.params!,
    merge: true,
  });
}

export function goBack() {
  navigationRef.current?.dispatch(CommonActions.goBack);
}

export function pop(screenCount: number) {
  navigationRef?.current?.dispatch(StackActions.pop(screenCount));
};

export function dispatch(action: NavigationAction) {
  navigationRef.current?.dispatch(action);
}