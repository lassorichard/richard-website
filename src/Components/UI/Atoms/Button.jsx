export const Button = ({ text, type = '', customClass }) => {
  const customCssClass = `${customClass}__cta`

  return (
    <button className={`cta cta--${type} ${customCssClass}`}>{text}</button>
  )
}
