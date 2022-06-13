import { useState } from 'react';
import cx from 'classnames';

import './index.scss';

const SpinnerItem = ({ value, initialState = false }) => {
  const [active, setActive] = useState(initialState);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className={cx('spinner-item', { active })} onClick={handleClick}>
      {value}
    </div>
  );
};

export default SpinnerItem;
