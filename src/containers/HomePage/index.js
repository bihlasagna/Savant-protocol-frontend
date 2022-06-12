import TrendingVehicles from 'components/TrendingVehicles';
import Overview from 'components/Overview';
import Resources from 'components/Resources';
import How from 'components/How';

const HomePage = () => {
  return (
    <>
      <Overview />
      <TrendingVehicles />
      <How />
      <Resources />
    </>
  );
};

export default HomePage;
