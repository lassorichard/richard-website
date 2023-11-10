import { Background } from "../Atoms/Background";
import { Heading1 } from "../Atoms/Heading1"

export const Hero = () => {
  const blockClass = "hero";

  return (
    <section className={blockClass}>
      <div className={`${blockClass}__wrapper container`}>
        <Heading1
          extraClass={`${blockClass}__title`}
          text={'A decade of strategising and designing brands'}
        />
      </div>
      <Background
        image='https://fastly.picsum.photos/id/339/4752/3168.jpg?hmac=U_eb-zX4p02iRWKyDTGjkCUj6w42cRGinkHolnqPfuc'
        color='#000'
      />
    </section>
  )
}
