import {Platform, StyleSheet} from 'react-native';

export const ShadowLight = StyleSheet.create({
  '.3': {
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {width: 0, height: 0.3},
    shadowOpacity: 0.25,
    shadowRadius: 0,
    elevation: 1,
  },
  main:
    Platform.OS === 'android'
      ? {
          shadowColor: 'rgb(0,0,0)',
          shadowOffset: {width: 0, height: -4},
          shadowOpacity: 1,
          shadowRadius: 2,
          elevation: 10,
        }
      : {
          shadowColor: 'rgb(176, 176, 176)',
          shadowOffset: {width: 0, height: -0.5},
          shadowOpacity: 0.2,
          shadowRadius: 2,
          elevation: 1,
        },
  small: {
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.16,
    shadowRadius: 2,
    elevation: 2,
  },
  medium: {
    shadowColor: 'rgb(0, 0, 0 )',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 4,
  },
  large: {
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.16,
    shadowRadius: 8,
    elevation: 8,
  },
});

export const ShadowDark = StyleSheet.create({
  '.3': {
    shadowColor: 'rgb(255, 255, 255)',
    shadowOffset: {width: 0, height: 0.3},
    shadowOpacity: 0.25,
    shadowRadius: 0,
    elevation: 1,
  },
  main:
    Platform.OS === 'android'
      ? {
          shadowColor: 'rgb(255, 255, 255)',
          shadowOffset: {width: 1, height: 4},
          shadowOpacity: 1,
          shadowRadius: 2,
          elevation: 10,
        }
      : {
          shadowColor: 'rgb(255, 255, 255)',
          shadowOffset: {width: 0, height: -1},
          shadowOpacity: 1,
          shadowRadius: 2,
          elevation: 1,
        },
  small: {
    shadowColor: 'rgb(255, 255, 255)',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.16,
    shadowRadius: 2,
    elevation: 2,
  },
  medium: {
    shadowColor: 'rgb(255, 255, 255)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 4,
  },
  large: {
    shadowColor: 'rgb(255, 255, 255)',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.16,
    shadowRadius: 8,
    elevation: 8,
  },
});
