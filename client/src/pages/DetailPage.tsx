import { FC, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IPokemon } from "../interfaces/IPokemon";
import classes from "./detail-page.module.css";
import { config } from "../constants/config";
import ImageDetail from "../components/details/ImageDetail";
import StatisticsDetail from "../components/details/StatisticsDetail";
import MoveDetail from "../components/details/MoveDetail";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";

const DetailPage: FC = () => {
  const [pokemon, setPokemon] = useState<IPokemon>();
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);
  const navigate = useNavigate();

  const location: { key: any; hash: any; pathname: any; search: any; state: { name: string } } = useLocation();

  useEffect(() => {
    const getPokemonDetail = async (pokemonName: string) => {
      const response = await fetch(`${config.API_URL}/pokemon/${pokemonName}`);
      const responseData: IPokemon = await response.json();
      setPokemon(responseData);
      setIsDataLoaded(true);
    };

    getPokemonDetail(location.state.name);
  }, [location.state.name]);

  return (
    <div className={classes["detail-page"]}>
      {!isDataLoaded ? (
        <p>Loading... </p>
      ) : (
        <>
          <div>
            <h4>{pokemon!.name.toUpperCase()}</h4>
          </div>
          <div>
            {[
              pokemon?.sprites.back_default,
              pokemon?.sprites.back_shiny,
              pokemon?.sprites.front_default,
              pokemon?.sprites.front_shiny,
            ].map((pokemonImage) => {
              return <ImageDetail key={pokemonImage} imageURL={pokemonImage === null ? null : pokemonImage!} />;
            })}
          </div>

          <div className={classes["pokemon-types-container"]}>
            <span className="fw-bold">TYPE</span>
            {pokemon!.types.map((type) => {
              return (
                <span
                  className={`${classes["pokemon-type"]} ${classes[`${type.type.name.trim().toLowerCase()}`]}`}
                  key={pokemon!.name + type.type.name}
                >
                  {type.type.name}
                </span>
              );
            })}
          </div>
          {/* <span>HEIGHT : {pokemon!.height} </span>
          <span>WEIGHT : {pokemon!.weight}</span> */}
          <div>
            <StatisticsDetail stats={pokemon!.stats} name={pokemon!.name} />
          </div>
          <div>
            <Table striped bordered hover variant="dark" responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Power</th>
                  <th>PP</th>
                  <th>Accuracy</th>
                  <th>Priority</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {pokemon?.moves.map((move) => {
                  return (
                    <MoveDetail
                      pokemonName={pokemon.name}
                      moveName={move.move.name}
                      key={`${pokemon.name} ${move.move.name}`}
                    />
                  );
                })}
              </tbody>
            </Table>
          </div>
          <div>
            <Button
              variant="danger"
              className="mb-3"
              onClick={() => {
                navigate("/");
              }}
            >
              return
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailPage;
