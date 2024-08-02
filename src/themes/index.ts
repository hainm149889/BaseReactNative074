import {ColorDark, ColorLight} from './colors';
import {ShadowDark, ShadowLight} from './shadows';
import {Spacing} from './spacings';
import {
  UnistylesRegistry,
  createStyleSheet,
  useStyles,
} from 'react-native-unistyles';
import {textPresets} from './typography';
import {scale} from '@utils/scale';

const spacings: Record<Spacing, number> = {
  [0]: 0,
  [1]: scale(1),
  [2]: scale(2),
  [4]: scale(4),
  [6]: scale(6),
  [8]: scale(8),
  [10]: scale(10),
  [12]: scale(12),
  [14]: scale(14),
  [16]: scale(16),
  [20]: scale(20),
  [22]: scale(22),
  [24]: scale(24),
  [28]: scale(28),
  [32]: scale(32),
  [40]: scale(40),
  [48]: scale(48),
  [56]: scale(56),
} as const;

const LightTheme = {
  type: 'light',
  dark: false,
  colors: ColorLight,
  shadows: ShadowLight,
  spacings,
  textPresets,
};

const DarkTheme = {
  type: 'dark',
  dark: true,
  colors: ColorDark,
  shadows: ShadowDark,
  spacings,
  textPresets,
};

export type AppThemes = {
  light: typeof LightTheme;
  dark: typeof DarkTheme;
};

export type ThemeType = keyof AppThemes;

UnistylesRegistry.addThemes({
  light: LightTheme,
  dark: DarkTheme,
}).addConfig({
  adaptiveThemes: false,
  initialTheme: 'light',
});

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

export {createStyleSheet, useStyles};
