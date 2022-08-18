import {useInput} from '../hooks/use-input';

export type useStringInputType = ReturnType<typeof useInput<string>>;

export type useNumberInputType = ReturnType<typeof useInput<number>>;
