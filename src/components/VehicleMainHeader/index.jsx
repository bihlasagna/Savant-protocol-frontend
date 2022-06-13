import cx from 'classnames';
import './index.scss';
import EstateImage from 'components/EstateImage';
import EstateMainHeaderContent from 'components/EstateMainHeaderContent';

const VehicleMainHeader = () => {
  return (
    <div className="vehicle-main-header flex flex-row text-white">
      <EstateImage />
      <EstateMainHeaderContent />
    </div>
  );
};

export default VehicleMainHeader;
