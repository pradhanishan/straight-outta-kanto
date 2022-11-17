import { FC } from "react";
import ListGroup from "react-bootstrap/esm/ListGroup";
import SearchResultItem from "./SearchResultItem";
import classes from "./search-result.module.css";

interface ISearchResultProps {
  results: string[];
  selectPokemonNameHandler: any;
}

const SearchResult: FC<ISearchResultProps> = (props: ISearchResultProps) => {
  return (
    <ListGroup variant="flush" className={classes["search-results"]}>
      <span className="mb-3 fw-bold">Are you looking for:</span>
      {props.results.map((result) => {
        return (
          <SearchResultItem name={result} key={result} selectPokemonNameHandler={props.selectPokemonNameHandler} />
        );
      })}
    </ListGroup>
  );
};

export default SearchResult;
