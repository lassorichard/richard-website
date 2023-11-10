
export const Background = ({ image = '', color = '' }) => {
  const styles = {
    backgroundColor: color,
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <div className={`background`} style={styles}></div>
  )
}
