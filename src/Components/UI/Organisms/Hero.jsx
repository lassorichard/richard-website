import { Background } from "../Atoms/Background";
import { Heading } from "../Atoms/Heading"
import HeroImage from "../../../Assets/Images/hero-bg.jpg"

export const Hero = () => {
  const blockClass = "hero";

  return (
    <section className={blockClass}>
      <div className={`${blockClass}__wrapper container`}>
        <Heading
          level="h1"
          cssLevel="h1"
          extraClass={`${blockClass}__title`}
          text={'A decade of strategising and designing brands'}
          color='#F6F7F8'
        />
      </div>
      <Background
        image={HeroImage}
      />
    </section>
  )
}
