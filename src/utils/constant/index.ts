import {StyleSheet} from 'react-native';

export const HairlineWidth = Math.min(StyleSheet.hairlineWidth, 0.333);
export const ActiveOpacity = 0.8;
export const HitSlop = {
  Large: 16,
  LargeInset: {top: 16, bottom: 16, left: 16, right: 16},
  Medium: 8,
  MediumInset: {top: 8, bottom: 8, left: 8, right: 8},
  Small: 4,
  SmallInset: {top: 4, bottom: 4, left: 4, right: 4},
};
