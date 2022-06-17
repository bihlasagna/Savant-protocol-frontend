import Portfolio from 'components/Portfolio';
import Investments from 'components/Investments';
import Governance from 'components/Governance';
import News from 'components/News';

import './index.scss';

const UserInvestment = () => {
  return (
    <div className="user-investment">
      <p className="investment-title text-bold text-white text-4xl">My STORY</p>
      <div className="investment-content">
        <div className="showcase-one flex">
          <Portfolio />
          <Investments />
        </div>
        <Governance />
        <News />
      </div>
    </div>
  );
};

export default UserInvestment;
