import SpinnerItem from 'components/SpinnerItem';

import './index.scss';

const Spinner = ({ data }) => {
  const [firstItem, ...rest] = data;

  return (
    <div className="spinner inline-flex flex-row justify-center items-center">
      <SpinnerItem initialState="true" value={firstItem} />
      {rest.map((item, index) => (
        <SpinnerItem value={item} key={index} />
      ))}
    </div>
  );
};

export default Spinner;
