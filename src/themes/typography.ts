import {Platform, StyleSheet} from 'react-native';

export const FontDefault = {
  system: Platform.select({
    ios: 'San Francisco',
    android: 'Roboto',
  }) as string,
};

export const FontWeight = {
  Bold: '700',
  Med: '500',
  Regular: '400',
};

export const FontStyle = {
  Font32: {
    fontFamily: FontDefault.system,
    fontSize: 32,
    lineHeight: 38,
    letterSpacing: 0.15,
  },
  Font24: {
    fontFamily: FontDefault.system,
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0.15,
  },
  Font20: {
    fontFamily: FontDefault.system,
    fontSize: 20,
    lineHeight: 22,
    letterSpacing: 0.15,
  },
  Font16: {
    fontFamily: FontDefault.system,
    fontSize: 16,
    lineHeight: 18,
  },
  Font14: {
    fontFamily: FontDefault.system,
    fontSize: 14,
    lineHeight: 18,
  },
  Font12: {
    fontFamily: FontDefault.system,
    fontSize: 12,
    lineHeight: 16,
  },
  Font10: {
    fontFamily: FontDefault.system,
    fontSize: 10,
    lineHeight: 12,
  },
  Font8: {
    fontFamily: FontDefault.system,
    fontSize: 8,
    lineHeight: 12,
  },
};

export const textPresets = StyleSheet.create(FontStyle);
