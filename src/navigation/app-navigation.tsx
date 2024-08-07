import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './navigation-service';
import {RootNavigation} from './root-navigator';
import {dispatch, RXStore} from '@utils/redux';
import {appActions} from '@redux-slice';

export const AppContainer = () => {
  useEffect(() => {
    dispatch(appActions.startLoadApp());
  }, []);
  // render
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <RootNavigation />
      <RXStore />
    </NavigationContainer>
  );
};
