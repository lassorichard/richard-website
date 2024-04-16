import { BrowserRouter } from 'react-router-dom';
import { Footer } from '../Components/UI/Organisms/Footer';
import { AnimatedRoutes } from './AnimatedRoutes';

export const ReactRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
      <Footer />
    </>
  )
};