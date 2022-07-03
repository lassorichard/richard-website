
export const Paragraph = ({ text, extraClass = '' }) => {
  return (
    <>
      <p className={`paragraph ${extraClass}`}>
        {text}
      </p>
    </>
  )
}
