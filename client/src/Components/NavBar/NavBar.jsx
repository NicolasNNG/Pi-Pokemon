import { useLocation, useNavigate } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar';
import style from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
import InicioIcon from '../../images/InicioIcon.png';

import formIcon from '../../images/form-nav.png';  // Importa el ícono

const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate('/home');
    }

    const onClickHandler = () => {
        navigate('/form');
    }

    return (
        <div className={style.navContainer}>
            {location.pathname !== '/home' && location.pathname !== '/'
                && <button className={style.navButton} onClick={navigateHandler}>Home</button>
            }

            {location.pathname === '/home' &&
                <div className={style.searchBarContainer}>
                    <SearchBar />
                    {location.pathname === '/home' &&
                        <button className={style.createButton} onClick={onClickHandler}>
                            <img src={formIcon} alt="Create Pokemon" className={style.createIcon} />  {/* Agrega el ícono */}
                            Create Pokemon
                        </button>
                    }
                </div>
            }
            <NavLink to="/" className={style.nav_link} >
        <div className={style.nav_item}>
          <div className={style.iconContainer}>
            <img src={InicioIcon} alt="Inicio Icon" className={style.icon} />
          </div>
          <div className={style.text}>Inicio</div>
        </div>
      </NavLink>
        </div>
    );
}

export default NavBar;
