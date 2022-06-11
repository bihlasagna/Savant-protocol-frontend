import cx from 'classnames';
import './index.scss';

const Button = ({ children, ...rest }) => {
  const btnClass = cx('button', { ...rest });

  return <button className={btnClass}>{children}</button>;
};

export default Button;
