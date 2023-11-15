import { MenuIcon } from "../Atoms/MenuIcon"
import { useState } from "react";
import { Ctas } from "./Ctas";

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
        <ul className={`${blockClass}__wrapper${toogleClass}`}>
          <li className={`${blockClass}__item`}>
            <Ctas type='anchor' href='/' text='Home' theme='navigation' />
          </li>
          <li className={`${blockClass}__item`}>
            <Ctas type='anchor' href='/budget' text='Portfolio' theme='navigation' />
          </li>
          <li className={`${blockClass}__item`}>
            <Ctas type='anchor' href='/' text='Contact' theme='navigation' />
          </li>
        </ul>
      </nav>
      <div className={`${blockClass}__backdrop${toogleClass}`}></div>
      <MenuIcon
        onClick={toggleMenu}
        state={menuState}
      />
    </>
  )
}
