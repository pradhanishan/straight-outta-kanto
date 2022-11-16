import { FC, MouseEventHandler } from "react";
import ListGroup from "react-bootstrap/esm/ListGroup";

interface ISearchResultItemProps {
  name: string;
  selectPokemonNameHandler: any;
}

const SearchResultItem: FC<ISearchResultItemProps> = (props: ISearchResultItemProps) => {
  const handleSelectPokemon = (event: React.MouseEvent) => {
    props.selectPokemonNameHandler(props.name);
  };

  return <ListGroup.Item onClick={handleSelectPokemon}>{props.name}</ListGroup.Item>;
};

export default SearchResultItem;
