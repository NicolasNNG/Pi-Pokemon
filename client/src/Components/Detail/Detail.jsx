import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import style from "./Detail.module.css";
import typeColors from "../Card/typeColors";

const Detail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/pokemon/${id}`)
      .then(({ data }) => {
        if (data && data.length > 0) {
          setPokemon(data[0]);
        }
      })
      .catch((error) => {
        console.log("Error al obtener el pokémon:", error);
      });
  }, [id]);

  const MAX_STAT_VALUE = 100;

  if (Object.keys(pokemon).length > 0) {
    return (
      <div className={style.Detail}>
        <div className={style.ImageContainer}>
          <img src={pokemon.image} alt="" className={style.Image} />
        </div>
        <div className={style.text}>
          <h2>ID: {pokemon.id}</h2>
          <h1>{pokemon.name}</h1>
          <div className={style.progressBarContainer}>
            <div className={style.progressBarLabel}>HP</div>
            <progress
              className={style.progressBar}
              value={pokemon.hp}
              max={MAX_STAT_VALUE}
            ></progress>
            <p className={style.statValue}>{pokemon.hp}</p>
          </div>
          <div className={style.progressBarContainer}>
            <div className={style.progressBarLabel}>Attack</div>
            <progress
              className={style.progressBar}
              value={pokemon.attack}
              max={MAX_STAT_VALUE}
            ></progress>
          </div>
          <div className={style.progressBarContainer}>
            <div className={style.progressBarLabel}>Defense</div>
            <progress
              className={style.progressBar}
              value={pokemon.defense}
              max={MAX_STAT_VALUE}
            ></progress>
          </div>
          <div className={style.progressBarContainer}>
            <div className={style.progressBarLabel}>Speed</div>
            <progress
              className={style.progressBar}
              value={pokemon.speed || 0}
              max={MAX_STAT_VALUE}
            ></progress>
          </div>
          <div className={style.progressBarContainer}>
            <div className={style.progressBarLabel}>Height</div>
            <progress
              className={style.progressBar}
              value={pokemon.height || 0}
              max={MAX_STAT_VALUE}
            ></progress>
          </div>
          <div className={style.progressBarContainer}>
            <div className={style.progressBarLabel}>Weight</div>
            <progress
              className={style.progressBar}
              value={pokemon.weight || 0}
              max={MAX_STAT_VALUE}
            ></progress>
          </div>
          <div className={`${style.typesWrapper} ${style.fixed}`}>
            <div className={style.typesLabel}>Types</div>
            <div className={style.typesContainer}>
              {pokemon.types.map((type, index) => (
                <div
                  key={index}
                  className={style.type}
                  style={typeColors[type] ? typeColors[type] : {}}
                >
                  {type}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Link to="/Home">
          <button className={style.ButtonBack}>Back</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className={style.loading}>
        <p>Loading...</p>
        <img
          src="https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif"
          alt="Loading"
          className={style.loadingImage}
        />
      </div>
    );
  }
};

export default Detail;
