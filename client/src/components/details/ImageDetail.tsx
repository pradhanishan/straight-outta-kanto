import { FC } from "react";
import defaultPokemonImage from "../../assets/images/pokemon-default.png";
interface IImageDetailProps {
  imageURL: string | null;
}

const ImageDetail: FC<IImageDetailProps> = (props: IImageDetailProps) => {
  return (
    <img src={props.imageURL === null ? defaultPokemonImage : props.imageURL} alt="pokemon image" height="250px;" />
  );
};

export default ImageDetail;
