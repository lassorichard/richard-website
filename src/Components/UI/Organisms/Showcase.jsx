import { Ctas } from "../Molecules/Ctas";
import { Works } from "../Molecules/Works";
import DrumKit from "../../../Assets/Images/drum-kit-bg.jpg"

export const Showcase = ({ id, heading, background, viewAllButton }) => {
  const blockClass = "showcase";

  return (
    <section className={blockClass} id={id}>
      <div className={`${blockClass}__wrapper container`}>
        {heading}
        <div className={`${blockClass}__grid`}>
          <Works title='Phoenox Textiles' href='/portfolio/drum-kit' src={DrumKit} />
        </div>
        {
          viewAllButton
            ? <Ctas customClass='showcase' text='View all' type='button' href='/portfolio' theme='primary' /> 
            : null
        }

      </div>
      {background}
    </section>
  )
}
