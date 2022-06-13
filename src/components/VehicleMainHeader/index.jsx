import cx from 'classnames';
import './index.scss';
import EstateImage from 'components/EstateImage';

const VehicleMainHeader = () => {
  return (
    <div className="vehicle-main-header flex flex-row">
      <EstateImage />
    </div>
  );
};

export default VehicleMainHeader;
