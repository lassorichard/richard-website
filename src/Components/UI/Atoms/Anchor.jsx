export const Anchor = ({ text, type = '', href }) => {
  return (
    <a href={href} className={`cta cta--${type}`}>{text}</a>
  )
}
