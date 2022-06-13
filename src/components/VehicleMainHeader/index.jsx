import EstateImage from 'components/EstateImage';
import EstateMainHeaderContent from 'components/EstateMainHeaderContent';
import './index.scss';

/**
 * TODO: Add social icons
 */
const VehicleMainHeader = () => {
  return (
    <>
      <div className="vehicle-main-header">
        <div className="vehicle-main-container flex flex-row text-white">
          <EstateImage />
          <EstateMainHeaderContent />
        </div>
        <div className="social-icons text-white flex flex-row justify-end">
          Here
        </div>
      </div>
    </>
  );
};

export default VehicleMainHeader;
