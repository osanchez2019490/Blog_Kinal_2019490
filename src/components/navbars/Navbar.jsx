import { useNavigate } from "react-router-dom";
import logo from '../../assets/react.svg';

const NavLogo = () => {
    return (
        <a className="navbar-brand" href="/">
            <img
                className="nav-logo"
                src={logo}
                alt="Logo"
                width="30"
                height="30"
            />
        </a>
    );
};

const useNavigation = () => {
    const navigate = useNavigate();

    const navigateToPublication = () => {
        navigate("/publications");
    };

    const navigateToWelcome = () => {
        navigate("/welcome");
    };

    return {
        navigateToPublication,
        navigateToWelcome
    };
};

const NavButton = ({ text, onClickHandler }) => {
    return (
        <li className="nav-item">
            <button className="btn btn-secondary nav-button" onClick={onClickHandler}>
                {text}
            </button>
        </li>
    );
};

export const Navbar = () => {
    const { navigateToPublication, navigateToWelcome } = useNavigation();
  
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLogo />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavButton text="Publication" onClickHandler={navigateToPublication} />
                    <NavButton text="Welcome" onClickHandler={navigateToWelcome} />
                </ul>
            </div>
        </nav>
    );
};