import { ReactRoutes } from './Routes/ReactRoutes';
import { Background } from './Components/UI/Atoms/Background'
import './Scss/main.scss';

export const App = () => {
  return (
    <>
      <Background />
      <ReactRoutes />
    </>
  )
}
