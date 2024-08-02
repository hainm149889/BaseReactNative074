import {createRef} from 'react';

import {
  CommonActions,
  NavigationContainerRef,
  NavigationState,
  PartialState,
  Route,
  StackActions,
} from '@react-navigation/native';
import {APP_SCREEN, RootStackParamList} from './screen-types';

export const navigationRef =
  createRef<NavigationContainerRef<RootStackParamList>>();

export function navigate<RouteName extends keyof RootStackParamList>(
  ...arg: undefined extends RootStackParamList[RouteName]
    ?
        | [screen: RouteName]
        | [screen: RouteName, params?: RootStackParamList[RouteName]]
    : [screen: RouteName, params: RootStackParamList[RouteName]]
) {
  if (APP_SCREEN[arg[0]]) {
    navigationRef.current?.navigate(
      arg[0] as any,
      arg.length > 1 ? arg[1] : undefined,
    );
  } else {
    navigationRef.current?.navigate(APP_SCREEN.NOT_FOUND);
  }
}

export function push<RouteName extends keyof RootStackParamList>(
  ...arg: undefined extends RootStackParamList[RouteName]
    ?
        | [screen: RouteName]
        | [screen: RouteName, params?: RootStackParamList[RouteName]]
    : [screen: RouteName, params: RootStackParamList[RouteName]]
) {
  navigationRef.current?.dispatch(
    StackActions.push(arg[0] as any, arg.length > 1 ? arg[1] : undefined),
  );
}

export function replace<RouteName extends keyof RootStackParamList>(
  ...arg: undefined extends RootStackParamList[RouteName]
    ?
        | [screen: RouteName]
        | [screen: RouteName, params?: RootStackParamList[RouteName]]
    : [screen: RouteName, params: RootStackParamList[RouteName]]
) {
  navigationRef.current?.dispatch(
    StackActions.replace(arg[0] as any, arg.length > 1 ? arg[1] : undefined),
  );
}

/**
 * @param screen nếu goBack lỗi thì replace tới name
 */
export function goBack(screen?: APP_SCREEN) {
  if (navigationRef.current?.canGoBack) {
    navigationRef.current?.dispatch(CommonActions.goBack);
  } else {
    replace(screen!);
  }
}

export const popWithStep = (step: number) => {
  navigationRef.current?.dispatch(StackActions.pop(step));
};

export const popToTop = () => {
  navigationRef.current?.dispatch(StackActions.popToTop());
};

type ResetState =
  | PartialState<NavigationState>
  | NavigationState
  | (Omit<NavigationState, 'routes'> & {
      routes: Omit<Route<string>, 'key'>[];
    });

export function reset(params: ResetState) {
  navigationRef.current?.dispatch(CommonActions.reset(params));
}
