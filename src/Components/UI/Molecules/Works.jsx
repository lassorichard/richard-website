import { Image } from "../Atoms/Image"

export const Works = ({ title, href, src, altText }) => {
  const blockClass = "works"

  return (
    <>
      <figure className={blockClass}>
        <a className={`${blockClass}__link`} href={href} rel="noopener">
          <Image src={src} altText={altText} customClass={blockClass} />
        </a>
        <figcaption className={`${blockClass}__title`}>{title}</figcaption>
      </figure>
    </>
  )
}