import { Anchor } from "../Atoms/Anchor"
import { Button } from "../Atoms/Button"

export const Ctas = ({ type = 'anchor', text = '', href = '#', theme = '', img, altText, target, customClass }) => {
  return (
    <>
      {type === 'anchor' ? (
        <Anchor text={text} type={theme} href={href} img={img} altText={altText} customClass={customClass} target={target} />
      ) : (
        <Button text={text} type={theme} href={href} customClass={customClass} />
      )}
    </>
  )
}