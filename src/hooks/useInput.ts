import {ChangeEvent} from 'react';
import {useDispatch} from 'react-redux';
import {SelectorKey} from '../const';
import {useAppSelector} from './useAppSelector';
import {Action} from '@reduxjs/toolkit';

const useInput = (key: SelectorKey, cb: (payload: string) => Action) => {
  const value = useAppSelector(key);
  const dispatch = useDispatch();

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(cb(evt.target.value));
  };

  return {
    value,
    onChange: handleChange
  };
}

export {useInput};
