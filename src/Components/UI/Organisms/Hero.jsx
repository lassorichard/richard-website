import React from "react";

export const Hero = ({ id, elements, size = 'large', alignContent = 'left', customClass, background }) => {
  const blockClass = "hero";
  const customCssClass = `${customClass}__${blockClass} ${blockClass}__size--${size} ${blockClass}__align-content--${alignContent}`;

  const renderElements = (elements) => (
    elements && elements.length > 0
      ? elements.map((element, index) => <React.Fragment key={index}>{element}</React.Fragment>)
      : null
  );

  return (
    <section className={`${blockClass} ${customCssClass}`} id={id}>
      <div className={`${blockClass}__wrapper container`}>
        {renderElements(elements)}
      </div>
      {background}
    </section>
  )
}
