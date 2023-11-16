import { Background } from "../Atoms/Background";
import { Heading } from "../Atoms/Heading"
import { Ctas } from "../Molecules/Ctas";
import HeroImage from "../../../Assets/Images/hero-bg.jpg"
import ArrowDown from "../../../Assets/Images/arrowdown.webp"

export const Hero = ({ id }) => {
  const blockClass = "hero";

  return (
    <section className={blockClass} id={id}>
      <div className={`${blockClass}__wrapper container`}>
        <Heading
          level="h1"
          cssLevel="h1"
          customClass={blockClass}
          text={'A decade of strategising and designing brands'}
          color='#F6F7F8'
        />
        <Ctas customClass={blockClass} type='anchor' href='#home-intro' theme='icon' img={ArrowDown} altText="Go to next section" />
      </div>
      <Background
        image={HeroImage}
      />
    </section>
  )
}
