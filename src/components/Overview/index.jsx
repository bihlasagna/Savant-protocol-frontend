import Button from 'components/Button';
import { Link } from 'react-router-dom';

import './index.scss';

const Overview = () => {
  return (
    <div className="overview flex flex-row justify-between items-center">
      <div className="overview-content">
        <p className="title text-white font-bold">THE FINANCIAL REVOLUTION</p>
        <p className="desc text-white font-medium">
          SAVANT IS THE FIRST EVER END-TO-END TOKENIZED INVESTMENT VEHICLE
          ECOSYSTEM ON THE BLOCKCHAIN.
        </p>
        <div className="overview-buttons">
          <Button special text-white font-bold text-primary>
            Discover
          </Button>
          <Button normal text-white bg-primary font-bold>
            <Link to="/create">Create a TIV</Link>
          </Button>
        </div>
      </div>
      <div className="building-gallery">
        <img src="./assets/images/summerstreet.png" alt="Building Avatar" />
        <div className="caption bg-black">
          <p className="caption-title text-primary font-bold">
            15 SUMMER STREET
          </p>
          <div className="caption-desc text-white flex flex-row justify-center items-center">
            <p>$ 4.06</p>
            <p>23% APY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
