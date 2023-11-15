
export const Background = ({ image, color = '' }) => {
  const styles = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div className={`background`} style={styles}></div>
  )
}
