export const Anchor = ({ text, type = '', href, img, altText, customClass = '' }) => {
  const customCssClass = `${customClass}__cta`
  return (
    <>
      {type === 'icon' ? (
        <a href={href} className={`cta cta--${type} ${customCssClass}`}>
          <img src={img} alt={altText} />
        </a>
      ) : (
        <a href={href} className={`cta cta--${type}`}>{text}</a>
      )}
    </>
  )
}
