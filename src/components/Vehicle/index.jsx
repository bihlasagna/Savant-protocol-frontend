import cx from 'classnames';
import './index.scss';

const Vehicle = ({ vehicle, index }) => {
  const { title, avatar, total, apy, stablePrice } = vehicle;
  return (
    <div className="vehicle flex flex-row items-center">
      <p className="vehicle-number text-white">{index}</p>
      <div className="vehicle-content flex flex-row items-center">
        <img src={`./assets/images/${avatar}.svg`} alt="Vehicle" />
        <div className="content">
          <p className="vehicle-title text-white">{title}</p>
          <p className="vehicle-stable text-white">{stablePrice}</p>
        </div>
      </div>
      <div className="vehicle-detail">
        <p className="vehicle-total text-white">{total}</p>
        <p className="vehicle-apy text-primary">{apy}</p>
      </div>
    </div>
  );
};

export default Vehicle;
