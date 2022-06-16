import Portfolio from 'components/Portfolio';

import './index.scss';

const UserInvestment = () => {
  return (
    <div className="user-investment">
      <p className="investment-title text-bold text-white text-4xl">My STORY</p>
      <div className="investment-content">
        <div className="showcase-one">
          <Portfolio />
        </div>
      </div>
    </div>
  );
};

export default UserInvestment;
