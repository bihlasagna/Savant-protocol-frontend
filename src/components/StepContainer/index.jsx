import './index.scss';

const StepContainer = ({ title, uploadMetadata, children }) => {
  const handleClick = () => {
    uploadMetadata();
  };

  return (
    <div className="step-container flex flex-col items-center text-white ">
      <div className="step-header font-bold tracking-wide leading-9 text-5xl">
        {title}
      </div>
      <div className="step-content flex flex-col items-center">{children}</div>
      <div className="action-buttons">
        <button className="back">BACK</button>
        <button className="continue text-black" onClick={handleClick}>
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default StepContainer;
