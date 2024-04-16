import { Background } from "../Molecules/Background";

export const ThreeColumns = ({ id, firstColumnElements, secondColumnElements, thirdColumnElements, backgroundColor }) => {
  const blockClass = "three-columns";

  const renderColumnElements = (elements) => (
    elements && elements.length > 0
      ? elements.map((element, index) => (
        <div key={index}>{element}</div>
      ))
      : null
  );

  return (
    <section className={blockClass} id={id}>
      <div className={`${blockClass}__wrapper container`}>
        <div className={`${blockClass}__first`}>
          {renderColumnElements(firstColumnElements)}
        </div>
        <div className={`${blockClass}__second`}>
          {renderColumnElements(secondColumnElements)}
        </div>
        <div className={`${blockClass}__third`}>
          {renderColumnElements(thirdColumnElements)}
        </div>
      </div>
      <Background
        color={backgroundColor}
      />
    </section>
  )
}
