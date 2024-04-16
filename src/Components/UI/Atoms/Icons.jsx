export const Icons = ({ iconName = '', fontSize = 16, color = '', customClass }) => {
  const customCssClass = `${customClass}__icon`;

  return <i style={{ fontSize: `${fontSize}px`, color: `${color}` }} className={`icon ${iconName} ${customCssClass}`}></i>
}