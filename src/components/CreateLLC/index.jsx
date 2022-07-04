import { useState } from 'react';
import StepOne from 'components/StepOne';

const CreateLLC = () => {
  const [step, setStep] = useState(0);
  return (
    <div className="createllc-container text-white">
      {step === 0 && <StepOne />}
    </div>
  );
};

export default CreateLLC;
