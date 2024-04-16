export const Image = ({ src, altText, customClass = '' }) => {
  const customCssClass = `${customClass}__img`

  return (
    <>
      <img src={src} alt={altText} className={`img ${customCssClass}`} />
    </>
  )
}
