import { useDispatch } from 'react-redux';

import StepContainer from 'components/StepContainer';
import useInput from 'components/UseInput';

import { uploadMetadataToIPFS } from 'slices/llcSlice.js';
import './index.scss';

const StepTwo = () => {
  const dispatch = useDispatch();

  const [goal, FundingGoalInput] = useInput({
    type: 'text',
    className: 'funding-goal-content h-10',
  });

  const [purpose, PurposeInput] = useInput({
    type: 'textarea',
    className: 'purpose-content h-24',
  });

  const [principalPlace, PrincipalPlaceInput] = useInput({
    type: 'textarea',
    className: 'principal-place-content h-24',
  });

  const [formationDate, FormationDateInput] = useInput({
    type: 'textarea',
    className: 'formation-date-content h-24',
  });

  const uploadMetadata = () => {
    const metadata = {
      goal,
      purpose,
      place: principalPlace,
      date: formationDate,
    };
    dispatch(uploadMetadataToIPFS(metadata));
  };

  return (
    <StepContainer title="CREATE YOUR DETAILS" uploadMetadata={uploadMetadata}>
      <div className="funding-goal mt-10 mb-16">
        <div className="funding-goal-label font-bold leading-9 mb-8 text-center text-4xl tracking-widest">
          FUNDING GOAL
        </div>
        {FundingGoalInput}
      </div>
      <div className="purpose-business mb-16">
        <div className="purpose-business-label font-bold leading-9 mb-8 text-center text-4xl tracking-widest">
          PURPOSE OF THE BUSINESS
        </div>
        {PurposeInput}
      </div>
      <div className="principal-business mb-16">
        <div className="text-center font-bold leading-9 mb-8 text-4xl tracking-widest">
          PRINCIPAL PLACE OF BUSINESS
        </div>
        {PrincipalPlaceInput}
      </div>
      <div className="formation-date mb-16">
        <div className="text-center font-bold leading-9 mb-8 text-4xl tracking-widest">
          FORMATION DATE
        </div>
        {FormationDateInput}
      </div>
      <div className="llc-management mb-16">
        <div className="text-center font-bold leading-9 mb-2 text-4xl tracking-widest">
          LLC MANAGEMENT
        </div>
        <p className="text-center mb-10 tracking-widest">
          THe LLC WILL BE MANAGED BY:
        </p>
        <div className="flex flex-col">
          <div className="llc-option flex flex-row items-center mb-4">
            <input type="checkbox" className="traditional w-10 h-8" />
            <p className=" tracking-widest">MANAGER - MANAGED (TRADITIONAL)</p>
          </div>
          <div className="llc-option flex flex-row items-center">
            <input type="checkbox" className="dao w-10 h-8" />
            <p className=" tracking-widest">MEMBER - MANAGED (DAO)</p>
          </div>
        </div>
      </div>
    </StepContainer>
  );
};

export default StepTwo;
