import React, {Suspense} from 'react';
import {AppContainer} from './src/navigation/app-navigation';
import './src/themes';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ActivityIndicator} from 'react-native';
import {PortalProvider} from '@gorhom/portal';
import {ColorLight} from '@theme/colors';
import {store} from '@store/store';

const MyApp = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Suspense
          fallback={
            <ActivityIndicator size="large" color={ColorLight.primary} />
          }>
          <PortalProvider>
            <AppContainer />
          </PortalProvider>
        </Suspense>
      </Provider>
    </SafeAreaProvider>
  );
};

export default MyApp;
