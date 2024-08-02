import {counterReducer} from '@redux-slice';
import {combineReducers} from '@reduxjs/toolkit';

const combinedReducers = combineReducers({
  counter: counterReducer,
});

export const allReducer = (state: any, action: any) => {
  //   if (action.type === Actions.LOGOUT) {
  //     state = {app: state.app};
  //   }

  return combinedReducers(state, action);
};

export type RootState = ReturnType<typeof allReducer>;
