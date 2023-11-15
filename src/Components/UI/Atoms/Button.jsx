export const Button = ({ text, type = '' }) => {
  return (
    <button className={`cta cta--${type}`}>{text}</button>
  )
}
