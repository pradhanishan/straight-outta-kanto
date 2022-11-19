import { FC, useState, useEffect } from "react";
import { IMove } from "../../interfaces/IMove";
import { config } from "../../constants/config";
import classes from "./move-detaim.module.css";
interface IMoveDetailProps {
  pokemonName: string;
  moveName: string;
}

const MoveDetail: FC<IMoveDetailProps> = (props: IMoveDetailProps) => {
  const [move, setMove] = useState<IMove>({
    name: "",
    accuracy: null,
    power: 0,
    pp: 0,
    priority: 0,
    type: {
      name: "",
      url: "",
    },
  });

  useEffect(() => {
    const fetchMoveDetails = async () => {
      const response = await fetch(`${config.API_URL}/move/${props.moveName}`);
      const responseData: IMove = await response.json();
      setMove(responseData);
    };

    fetchMoveDetails();
  }, [props.moveName]);

  return (
    <tr>
      <td>{move.name}</td>
      <td>{move.power}</td>
      <td>{move.pp}</td>
      <td>{move.accuracy}</td>
      <td>{move.priority}</td>
      <td>{move.type.name}</td>
    </tr>
  );
};

export default MoveDetail;
