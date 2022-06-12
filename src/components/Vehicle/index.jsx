import cx from 'classnames';
import './index.scss';

const Vehicle = ({ name }) => {
  return (
    <div className="vehicle-item">
      <img src={`./assets/images/${name}.png`} alt="Vehicle" />
    </div>
  );
};

export default Vehicle;
