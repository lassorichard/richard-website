import { Background } from "../Molecules/Background";
import { Heading } from "../Atoms/Heading"
import { Ctas } from "../Molecules/Ctas";
import { Works } from "../Molecules/Works";
import Work1 from "../../../Assets/Images/work-1.jpeg"
import Work2 from "../../../Assets/Images/work-2.jpg"
import Work3 from "../../../Assets/Images/work-3.jpeg"

export const Showcase = ({ id }) => {
  const blockClass = "showcase";

  return (
    <section className={blockClass} id={id}>
      <div className={`${blockClass}__wrapper container`}>
        <Heading
          level="h2"
          cssLevel="h1"
          customClass={blockClass}
          text={'Showcase'}
          color="#f9f9f9"
        />
        <div className={`${blockClass}__grid`}>
          <Works title='Phoenox Textiles' href='/' src={Work1} />
          <Works title='Phoenox Textiles' href='/' src={Work2} />
          <Works title='Phoenox Textiles' href='/' src={Work3} />
          <Works title='Phoenox Textiles' href='/' src={Work1} />
          <Works title='Phoenox Textiles' href='/' src={Work2} />
          <Works title='Phoenox Textiles' href='/' src={Work3} />
        </div>
        <Ctas customClass={blockClass} text='View all' type='button' href='/' theme='primary' />
      </div>
      <Background
        color='#4c4c4c'
        borderTopRadius={[
          'left',
          'right'
        ]}
        borderBottomRadius={[
          'left',
          'right'
        ]}
      />
    </section>
  )
}
