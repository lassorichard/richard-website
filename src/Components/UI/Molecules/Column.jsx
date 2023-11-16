export const Column = ({ elements, customClass }) => {
  const customCssClass = `${customClass}__column-item`;

  return (
    <>
      {elements.map((element, index) => (
        <div key={index} className={`column-item ${customCssClass}`}>
          {element}
        </div>
      ))}
    </>
  )
}