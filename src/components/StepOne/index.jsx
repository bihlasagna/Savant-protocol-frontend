import { useState } from 'react';
import StepContainer from 'components/StepContainer';
import Dropzone from 'components/Dropzone';

const StepOne = () => {
  return (
    <StepContainer title="BUILD YOUR STORY">
      <div className="company-name mt-10 mb-16">
        <div className="company-name-label font-bold leading-9 mb-8 text-center text-4xl">
          COMPANY NAME
        </div>
        <input type="text" className="company-name-content h-10" />
      </div>
      <div className="company-description mb-16">
        <div className="company-description-label font-bold leading-9 mb-8 text-center text-4xl">
          DESCRIPTION
        </div>
        <textarea type="text" className="company-description-content h-24" />
      </div>
      <div className="company-logo">
        <div className="text-center font-bold leading-9 mb-8 text-4xl">
          LOGO
        </div>
        <Dropzone />
      </div>
      <div className="company-social">
        <div className="text-center font-bold leading-9 mb-8 text-4xl">
          SOCIAL PROFILES
        </div>
      </div>
    </StepContainer>
  );
};

export default StepOne;
