import { Background } from "../UI/Molecules/Background"
import { Heading } from "../UI/Atoms/Heading"
import { Icons } from "../UI/Atoms/Icons"
import { Paragraph } from "../UI/Atoms/Paragraph"
import { Column } from "../UI/Molecules/Column"
import { Ctas } from "../UI/Molecules/Ctas"
import { Hero } from "../UI/Organisms/Hero"
import { ThreeColumns } from "../UI/Organisms/ThreeColumns"
import ContactImage from "../../Assets/Images/contact-bg.jpg"
import CV from "../../Assets/Files/cv.pdf"
import { motion } from "framer-motion";
import { useEffect } from "react"

export const Contact = () => {
  const blockClass = "contact"

  useEffect(() => {
    document.title = "Contact | Richard's Website";
  }, []);

  return (
    <>
      <motion.main
        className={blockClass}
        initial={{ opacity: .5 }}
        animate={{ opacity: 1 }}
        exit={{ transition: { duration: 0.1 } }}
      >
        <Hero
          id='home-hero'
          size="medium"
          justifyContent="center"
          alignContent="end"
          customClass={blockClass}
          elements={[
            <Heading
              level="h1"
              cssLevel="h1"
              customClass={blockClass}
              text={'Contact Me'}
              color='#F6F7F8'
            />
          ]}
          background={
            <Background
              image={ContactImage}
              borderBottomRadius={[
                'left',
                'right'
              ]}
            />
          }
        />
        <ThreeColumns
          id='contact'
          backgroundColor='#f9f9f9'
          firstColumnElements={[
            <Column
              elements={[
                <Icons iconName='fa-regular fa-file' fontSize='120' customClass={blockClass} />,
                <Paragraph
                  text="Unlock the power of potential! With just a click, you can download my CV and uncover the story behind the skills. Let's turn the page together and explore the journey!"
                  customClass='three-columns'
                />,
                <Ctas
                  type="anchor"
                  text="Download CV"
                  href={CV}
                  theme="tertiary"
                  customClass='three-columns'
                  target="_blank"
                />
              ]}
              customClass='three-columns'
            />
          ]}
          secondColumnElements={[
            <Column
              elements={[
                <Icons iconName='fa-brands fa-whatsapp' fontSize='120' customClass={blockClass} />,
                <Paragraph
                  text="Ready to connect? Hit the button below and let's chat over WhatsApp! Get in touch effortlessly and let's turn those thoughts into actions together!"
                  customClass='three-columns'
                />,
                <Ctas
                  type="anchor"
                  text="Get in touch"
                  href="https://wa.me/573004370304"
                  theme="tertiary"
                  target="_blank"
                  customClass='three-columns'
                />
              ]}
              customClass='three-columns'
            />
          ]}
          thirdColumnElements={[
            <Column
              elements={[
                <Icons iconName='fa-brands fa-linkedin' fontSize='120' customClass={blockClass} />,
                <Paragraph
                  text='I am always looking for opportunities to connect with other professionals in my field. If you are interested in collaborating, please visit my LinkedIn profile.'
                  customClass='three-columns'
                />,
                <Ctas
                  type="anchor"
                  text="LinkedIn Profile"
                  href="https://www.linkedin.com/in/richard-lasso/"
                  theme="tertiary"
                  target="_blank"
                  customClass='three-columns'
                />
              ]}
              customClass='three-columns'
            />
          ]}
        />
      </motion.main>
    </>
  )
}