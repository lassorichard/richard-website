
export const Background = ({ image, color = '' }) => {
  const styles = {
    backgroundColor: color,
    backgroundImage: `url(${image})`,
  };

  return (
    <div className={`background`} style={styles}></div>
  )
}
