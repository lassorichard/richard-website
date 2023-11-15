
export const Heading = ({ level = 'h2', cssLevel = 'h2', text = '', extraClass = '', color = '#4c4c4c' }) => {
  const CustomHeading = level;
  const styles = {
    color: color,
  };

  return (
    <CustomHeading className={`heading heading--${cssLevel} ${extraClass}`} style={styles}>{text}</CustomHeading>
  )
}
