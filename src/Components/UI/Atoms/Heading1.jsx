
export const Heading1 = ({ text, extraClass = '' }) => {
  return (
    <h1 className={`heading-1 ${extraClass}`} >{text}</h1>
  )
}
