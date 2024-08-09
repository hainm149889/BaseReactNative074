import {Platform, StyleSheet} from 'react-native';

export const FontDefault = {
  system: Platform.select({
    ios: 'San Francisco',
    android: 'Roboto',
  }) as string,
};

type FontWeight = '400' | '500' | '700';

export const FontWeight: Record<string, FontWeight> = {
  Bold: '700',
  Med: '500',
  Regular: '400',
};

export const FontStyle = {
  Font32Bold: {
    fontFamily: FontDefault.system,
    fontSize: 32,
    lineHeight: 38,
    letterSpacing: 0.15,
    fontWeight: FontWeight.Bold,
  },
  Font32Med: {
    fontFamily: FontDefault.system,
    fontSize: 32,
    lineHeight: 38,
    letterSpacing: 0.15,
    fontWeight: FontWeight.Med,
  },
  Font32Reg: {
    fontFamily: FontDefault.system,
    fontSize: 32,
    lineHeight: 38,
    letterSpacing: 0.15,
    fontWeight: FontWeight.Regular,
  },
  Font24Bold: {
    fontFamily: FontDefault.system,
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0.15,
    fontWeight: FontWeight.Bold,
  },
  Font24Med: {
    fontFamily: FontDefault.system,
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0.15,
    fontWeight: FontWeight.Med,
  },
  Font24Reg: {
    fontFamily: FontDefault.system,
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0.15,
    fontWeight: FontWeight.Regular,
  },
  Font20Bold: {
    fontFamily: FontDefault.system,
    fontSize: 20,
    lineHeight: 22,
    letterSpacing: 0.15,
    fontWeight: FontWeight.Bold,
  },
  Font20Med: {
    fontFamily: FontDefault.system,
    fontSize: 20,
    lineHeight: 22,
    letterSpacing: 0.15,
    fontWeight: FontWeight.Med,
  },
  Font20Reg: {
    fontFamily: FontDefault.system,
    fontSize: 20,
    lineHeight: 22,
    letterSpacing: 0.15,
    fontWeight: FontWeight.Regular,
  },
  Font16Bold: {
    fontFamily: FontDefault.system,
    fontSize: 16,
    lineHeight: 18,
    fontWeight: FontWeight.Bold,
  },
  Font16Med: {
    fontFamily: FontDefault.system,
    fontSize: 16,
    lineHeight: 18,
    fontWeight: FontWeight.Med,
  },
  Font16Reg: {
    fontFamily: FontDefault.system,
    fontSize: 16,
    lineHeight: 18,
    fontWeight: FontWeight.Regular,
  },
  Font14Bold: {
    fontFamily: FontDefault.system,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: FontWeight.Bold,
  },
  Font14Med: {
    fontFamily: FontDefault.system,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: FontWeight.Med,
  },
  Font14Reg: {
    fontFamily: FontDefault.system,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: FontWeight.Regular,
  },
  Font12Bold: {
    fontFamily: FontDefault.system,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: FontWeight.Bold,
  },
  Font12Med: {
    fontFamily: FontDefault.system,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: FontWeight.Med,
  },
  Font12Reg: {
    fontFamily: FontDefault.system,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: FontWeight.Regular,
  },
  Font10Bold: {
    fontFamily: FontDefault.system,
    fontSize: 10,
    lineHeight: 12,
    fontWeight: FontWeight.Bold,
  },
  Font10Med: {
    fontFamily: FontDefault.system,
    fontSize: 10,
    lineHeight: 12,
    fontWeight: FontWeight.Med,
  },
  Font10Reg: {
    fontFamily: FontDefault.system,
    fontSize: 10,
    lineHeight: 12,
    fontWeight: FontWeight.Regular,
  },
  Font8Bold: {
    fontFamily: FontDefault.system,
    fontSize: 8,
    lineHeight: 12,
    fontWeight: FontWeight.Bold,
  },
  Font8Med: {
    fontFamily: FontDefault.system,
    fontSize: 8,
    lineHeight: 12,
    fontWeight: FontWeight.Med,
  },
  Font8Reg: {
    fontFamily: FontDefault.system,
    fontSize: 8,
    lineHeight: 12,
    fontWeight: FontWeight.Regular,
  },
};

export const textPresets = StyleSheet.create(FontStyle);
