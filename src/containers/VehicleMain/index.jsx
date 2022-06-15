import VehicleMainHeader from 'components/VehicleMainHeader';
import Spinner from 'components/Spinner';
import Progressbar from 'components/Progressbar';
import Chart from 'components/Chart';

const spinnerData = ['TREASURY', 'PRICE'];

const VehicleMain = () => {
  return (
    <>
      <VehicleMainHeader />
      <Spinner data={spinnerData} />
      <Progressbar />
      <Chart />
    </>
  );
};

export default VehicleMain;
