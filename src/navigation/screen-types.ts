import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum APP_SCREEN {
  BOTTOM_TAB_NAV = 'BOTTOM_TAB_NAV',
  HOME_SCREEN = 'HOME_SCREEN',
  PROFILE_SCREEN = 'PROFILE_SCREEN',
  NOT_FOUND = 'NOT_FOUND',
  LOGIN_SCREEN = 'LOGIN_SCREEN',
  SPLASH_SCREEN = 'SPLASH_SCREEN',
  REGISTER_SCREEN = 'REGISTER_SCREEN',
}

export type RootStackParamList = {
  [APP_SCREEN.BOTTOM_TAB_NAV]: undefined;
  [APP_SCREEN.HOME_SCREEN]: undefined;
  [APP_SCREEN.PROFILE_SCREEN]: undefined;
  [APP_SCREEN.NOT_FOUND]: undefined;
  [APP_SCREEN.LOGIN_SCREEN]: undefined;
  [APP_SCREEN.SPLASH_SCREEN]: undefined;
  [APP_SCREEN.REGISTER_SCREEN]: undefined;
};

export type StackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
