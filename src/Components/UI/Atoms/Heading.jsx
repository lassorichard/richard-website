
export const Heading = ({ level = 'h2', cssLevel = 'h2', text = '', customClass = '', color = '#4c4c4c' }) => {
  const CustomHeading = level;
  const customCssClass = `${customClass}__heading`;
  const styles = {
    color: color,
  };

  return (
    <CustomHeading className={`heading heading--${cssLevel} ${customCssClass}`} style={styles}>{text}</CustomHeading>
  )
}
