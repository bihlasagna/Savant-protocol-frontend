import './index.scss';

const Progressbar = ({ completed = 80 }) => {
  return (
    <div className="progress-bar inline-flex flex-col">
      <div className="pbar-title text-white">Open Funding</div>
      <div className="content">
        <div className="filled-content"></div>
      </div>
      <div className="progress-details text-white">$110,000/$150,000</div>
    </div>
  );
};

export default Progressbar;
