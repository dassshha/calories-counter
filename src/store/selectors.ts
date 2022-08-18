import {StateType} from '../types/state';
import {SelectorKey} from '../const';

export const selector = (key: SelectorKey) => (state: StateType) => state[key];
