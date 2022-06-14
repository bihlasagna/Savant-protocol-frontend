import cx from 'classnames';
import SpinnerItem from 'components/SpinnerItem';

import './index.scss';

const Spinner = ({ data }) => {
  const [firstItem, secondItem] = data;

  return (
    <div className="spinner inline-flex flex-row justify-center items-center">
      <SpinnerItem initialState="true" value={firstItem} />
      <SpinnerItem value={secondItem} />
    </div>
  );
};

export default Spinner;
