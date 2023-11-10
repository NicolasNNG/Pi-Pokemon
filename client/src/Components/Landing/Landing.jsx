

import style from  "./landing.module.css";
import { useNavigate } from 'react-router-dom';

const Landing=()=>{
const navigate = useNavigate(); // Obtiene el objeto de navegación

  const handleEnterClick = () => {
    // Llama a navigate para redirigir a /home
    navigate('/home');
  };
    return(
        <div className={style.container}>
            <h1 className={style.title}>Bienvenido</h1>
            <button className={style.button}onClick={handleEnterClick}>LOG IN</button>

               
            
        </div>
    )
}
export default Landing;