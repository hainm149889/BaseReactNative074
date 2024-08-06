import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabNavigation} from './bottom-tab-navigation';
import {APP_SCREEN, RootStackParamList} from './screen-types';
import {NotFound} from '@screens/not-found';
import {LoginScreen} from '@screens/login';
import {useSelector} from 'react-redux';
import {selectIsMountedSplash} from '@redux-selector';
import {Splash} from '@screens/boot-flash';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  const isMountedSplash = useSelector(selectIsMountedSplash);

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
      <RootStack.Group>
        <RootStack.Screen
          name={APP_SCREEN.LOGIN_SCREEN}
          component={LoginScreen}
        />
        <RootStack.Screen
          name={APP_SCREEN.BOTTOM_TAB_NAV}
          component={BottomTabNavigation}
        />
        <RootStack.Screen name={APP_SCREEN.NOT_FOUND} component={NotFound} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
