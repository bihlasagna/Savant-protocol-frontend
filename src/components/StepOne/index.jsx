import { useState } from 'react';
import { useDispatch } from 'react-redux';

import StepContainer from 'components/StepContainer';
import Dropzone from 'components/Dropzone';
import useInput from 'components/UseInput';

import { addMetadata } from 'slices/llcSlice.js';

const StepOne = () => {
  const [llcLogo, setLogo] = useState({});

  const dispatch = useDispatch();

  const [llcName, LLCNameInput] = useInput({
    type: 'text',
    className: 'company-name-content h-10',
  });

  const [llcDesc, LLCDescInput] = useInput({
    type: 'textarea',
    className: 'company-description-content h-24',
  });

  const uploadMetadata = () => {
    const metadata = {
      name: llcName,
      desc: llcDesc,
      file: llcLogo,
    };
    dispatch(addMetadata(metadata));
  };

  return (
    <StepContainer title="BUILD YOUR STORY" uploadMetadata={uploadMetadata}>
      <div className="company-name mt-10 mb-16">
        <div className="company-name-label font-bold leading-9 mb-8 text-center text-4xl">
          COMPANY NAME
        </div>
        {LLCNameInput}
      </div>
      <div className="company-description mb-16">
        <div className="company-description-label font-bold leading-9 mb-8 text-center text-4xl">
          DESCRIPTION
        </div>
        {LLCDescInput}
      </div>
      <div className="company-logo">
        <div className="text-center font-bold leading-9 mb-8 text-4xl">
          LOGO
        </div>
        <Dropzone setLogo={setLogo} />
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
