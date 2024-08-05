import {counterReducer} from '@redux-slice';
import {splashReducer} from '@redux/action-slice/splash';
import {combineReducers} from '@reduxjs/toolkit';

const combinedReducers = combineReducers({
  counter: counterReducer,
  splash: splashReducer,
});

export const allReducer = (state: any, action: any) => {
  //   if (action.type === Actions.LOGOUT) {
  //     state = {app: state.app};
  //   }

  return combinedReducers(state, action);
};

export type RootState = ReturnType<typeof allReducer>;
