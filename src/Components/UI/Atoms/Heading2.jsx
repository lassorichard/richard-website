
export const Heading2 = ({ text, extraClass = '' }) => {
  return (
    <h2 className={`heading-2 ${extraClass}`} >{text}</h2>
  )
}
