export const MenuIcon = ({ onClick, state }) => {
  const blockClass = 'menu-icon'

  return (
    <>
      <button
        aria-label="Open menu navigation"
        className={`${blockClass}${state ? ' open' : ' close'}`}
        onClick={onClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </>
  )
}
