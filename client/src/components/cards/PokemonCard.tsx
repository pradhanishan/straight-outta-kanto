import { FC } from "react";
import classes from "./pokemon-card.module.css";
import defaultPokemonImage from "../../assets/images/pokemon-default.png";
import { IPokemon } from "../../interfaces/IPokemon";
import { TfiMoreAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

interface IPokemonCardProps {
  pokemon: IPokemon;
}

const PokemonCard: FC<IPokemonCardProps> = (props: IPokemonCardProps) => {
  const navigate = useNavigate();

  return (
    <div className={classes["pokemon-card"]}>
      <b className="mb-3">{props.pokemon.name.toUpperCase()}</b>
      <div>
        <img
          src={props.pokemon.sprites.front_default === null ? defaultPokemonImage : props.pokemon.sprites.front_default}
          height="250px"
          alt={props.pokemon.name}
        />
      </div>

      <div className={classes["pokemon-types-container"]}>
        {props.pokemon.types.map((type) => {
          return (
            <span
              className={`${classes["pokemon-type"]} ${classes[`${type.type.name.trim().toLowerCase()}`]}`}
              key={props.pokemon.name + type.type.name}
            >
              {type.type.name}
            </span>
          );
        })}
      </div>

      <div
        className={classes["details-button"]}
        onClick={() => {
          navigate("/detail", { state: { name: props.pokemon.name.toLowerCase() } });
        }}
      >
        Details <TfiMoreAlt className="mx-3" />{" "}
      </div>
    </div>
  );
};

export default PokemonCard;
