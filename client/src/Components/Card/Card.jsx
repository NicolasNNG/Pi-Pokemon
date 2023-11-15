// import { Link } from 'react-router-dom';

// import style from './Card.module.css';

// const Card = ({ id, name, image, types }) => {

//     return(
//         <div className={style.card} >
//             <Link to={`/detail/${id}`} className={style.cardLink} >
//                 <h2 className={style.cardTitle}>{name}</h2>
//                 <img className={style.img} src={image}/>
//             <p className={style.cardType} >Tipos : {types}</p>
//             </Link>

            
//         </div>
//     )

// }

// export default Card;
import { Link } from 'react-router-dom';
import typeColors from './typeColors'; // Asegúrate de proporcionar la ruta correcta
import style from './Card.module.css';

const Card = ({ id, name, image, types }) => {
    const typeArray = Array.isArray(types) ? types : types.split(',').map(type => type.trim());

    return (
        <div className={style.card}>
            <Link to={`/detail/${id}`} className={style.cardLink}>
                <h2 className={style.cardTitle}>{name}</h2>
                <img className={style.img} src={image} alt={name} />
                <p className={style.cardType}>
                    Tipos: {typeArray.map((type, index) => (
                        <span
                            key={index}
                            className={style.typeLabel}
                            style={{
                                backgroundColor: typeColors[type]?.backgroundColor || '#777',
                                color: typeColors[type]?.color || '#FFF',
                                borderRadius: typeColors[type]?.borderRadius || '5px',
                                boxShadow: typeColors[type]?.boxShadow || '0px 0px 5px rgba(119, 119, 119, 0.5)'
                            }}
                        >
                            {type}
                        </span>
                    ))}
                </p>
            </Link>
        </div>
    );
};

export default Card;