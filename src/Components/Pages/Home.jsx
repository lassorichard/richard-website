import { Heading } from "../UI/Atoms/Heading";
import { Paragraph } from "../UI/Atoms/Paragraph";
import { Column } from "../UI/Molecules/Column";
import { Ctas } from "../UI/Molecules/Ctas";
import { Hero } from "../UI/Organisms/Hero";
import { Showcase } from "../UI/Organisms/Showcase";
import { TwoColumns } from "../UI/Organisms/TwoColumns";
import { Background } from "../UI/Molecules/Background";
import { motion } from "framer-motion";
import { Astronaut } from "../UI/Atoms/Astronaut";
import ArrowDown from "../../Assets/Images/arrowdown.webp"

export const Home = () => {
  const blockClass = "home"

  return (
    <>
      <motion.main
        className={blockClass}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ transition: { duration: 0.1 } }}
      >
        <Hero
          id='home-hero'
          customClass={blockClass}
          alignContent="center"
          elements={[
            <Heading
              level="h1"
              cssLevel="h1"
              customClass={blockClass}
              text={"Hi, I'm Richard, web Developer"}
              color='#F6F7F8'
            />,
            <Ctas
              customClass={blockClass}
              type='anchor'
              href='#home-intro'
              theme='icon'
              img={ArrowDown}
              altText="Go to next section" />

          ]}
          background={
            <Background
              color='#000020'
              stars={true}
              borderBottomRadius={[
                'left',
                'right'
              ]}
            />
          }
          animation={
            <Astronaut />
          }
        />
        <TwoColumns
          id='home-intro'
          backgroundColor='#f9f9f9'
          firstColumnElements={[
            <Column
              elements={[
                <Heading
                  level="h2"
                  cssLevel="h2"
                  customClass='two-columns'
                  text='Hello.'
                />]}
              customClass='two-columns'
            />
          ]}
          secondColumnElements={[
            <Column
              elements={[
                <Paragraph
                  text='Hey there, wanderer of the web! Welcome to my digital playground. My name is Richard Lasso, your friendly neighborhood Front End Developer, here to craft immersive online experiences that captivate and inspire. With a passion for pixels and a knack for code, I bring ideas to life, one line at a time.'
                  weight="bold"
                  customClass='two-columns'
                />,
                <Paragraph
                  text="As you journey through these virtual corridors, you'll discover a world where creativity knows no bounds and innovation reigns supreme. From sleek user interfaces to interactive web applications, I thrive on pushing the boundaries of what's possible in the digital realm."
                  customClass='two-columns'
                />,
                <Ctas
                  type="anchor"
                  text="Get in touch"
                  href="/contact/"
                  theme="primary"
                  customClass='two-columns'
                />
              ]}
              customClass='two-columns'
            />
          ]}
        />
        <Showcase
          id='home-showcase'
          viewAllButton={true}
          heading={
            <Heading
              level="h2"
              cssLevel="h1"
              customClass='showcase'
              text={'Showcase'}
              color="#f9f9f9"
            />
          }
          background={
            <Background
              color="#4c4c4c"
              borderTopRadius={[
                'left',
                'right'
              ]}
              borderBottomRadius={[
                'left',
                'right'
              ]}
            />
          }
        />
        <TwoColumns
          id='home-contact-banner'
          backgroundColor='#d7d7d7d'
          firstColumnElements={[
            <Column
              elements={[
                <Heading
                  level="h2"
                  cssLevel="h2"
                  customClass='two-columns'
                  text='Contact me.'
                />]}
              customClass='two-columns'
            />
          ]}
          secondColumnElements={[
            <Column
              elements={[
                <Paragraph
                  text="Ready to take the next step? Don't hesitate to reach out! Whether you have a project in mind, a question about my work, or just want to say hello, I'd love to hear from you. Feel free to explore my CV or connect with me on social media using the buttons below. Let's start the conversation and turn your ideas into reality!"
                  customClass='two-columns'
                />,
                <Ctas
                  type="anchor"
                  text="Get in touch"
                  href="/contact/"
                  theme="primary"
                  customClass='two-columns'
                />
              ]}
              customClass='two-columns'
            />
          ]}
        />
      </motion.main>
    </>
  )
}
