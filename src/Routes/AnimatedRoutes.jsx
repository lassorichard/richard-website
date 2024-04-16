import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from '../Components/Pages/Home';
import { Contact } from '../Components/Pages/Contact';
import { AnimatePresence } from 'framer-motion';
import { Header } from '../Components/UI/Organisms/Header';
import { Portfolio } from '../Components/Pages/Portfolio';

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </AnimatePresence>
  )
};