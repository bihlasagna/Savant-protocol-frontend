import Button from 'components/Button';
import './index.scss';

const details = [
  {
    property: 'PRICE',
    value: 'Ξ3.1',
  },
  {
    property: 'TREASURY',
    value: 'Ξ228.1',
  },
  {
    property: 'RANKING',
    value: '13',
  },
  {
    property: 'OWNERS',
    value: '496',
  },
];

const EstateMainHeaderContent = () => {
  return (
    <div className="estate-main-header-content">
      <p className="estate-main-header-title">15 SUMMER STREET</p>
      <div className="estate-main-header-content flex flex-row">
        <p className="desc w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
          tortor vitae sapien lacinia porttitor. Etiam non dignissim dui. Etiam
          metus tortor, commodo nec congue venenatis, ornare sit amet leo.
          Phasellus sed mauris elit. Pellentesque sed pharetra augue.
          Pellentesque sodales molestie purus, in malesuada neque elementum nec.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. In
          laoreet tortor quis neque malesuada, eu semper nisi venenatis.
        </p>
        <div className="details">
          {details.map(({ property, value }, index) => (
            <Button bg-primary text-black font-bold key={index}>
              <div>
                <p className="text-xs">{property}</p>
                <p className="text-3xl">{value}</p>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EstateMainHeaderContent;
