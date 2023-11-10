import PropTypes from "prop-types";
import Card from "../Card/Card";
import style from "./cards.module.css";
const Cards = ({ Pokemons }) => {
  return (
    <div className={style.cards}>
      {Pokemons.map((Pokemon) => (
        <Card Pokemons={Pokemon} key={Pokemon.id} />
      ))}
    </div>
  );
};
Cards.propTypes = {
  Pokemons: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Cards;
