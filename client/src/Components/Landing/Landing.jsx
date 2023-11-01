
import {NavLink} from 'react-router-dom';
import style from  "./landing.module.css";

const Landing=()=>{
    return(
        <div className={style.container}>
            <div>
                <h1 className={style.title}>Bienvenido</h1>
                <NavLink to='/home'>
                <button className={style.button}>LOG IN</button>

                </NavLink>
            </div>
        </div>
    )
}
export default Landing;