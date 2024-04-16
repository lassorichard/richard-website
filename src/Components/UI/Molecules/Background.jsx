export const Background = ({ color, image, borderTopRadius = [], borderBottomRadius = [] }) => {
  const blockClass = 'background';
  const hasBackgroundImage = image ? `${blockClass}__image` : '';

  // Función para generar clases de borde basadas en los valores de las props
  const getBorderRadiusClasses = (radiusArray, position) => {
    return radiusArray.map(value => `${blockClass}__border-${position}--${value}`).join(' ');
  };

  const borderTopClasses = getBorderRadiusClasses(borderTopRadius, 'top');
  const borderBottomClasses = getBorderRadiusClasses(borderBottomRadius, 'bottom');

  const styles = {
    ...(color && { background: color }),
    ...(image && { backgroundImage: `url(${image})` })
  };

  return (
    <div className={`${blockClass} ${hasBackgroundImage} ${borderTopClasses} ${borderBottomClasses}`} style={styles}></div>
  )
};
