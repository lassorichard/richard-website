import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../Components/Pages/Home';
import { Header } from '../Components/UI/Organisms/Header';

export const ReactRoutes = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/nosotros" element={<Nosotros />} />
          <Route exact path="/soy-emprendedor" element={<SoyEmprendedor />} />
          <Route exact path="/soy-estudiante" element={<SoyEstudiante />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/terminos-condiciones" element={<TerminosCondiciones />} />
          <Route exact path="/faq" element={<Faq />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
};