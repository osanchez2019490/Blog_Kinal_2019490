import logo from '../assets/img/Blog.jpg'

export const Logo = ({text}) => {
  return (
    <div className='auth-form-logo-container'>
        <img src={logo} alt="Escudo" />
        <span>{text}</span>
    </div>
  )
}