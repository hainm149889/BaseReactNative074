import React from 'react';

import {useHandleLogin} from '@hooks/use-handle-login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {selectIsMountedSplash} from '@redux-selector';
import {Splash} from '@screens/boot-flash';
import {LoginScreen} from '@screens/login';
import {NotFound} from '@screens/not-found';
import {RegisterScreen} from '@screens/register';
import {useSelector} from 'react-redux';
import {BottomTabNavigation} from './bottom-tab-navigation';
import {APP_SCREEN, RootStackParamList} from './screen-types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  const isMountedSplash = useSelector(selectIsMountedSplash);

  const isLoadedPermission = useHandleLogin();

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarTranslucent: true,
        navigationBarColor: 'transparent',
      }}>
      {!isMountedSplash && (
        <RootStack.Group>
          <RootStack.Screen
            name={APP_SCREEN.SPLASH_SCREEN}
            component={Splash}
          />
        </RootStack.Group>
      )}
      {!isLoadedPermission ? (
        <RootStack.Group
          screenOptions={{
            freezeOnBlur: true,
          }}>
          <RootStack.Screen
            name={APP_SCREEN.LOGIN_SCREEN}
            component={LoginScreen}
          />
          <RootStack.Screen
            name={APP_SCREEN.REGISTER_SCREEN}
            component={RegisterScreen}
          />
        </RootStack.Group>
      ) : (
        <RootStack.Group>
          <RootStack.Screen
            name={APP_SCREEN.BOTTOM_TAB_NAV}
            component={BottomTabNavigation}
          />
          <RootStack.Screen name={APP_SCREEN.NOT_FOUND} component={NotFound} />
        </RootStack.Group>
      )}
    </RootStack.Navigator>
  );
};
