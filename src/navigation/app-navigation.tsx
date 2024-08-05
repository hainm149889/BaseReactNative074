import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './navigation-service';
import {RootNavigation} from './root-navigator';
import {RXStore} from '@utils/redux';

export const AppContainer = () => {
  // render
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <RootNavigation />
      <RXStore />
    </NavigationContainer>
  );
};
