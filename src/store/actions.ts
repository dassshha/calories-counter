import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../types/action';

export const updateGenre = createAction<string>(ActionType.UpdateGenre);

export const updateAge = createAction<number>(ActionType.UpdateAge);

export const updateHeight = createAction<number>(ActionType.UpdateHeight);

export const updateWeight = createAction<number>(ActionType.UpdateWeight);

export const updateActivity = createAction<string>(ActionType.UpdateActivity);
