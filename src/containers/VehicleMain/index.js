import VehicleMainHeader from 'components/VehicleMainHeader';
import Spinner from 'components/Spinner';

const spinnerData = ['TREASURY', 'PRICE'];

const VehicleMain = () => {
  return (
    <>
      <VehicleMainHeader />
      <Spinner data={spinnerData} />
    </>
  );
};

export default VehicleMain;
