import cx from 'classnames';
import './index.scss';

const EstateImage = () => {
  return (
    <div className="estate-image">
      <img src="./assets/images/house1.png" alt="Real Estate" />
      <div className="caption bg-black flex flex-row items-center justify-between">
        <p className="text-primary text-xs">CREATED BY</p>
        <p className="text-primary font-bold text-xl">JPM.ETH</p>
      </div>
    </div>
  );
};

export default EstateImage;
