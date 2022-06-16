import Button from 'components/Button';
import './index.scss';

const InvestItem = ({ children, title }) => {
  return (
    <>
      <div className="invest-content text-white flex flex-row justify-between mb-6">
        <p>1,000</p>
        <p>USDC</p>
      </div>
      <div className="invest-action flex flex-row justify-between">
        <div className="invest-action-label text-white pl-6">
          24,000 Summer Street Tokens
        </div>
        <Button normal text-bold>
          Invest
        </Button>
      </div>
    </>
  );
};

export default InvestItem;
