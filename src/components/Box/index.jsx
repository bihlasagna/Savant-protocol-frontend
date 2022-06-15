import './index.scss';

const Box = ({ children, title }) => {
  return (
    <div className="box-item flex-1">
      {title && (
        <div className="box-title font-bold tracking-wide text-center text-white">
          {title}
        </div>
      )}
      <div className="common-box text-white">{children}</div>
    </div>
  );
};

export default Box;
