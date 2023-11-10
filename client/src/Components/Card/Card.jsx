import React from 'react';
import { Link } from 'react-router-dom';
import typeColors from './typeColors'; // Asegúrate de importar el objeto typeColors desde el archivo correspondiente
import style from './card.module.css'; // Asegúrate de importar el archivo de estilos CSS

const Card = ({ Pokemons }) => {
    const { name, image, id, types } = Pokemons;
    const formattedTypes = types.join('  , ');
    const typeStyles = types.map(type => typeColors[type]);

    return (
        <Link to={`/detail/${id}`} className={style.detail_card}>
            <div className={style.imagen}>
                <img src={image} alt={name} loading="lazy" />
            </div>
            <div className={style.detail_text}>{name}</div>
            <div className={style.detail_text}>
                {formattedTypes.split(', ').map((type, index) => (
                    <span
                        key={index}
                        className={style.typeBadge}
                        style={typeStyles[index]}
                    >
                        {type}
                    </span>
                ))}
            </div>
            
        </Link>
    );
};

export default Card;
