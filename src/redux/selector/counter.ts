import {RootState} from '@redux/store/all-reducers';
import {createSelector} from '@reduxjs/toolkit';

export const selectIncrement = createSelector(
  (state: RootState) => state.counter,
  counter => counter.value,
);
