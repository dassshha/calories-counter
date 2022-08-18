import {State} from '../types/state';
import {SelectorKey} from '../const';

export const selector = (key: SelectorKey) => (state: State) => state[key];
