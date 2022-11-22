

export const Button = ({ text, type = '' }) => {
  return (
    <button className={`btn btn--${type}`}>{text}</button>
  )
}
