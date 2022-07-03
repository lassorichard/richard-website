import ImageBg from '../../../Assets/Images/hero-bg.jpg'

export const Background = () => {
  return (
    <div className="background">
      <img className='background__img' src={ImageBg} alt="Background desk" />
    </div>
  )
}
