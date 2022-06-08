import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "layouts/Header";
import Footer from "layouts/Footer";

import HomePage from "containers/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
