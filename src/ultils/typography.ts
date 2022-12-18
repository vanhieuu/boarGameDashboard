import {Platform} from 'react-native';

export const FontDefault = {
  primary: Platform.select({
    ios: 'Roboto-Regular',
    android: 'Roboto',
  }) as string,
  secondary: Platform.select({
    ios: 'Roboto-Regular',
    android: 'Roboto',
  }) as string,
  bold:Platform.select({
    ios:'Roboto-Bold',
    android:'Roboto-Android-Bold'
  }) as string,
  medium:Platform.select({
    ios:'Roboto-Medium',
    android:'Roboto-Medium'
  }) as string
};
export type FontFamily = keyof typeof FontDefault;
