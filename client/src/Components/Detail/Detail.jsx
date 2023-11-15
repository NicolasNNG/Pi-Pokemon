// Detail.jsx
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokeId } from "../../redux/actions";
import style from "./Detail.module.css";
import typeColors from "../Card/typeColors";


const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokeDetails = useSelector((state) => state?.detailsPokemon);
  const types = pokeDetails?.types || [];

  useEffect(() => {
    dispatch(getPokeId(id));
  }, [id, dispatch]);

  const calculateProgressBarWidth = (stat, maxStat) => {
    return { width: `${(stat / maxStat) * 100}%` };
  };

  return (
    <div className={style.detail}>
      <div className={style.detailContainer}>
        <h2 className={style.detailTitle}>Pokemon Details</h2>
        <div className={style.detailContent}>
          <div className={style.detailImageContainer}>
            <img
              src={pokeDetails?.image}
              alt={pokeDetails?.name}
              className={style.detailImage}
            />
          </div>
          <div className={style.detailInfo}>
            <h2>Name: {pokeDetails?.name}</h2>
            <h2>HP: {pokeDetails?.hp}</h2>
            <div className={style.progressBarContainer}>
              <p className={style.progressBarLabel}></p>
              <div className={style.progressBar}>
                <div
                  className={`${style.progressBarFill} ${style.hp}`}
                  style={calculateProgressBarWidth(pokeDetails?.hp, 100)}
                ></div>
              </div>
            </div>
            <h2>Attack: {pokeDetails?.attack}</h2>
            <div className={style.progressBarContainer}>
              <p className={style.progressBarLabel}></p>
              <div className={style.progressBar}>
                <div
                  className={`${style.progressBarFill} ${style.attack}`}
                  style={calculateProgressBarWidth(pokeDetails?.attack, 100)}
                ></div>
              </div>
            </div>
            <h2>Defense: {pokeDetails?.defense}</h2>
            <div className={style.progressBarContainer}>
              <p className={style.progressBarLabel}></p>
              <div className={style.progressBar}>
                <div
                  className={`${style.progressBarFill} ${style.defense}`}
                  style={calculateProgressBarWidth(pokeDetails?.defense, 100)}
                ></div>
              </div>
            </div>
            <h2>Height: {pokeDetails?.height}</h2>
            <div className={style.progressBarContainer}>
              <p className={style.progressBarLabel}></p>
              <div className={style.progressBar}>
                <div
                  className={`${style.progressBarFill} ${style.Height}`}
                  style={calculateProgressBarWidth(pokeDetails?.defense, 100)}
                ></div>
              </div>
            </div>
            <h2>Weight: {pokeDetails?.weight}</h2>
            <div className={style.progressBarContainer}>
              <p className={style.progressBarLabel}></p>
              <div className={style.progressBar}>
                <div
                  className={`${style.progressBarFill} ${style.Weight}`}
                  style={calculateProgressBarWidth(pokeDetails?.defense, 100)}
                ></div>
              </div>
            </div>
            <div className={style.detailInfo}>
    {/* Otro contenido ... */}
    <h2>Type: {types.map((type, index) => (
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
    ))}</h2>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
