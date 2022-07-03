import LogoImage from '../../../Assets/Images/richard.jpg';

export const Logo = () => {
  return (
    <>
      <div className="logo">
        <img src={LogoImage} alt="Logo Richard" className='logo__img' />
        <p className="logo-heading">Richard</p>
      </div>
    </>
  )
}
