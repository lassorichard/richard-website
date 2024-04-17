import React from "react";

export const Hero = ({ id, elements, size = 'large', alignContent = 'center', justifyContent = 'left', customClass, background, animation }) => {
  const blockClass = "hero";
  const customCssClass = `${customClass}__${blockClass} ${blockClass}__size--${size} ${blockClass}__align-content--${alignContent} ${blockClass}__justify-content--${justifyContent}`;
  const hasAnimation = animation ? `${blockClass}__wrapper--animation` : ''

  const renderElements = (elements) => (
    elements && elements.length > 0
      ? elements.map((element, index) => <React.Fragment key={index}>{element}</React.Fragment>)
      : null
  );

  return (
    <section className={`${blockClass} ${customCssClass}`} id={id}>
      <div className={`${blockClass}__wrapper container ${hasAnimation}`}>
        <div>
          {renderElements(elements)}
        </div>
        {animation}
      </div>
      {background}
    </section>
  )
}
