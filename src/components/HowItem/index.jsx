import cx from 'classnames';
import './index.scss';

const HowItem = ({ title, desc, ...rest }) => {
  return (
    <div className={cx('how-item', { ...rest })}>
      <div className="item-title text-primary font-bold text-xl">{title}</div>
      <div className="item-desc text-white">{desc}</div>
    </div>
  );
};

export default HowItem;
