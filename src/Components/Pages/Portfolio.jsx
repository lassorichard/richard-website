import { Heading } from "../UI/Atoms/Heading"
import { Background } from "../UI/Molecules/Background";
import { Hero } from "../UI/Organisms/Hero";
import { Showcase } from "../UI/Organisms/Showcase"
import HeroImage from "../../Assets/Images/portfolio-bg.jpg";
import { useEffect } from "react";

export const Portfolio = () => {
  const blockClass = 'portfolio';

  useEffect(() => {
    document.title = "Porfolio | Richard's Website";
  }, []);

  return (
    <main>
      <Hero
        id='portfolio-hero'
        customClass={blockClass}
        justifyContent="center"
        alignContent="end"
        size="medium"
        elements={[
          <Heading
            level="h1"
            cssLevel="h1"
            customClass={blockClass}
            text={'Portfolio'}
            color='#F6F7F8'
          />
        ]}
        background={
          <Background
            image={HeroImage}
            borderBottomRadius={[
              'left',
              'right'
            ]}
          />
        }
      />
      <Showcase
        id='portfolio-showcase'
        background={
          <Background />
        }
      />
    </main>
  )
}