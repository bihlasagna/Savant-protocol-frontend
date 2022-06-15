import './index.scss';

const Box = ({ children, title }) => {
  return (
    <>
      {title && (
        <div className="box-title font-bold tracking-wide text-center">
          {title}
        </div>
      )}
      <div className="common-box">{children}</div>
    </>
  );
};

export default Box;
