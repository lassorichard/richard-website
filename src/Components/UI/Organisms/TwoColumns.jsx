import { Background } from "../Atoms/Background";
import { Heading } from "../Atoms/Heading"
import { Paragraph } from "../Atoms/Paragraph";
import { Column } from "../Molecules/Column";
import { Ctas } from "../Molecules/Ctas";

export const TwoColumns = ({ id }) => {
  const blockClass = "two-columns";

  return (
    <section className={blockClass} id={id}>
      <div className={`${blockClass}__wrapper container`}>
        <div className={`${blockClass}__first`}>
          <Column
            elements={[
              <Heading
                level="h2"
                cssLevel="h2"
                customClass={blockClass}
                text='Hello.'
              />]}
            customClass={blockClass}
          />
        </div>
        <div className={`${blockClass}__second`}>
          <Column
            elements={[
              <Paragraph
                text='My name is Richard Lasso. I am a vastly-experienced full-service freelance designer / creative marketer based in Leeds, specialising in strategic   branding and digital design.'
                weight="bold"
                customClass={blockClass}
              />,
              <Paragraph
                text='For 16 years, I ran a multi-award-winning creative agency working on a diverse range of projects for world-class clients. I now work in collaboration with creative agencies and directly with a handful of clients. Whether setting the direction through intelligent brand strategy, or tactical execution through digital and offline channels, I help businesses of all sizes to communicate more effectively.'
                customClass={blockClass}
              />,
              <Ctas
                type="anchor"
                text="Get in touch"
                href="/"
                theme="primary"
                customClass={blockClass}
              />
            ]}
            customClass={blockClass}
          />
        </div>

      </div>
      <Background
        color='#f9f9f9'
      />
    </section>
  )
}
