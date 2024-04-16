import { MenuIcon } from "../Atoms/MenuIcon"
import { useState } from "react";
import { Navigation } from "../Atoms/Navigation";

export const Menu = () => {
  const [menuState, setMenuState] = useState(false);

  const blockClass = 'menu';
  const toogleClass = menuState ? ' open' : ' close';

  const toggleMenu = () => {
    setMenuState(menuState => !menuState);
  }

  return (
    <>
      <nav className={`${blockClass}${toogleClass}`}>
        <Navigation blockClass={blockClass}/>
      </nav>
      <div className={`${blockClass}__backdrop${toogleClass}`}></div>
      <MenuIcon
        onClick={toggleMenu}
        state={menuState}
      />
    </>
  )
}
