
import { Navigation } from '../Atoms/Navigation';
import { Logo } from '../Molecules/Logo'

export const Footer = () => {
  const blockClass = 'footer';

  return (
    <>
      <svg className={`${blockClass}__wave`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
        <path fill="#4c4c4c" fillOpacity="1" d="M0,64L60,69.3C120,75,240,85,360,112C480,139,600,181,720,165.3C840,149,960,75,1080,42.7C1200,11,1320,21,1380,26.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
      <footer className={blockClass}>
        <div className={`${blockClass}__wrapper container`}>
          <Logo blockClass={blockClass} />
          <Navigation blockClass={blockClass} />
          <p className={`${blockClass}__rights`}>©2024 Richard Lasso Website | All Rights Reserved</p>
        </div>
      </footer>
    </>
  )
}
