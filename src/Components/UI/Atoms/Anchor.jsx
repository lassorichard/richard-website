import { Icons } from "./Icons";

export const Anchor = ({ text, type, href, img, altText, customClass, target }) => {
  const customCssClass = () => {
    return type ? `${customClass}__cta` : '';
  }

  const getType = () => {
    return type ? `cta--${type}` : '';
  }

  switch (type) {
    case 'icon':
      return (
        <a href={href} className={`cta ${getType()} ${customCssClass()}`}>
          <img src={img} alt={altText} />
        </a>
      );
    case 'tertiary':
      return (
        <a href={href} className={`cta ${getType()} ${customCssClass()}`} target={target}>
          <span>{text}</span>
          <Icons iconName="fa-solid fa-arrow-right-long" customClass={customCssClass()} />
        </a>
      );
    default:
      return (
        <a href={href} className={`cta ${getType()} ${customCssClass()}`} target={target}>
          {text}
        </a>
      );
  }
}
