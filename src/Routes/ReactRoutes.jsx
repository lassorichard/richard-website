import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../Components/Pages/Home';
import { Budget } from '../Components/Pages/Budget';
import { Header } from '../Components/UI/Organisms/Header';

export const ReactRoutes = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/budget" element={<Budget />} />
          <Route exact path="/contact" element={<Home />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
};