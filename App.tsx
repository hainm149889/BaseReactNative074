import React, {Suspense} from 'react';
import {AppContainer} from './src/navigation/app-navigation';
import './src/themes';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {PortalProvider} from '@gorhom/portal';
import {ColorLight} from '@theme/colors';
import {store} from '@store/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const MyApp = () => {
  const styles = StyleSheet.create({
    root: {
      flex: 1,
    },
  });

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Suspense
          fallback={
            <ActivityIndicator size="large" color={ColorLight.primary} />
          }>
          <PortalProvider>
            <GestureHandlerRootView style={styles.root}>
              <AppContainer />
            </GestureHandlerRootView>
          </PortalProvider>
        </Suspense>
      </Provider>
    </SafeAreaProvider>
  );
};

export default MyApp;
