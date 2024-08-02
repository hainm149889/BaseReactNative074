import {createAction, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {SLICE_NAME} from './constant';
import {CounterState} from '@redux/type';
import Actions from '@redux-action-type';

const initialState: CounterState = {
  value: 0,
};

const increment = createAction(Actions.INCREMENT, () => ({
  payload: undefined,
}));

const decrement = createAction(Actions.DECREMENT, () => ({
  payload: undefined,
}));

const incrementByAmount = createAction(
  Actions.INCREMENT_BY_AMOUNT,
  (numb: number) => ({
    payload: numb,
  }),
);

export const counterSlice = createSlice({
  name: SLICE_NAME.COUNTER,
  initialState,
  reducers: {
    saveIncrement: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    saveDecrement: state => {
      state.value -= 1;
    },
    saveIncrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const counterActions = {
  ...counterSlice.actions,
  increment,
  decrement,
  incrementByAmount,
};

export const counterReducer = counterSlice.reducer;
