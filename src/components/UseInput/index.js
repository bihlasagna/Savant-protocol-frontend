import { useState } from 'react';

const useInput = ({ type, ...etc }) => {
  const [value, setValue] = useState('');
  const input =
    type === 'input' ? (
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        {...etc}
      />
    ) : (
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...etc}
      />
    );
  return [value, input];
};

export default useInput;
