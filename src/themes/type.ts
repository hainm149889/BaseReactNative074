import {UnistylesThemes} from 'react-native-unistyles';
import {ShadowDark} from './shadows';

export enum ThemeOptions {
  Light = 'light',
  Dark = 'dark',
  System = 'system',
}

export type Colors = keyof UnistylesThemes['dark']['colors'];
export type Shadows = keyof typeof ShadowDark;
