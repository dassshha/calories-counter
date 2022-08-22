import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types/action';
import { CaloriesType } from '../types/calories';

export const updateCalories = createAction<CaloriesType>(ActionType.UpdateCalories);
