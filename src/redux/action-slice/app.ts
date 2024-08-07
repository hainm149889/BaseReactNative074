import Actions from '@redux-action-type';
import {createAction, createSlice} from '@reduxjs/toolkit';
import {SLICE_NAME} from './constant';

const initialAppState = {};

const appSlice = createSlice({
  name: SLICE_NAME.APP,
  initialState: initialAppState,
  reducers: {},
});

const startLoadApp = createAction(Actions.START_LOAD_APP, () => ({
  payload: undefined,
}));

export const appReducer = appSlice.reducer;
export const appActions = {
  ...appSlice.actions,

  startLoadApp,
};
