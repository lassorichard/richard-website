import { Anchor } from "../Atoms/Anchor"
import { Button } from "../Atoms/Button"

export const Ctas = ({ type = 'anchor', text = '', href = '#', theme = 'primary' }) => {
  return (
    <>
      {type === 'anchor' ? (
        <Anchor text={text} type={theme} href={href} />
      ) : (
        <Button text={text} type={theme} href={href} />
      )}
    </>
  )
}