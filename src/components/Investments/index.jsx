import './index.scss';

const Investments = () => {
  return (
    <div className="investments text-white">
      <div className="investments-content">
        <div className="text-center font-normal text-2xl mb-8">INVESTMENTS</div>
        <div className="details">
          <div className="item flex justify-between">
            <div className="first-sector">
              <p>FUNDED</p>
              <p className="text-2xl font-semibold">Ξ0.15</p>
            </div>
            <div className="last-sector">
              <p>2H AGO</p>
              <p className="text-2xl">RAY DAOLIO</p>
            </div>
          </div>
          <div className="item flex justify-between">
            <div className="first-sector">
              <p>FUNDED</p>
              <p className="text-2xl font-semibold">Ξ0.15</p>
            </div>
            <div className="last-sector">
              <p>2H AGO</p>
              <p className="text-2xl">RAY DAOLIO</p>
            </div>
          </div>
          <div className="item flex justify-between">
            <div className="first-sector">
              <p>FUNDED</p>
              <p className="text-2xl font-semibold">Ξ0.15</p>
            </div>
            <div className="last-sector">
              <p>2H AGO</p>
              <p className="text-2xl">RAY DAOLIO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="investments-footer font-medium text-2xl text-center">
        EXPAND
      </div>
    </div>
  );
};

export default Investments;
