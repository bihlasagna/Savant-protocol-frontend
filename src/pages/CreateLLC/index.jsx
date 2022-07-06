import { Routes, Route } from 'react-router-dom';
import StepOne from 'components/StepOne';

const CreationPage = () => {
  return (
    <Routes>
      <Route path="/" element={<StepOne />} />
      <Route path="/s1" element={<StepOne />} />
    </Routes>
  );
};

export default CreationPage;
