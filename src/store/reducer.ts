import { createReducer } from '@reduxjs/toolkit';
import { StateType } from '../types/state';
import { updateCalories } from './actions';

const initialState: StateType = {
  min: 0,
  norm: 0,
  max: 0,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(updateCalories, (state, action) => {
    state.min = action.payload.min;
    state.norm = action.payload.norm;
    state.max = action.payload.max;
  });
});
