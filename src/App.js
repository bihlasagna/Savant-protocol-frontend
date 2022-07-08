import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from 'layouts/Header';
import Footer from 'layouts/Footer';

import HomePage from 'containers/HomePage';
import VehicleMain from 'containers/VehicleMain';
import UserInvestment from 'pages/UserInvestment';
import StepOne from 'components/StepOne';
import StepTwo from 'components/StepTwo';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/vehicle" element={<VehicleMain />}></Route>
        <Route
          exact
          path="/user-investment"
          element={<UserInvestment />}
        ></Route>
        <Route exact path="/create" element={<StepOne />} />
        <Route exact path="/create/s2" element={<StepTwo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
