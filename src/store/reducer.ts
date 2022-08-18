import {createReducer} from '@reduxjs/toolkit';
import {State} from '../types/state';
import {updateActivity, updateAge, updateGenre, updateHeight, updateWeight} from './actions';

const initialState: State = {
    gender: 'male',
    age: 0,
    height: 0,
    weight: 0,
    activity: 'min'
};

export const reducer = createReducer(initialState, builder => {
    builder.addCase(updateGenre, (state, action) => {
        state.gender = action.payload;
    });
    builder.addCase(updateAge, (state, action) => {
        state.age = action.payload;
    });
    builder.addCase(updateHeight, (state, action) => {
        state.height = action.payload;
    });
    builder.addCase(updateWeight, (state, action) => {
        state.weight = action.payload;
    });
    builder.addCase(updateActivity, (state, action) => {
        state.activity = action.payload;
    });
});
