import { useNavigate } from "react-router-dom";
import logo from '../../assets/img/EscudoPeque.svg'

const NavLogo = () => {
    return (
        <div className="nav-logo-container">
            <img
                className="nav-logo img-fluid"
                src={logo}
                alt="Logo.svg"
                width="100%"
                height="100%"
            />
        </div>
    );
};

import { useNavigate } from "react-router-dom";

const useNavigation = () => {
  const navigate = useNavigate();

  const navigateToPublication = () => {
    navigate("/publication");
  };

  const navigateToWelcome = () => {
    navigate("/");
  };


  return {
    navigateToPublication,
    navigateToWelcome
  };
};

export default useNavigation;

const NavButton = ({ text, onClickHandler }) => {
    return (
        <button className="btn btn-secondary nav-button" onClick={onClickHandler}>
            {text}
        </button>
    );
};

export const Navbar = () => {
    const { navigateToPublication, navigateToWelcome } = useNavigation();
  
    return(
        <div className="nav-container">
          <NavLogo/>
          <div className="nav-buttons-container">
            
            <NavButton text='Browse' onClickHandler={navigateToPublication}/>
            <NavButton text='Welcome' onClickHandler={navigateToWelcome}/>          
            
          </div>

        </div>
      )
};
    