import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabNavigation} from './bottom-tab-navigation';
import {APP_SCREEN, RootStackParamList} from './screen-types';
import {NotFound} from '@screens/not-found';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarTranslucent: true,
        navigationBarColor: 'transparent',
      }}>
      <RootStack.Group>
        <RootStack.Screen
          name={APP_SCREEN.BOTTOM_TAB_NAV}
          component={BottomTabNavigation}
        />
        <RootStack.Screen name={APP_SCREEN.NOT_FOUND} component={NotFound} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
