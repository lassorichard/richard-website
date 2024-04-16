import { Ctas } from "../Molecules/Ctas"

export const Navigation = ({ blockClass }) => {
  return (
    <>
      <ul className={`${blockClass}__nav-wrapper`}>
        <li className={`${blockClass}__nav-item`}>
          <Ctas type='anchor' href='/' text='Home' />
        </li>
        <li className={`${blockClass}__nav-item`}>
          <Ctas type='anchor' href='/portfolio' text='Portfolio' />
        </li>
        <li className={`${blockClass}__nav-item`}>
          <Ctas type='anchor' href='/contact' text='Contact' />
        </li>
      </ul>
    </>
  )
}