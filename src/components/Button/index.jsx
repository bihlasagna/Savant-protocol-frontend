import cx from 'classnames';

const Button = ({ value, ...rest }) => {
  const btnClass = cx('button', { ...rest });

  return <button className={btnClass}>{value}</button>;
};

export default Button;
