import { useState } from 'react';

const useInput = ({ type, ...etc }) => {
  const [value, setValue] = useState('');
  const input = (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
      {...etc}
    />
  );
  return [value, input];
};

export default useInput;
