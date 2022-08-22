import { ChangeEvent, useState } from 'react';
import { useInputType } from '../types/use-input';

export const useInput = (initialValue: string): useInputType => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (evt: ChangeEvent<any>): void => {
    setValue(evt.target.value);
  };

  const handleReset = (): void => setValue(initialValue);

  return {
    value,
    onReset: handleReset,
    onChange: handleChange,
  };
};
