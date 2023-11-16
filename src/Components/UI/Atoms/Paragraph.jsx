
export const Paragraph = ({ text, size = 'regular', weight = 'regular', customClass = '' }) => {
  const customCssClass = `${customClass}__paragraph`;

  return (
    <p className={`${customCssClass} paragraph paragraph--size-${size} paragraph--weight-${weight}`}>{text}</p>
  )
}
