import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../Components/Pages/Home';
import { Calculator } from '../Components/Pages/Calculator';
import { Header } from '../Components/UI/Organisms/Header';

export const ReactRoutes = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/calculator" element={<Calculator />} />
          {/* <Route path="*" element='Not found' /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
};