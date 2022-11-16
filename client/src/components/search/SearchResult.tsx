import { FC } from "react";
import ListGroup from "react-bootstrap/esm/ListGroup";
import SearchResultItem from "./SearchResultItem";

interface ISearchResultProps {
  results: string[];
  selectPokemonNameHandler: any;
}

const SearchResult: FC<ISearchResultProps> = (props: ISearchResultProps) => {
  return (
    <ListGroup variant="flush">
      {props.results.map((result) => {
        return (
          <SearchResultItem name={result} key={result} selectPokemonNameHandler={props.selectPokemonNameHandler} />
        );
      })}
    </ListGroup>
  );
};

export default SearchResult;
