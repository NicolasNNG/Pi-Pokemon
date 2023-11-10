
import { NavLink } from 'react-router-dom';
import style from "./NavBar.module.css";
import homeIcon from '../../images/home.png'; // Ruta de la imagen
import formIcon from '../../images/form-nav.png';
import InicioIcon from '../../images/InicioIcon.png';


function NavBar() {
  return (
    <div className={style.nav_cont}>
      <NavLink to="/home" className={style.nav_link} >
        <div className={style.nav_item}>
          <div className={style.iconContainer}>
            <img src={homeIcon} alt="Home Icon" className={style.icon} />
          </div>
          <div className={style.text}>Home</div>
        </div>
      </NavLink>
      {/* Resto de tus enlaces */}
      <NavLink to="/form" className={style.nav_link}>
        <div className={style.nav_item}>
          <div className={style.iconContainer}>
            <img src={formIcon} alt="Form Icon" className={style.icon} />
          </div>
          <div className={style.text}>Form</div>
        </div>
      </NavLink>

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
