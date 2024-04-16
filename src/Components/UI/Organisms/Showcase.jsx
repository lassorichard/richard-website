import { Ctas } from "../Molecules/Ctas";
import { Works } from "../Molecules/Works";
import Work1 from "../../../Assets/Images/work-1.jpeg"
import Work2 from "../../../Assets/Images/work-2.jpg"
import Work3 from "../../../Assets/Images/work-3.jpeg"

export const Showcase = ({ id, heading, background }) => {
  const blockClass = "showcase";

  return (
    <section className={blockClass} id={id}>
      <div className={`${blockClass}__wrapper container`}>
        {heading}
        <div className={`${blockClass}__grid`}>
          <Works title='Phoenox Textiles' href='/' src={Work1} />
          <Works title='Phoenox Textiles' href='/' src={Work2} />
          <Works title='Phoenox Textiles' href='/' src={Work3} />
          <Works title='Phoenox Textiles' href='/' src={Work1} />
          <Works title='Phoenox Textiles' href='/' src={Work2} />
          <Works title='Phoenox Textiles' href='/' src={Work3} />
        </div>
        <Ctas customClass='showcase' text='View all' type='button' href='/portfolio' theme='primary' />
      </div>
      {background}
    </section>
  )
}
