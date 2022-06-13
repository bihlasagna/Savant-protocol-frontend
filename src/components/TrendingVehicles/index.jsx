import Vehicle from 'components/Vehicle';
import './index.scss';

const trendingVehicles = [
  {
    title: 'NY COLLECTIVE',
    stablePrice: '$34.66',
    total: 'Ξ 1,456.2',
    apy: '+56.2%',
    avatar: 'venture1',
  },
  {
    title: '20 BROAD',
    stablePrice: '$2.67',
    total: 'Ξ 356.1',
    apy: '+9.8%',
    avatar: 'venture2',
  },
  {
    title: 'GVS ABNB',
    stablePrice: '$12.85',
    total: 'Ξ 1,253.6',
    apy: '+14.9%',
    avatar: 'venture3',
  },
];

const TrendingVehicles = () => {
  return (
    <div className="trending-vehicles">
      <div className="title text-5xl font-bold text-white text-center">
        TRENDING VEHICLES
      </div>
      <div className="vehicle-list flex flex-col flex-wrap">
        {trendingVehicles.map((vehicle, index) => (
          <Vehicle index={index + 1} vehicle={vehicle} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TrendingVehicles;
