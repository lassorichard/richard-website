
import { SwitchButton } from '../Atoms/SwitchButton'
import { Logo } from '../Molecules/Logo'

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__container container">
          <Logo />
          <SwitchButton
            classes= 'header__switch-button switch'
          />
        </div>
      </header>
    </>
  )
}
