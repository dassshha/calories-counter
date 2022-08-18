import {ChangeEvent, useState} from 'react';
import {useDispatch} from 'react-redux';
import {SelectorKey} from '../const';
import {useAppSelector} from './use-app-selector';
import {Action} from '@reduxjs/toolkit';
import {Dispatch} from 'react';
import {SetStateAction} from 'react';
import {isStringObject} from 'util/types';

// const useInput = (key: SelectorKey, cb: (payload: string) => Action) => {
//   const value = useAppSelector(key);
//   const dispatch = useDispatch();
//
//   const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
//     dispatch(cb(evt.target.value));
//   };
//
//   return {
//     value,
//     onChange: handleChange
//   };
// }


export const useInput = <T>(initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);

  const handleChange = (evt: ChangeEvent<any>) => {
    setValue(evt.target.value);
  };

  return {
    value: value as T,
    onChange: handleChange
  };
};

// export function useInput<T>(
//     initialValue: T
// ){
//   const [value, setValue] = useState<T>(initialValue);
//
//   const reset = () => {
//     setValue(initialValue);
//   };
//
//   const bind = {
//     value,
//     onChange: (e: ChangeEvent<HTMLInputElement>) => {
//       setValue(e.target.value);
//     }
//   };
//
//   return [value, bind, reset];
// }
