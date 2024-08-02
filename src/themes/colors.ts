import {DefaultTheme} from '@react-navigation/native';

export const ColorLight = {
  ...DefaultTheme.colors,
  secondary: '#212427',
  primary: '#F5F5F5',
} as const;

export const ColorDark = {
  ...DefaultTheme.colors,
  secondary: '#F5F5F5',
  primary: '#212427',
} as const;
