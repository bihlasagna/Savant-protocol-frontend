import Chart from 'components/Chart';
import Spinner from 'components/Spinner';
import './index.scss';

const spinnerData = ['1 W', '1 M', '3 M', '1 Y'];

const Portfolio = () => {
  return (
    <div className="portfolio text-white">
      <div className="portfolio-header flex items-center justify-between">
        <p className="text-bold text-white font-medium text-2xl">PORTFOLIO</p>
        <Spinner data={spinnerData} />
      </div>
      <div className="portfolio-content flex items-center">
        <div className="funds">
          <p className="text-5xl font-semibold mb-12">Ξ3.45</p>
          <p className="text-xs font-medium">TOTAL VALUE</p>
        </div>
        <div className="total-graph">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
