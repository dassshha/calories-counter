import {ChangeEvent, useState} from 'react';

// export const useInput = <T>(initialValue: T) => {
//   const [value, setValue] = useState<T>(initialValue);
//
//   const handleChange = (evt: ChangeEvent<any>) => {
//     setValue(evt.target.value as T);
//   };
//
//   const handleReset = () => setValue(initialValue);
//
//   return {
//     value: value as T,
//     onReset: handleReset,
//     onChange: handleChange
//   };
// };

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (evt: ChangeEvent<any>) => {
    setValue(evt.target.value);
  };

  const handleReset = () => setValue(initialValue);

  return {
    value: value,
    onReset: handleReset,
    onChange: handleChange
  };
};
