
import { Logo } from '../Molecules/Logo'
import { Menu } from '../Molecules/Menu';

export const Header = () => {
  const blockClass = 'header';
  return (
    <>
      <header className={blockClass}>
        <div className={`${blockClass}__wrapper container`}>
          <Logo />
          <Menu />
        </div>
      </header>
    </>
  )
}
