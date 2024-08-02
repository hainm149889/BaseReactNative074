import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';

import {listenerMiddleware} from '../listener';
import {allReducer} from './all-reducers';
import {reduxPersistStorage} from '@utils/storage';

/**
 * Use this instead storage of reduxPersist
 */

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: reduxPersistStorage,
    whitelist: ['app', 'authentication'],
  },
  allReducer,
);

const middleware = [] as any[];

export const store = configureStore({
  // reducer: allReducer,
  reducer: persistedReducer,
  devTools: __DEV__,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false})
      .prepend(listenerMiddleware.middleware)
      .concat(middleware),
});

export type AppDispatch = typeof store.dispatch;

export const persistore = persistStore(store, {});
