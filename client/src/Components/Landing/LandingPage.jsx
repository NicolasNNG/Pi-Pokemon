import {useNavigate} from 'react-router-dom';
import style from './LandingPage.module.css';


const Landing = () =>{

    const navigate = useNavigate()
    const navigateHandler = () => {
        navigate('/home')
    }

    return(
        <div className={style.container} >
           
            <h1>Bienvenidos </h1>
            <button className={style.button} onClick={navigateHandler} >Home</button>
        </div>
    )

}

export default Landing