import VehicleMainHeader from 'components/VehicleMainHeader';
import Spinner from 'components/Spinner';
import Progressbar from 'components/Progressbar';
const spinnerData = ['TREASURY', 'PRICE'];

const VehicleMain = () => {
  return (
    <>
      <VehicleMainHeader />
      <Spinner data={spinnerData} />
      <Progressbar />
    </>
  );
};

export default VehicleMain;
