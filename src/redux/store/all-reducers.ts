import Actions from '@redux-action-type';
import {authenticationReducer, counterReducer} from '@redux-slice';
import {splashReducer} from '@redux/action-slice/splash';
import {combineReducers} from '@reduxjs/toolkit';

const combinedReducers = combineReducers({
  counter: counterReducer,
  splash: splashReducer,
  authentication: authenticationReducer,
});

export const allReducer = (state: any, action: any) => {
  if (action.type === Actions.LOGOUT) {
    state = {app: state.app};
  }

  return combinedReducers(state, action);
};

export type RootState = ReturnType<typeof allReducer>;
