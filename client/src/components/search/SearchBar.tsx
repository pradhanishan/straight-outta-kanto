import { FC } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { RiSearchEyeLine } from "react-icons/ri";

interface ISearchBarProps {
  searchBarInput: string;
  searchBarInputChangeHandler: any;
}

const SearchBar: FC<ISearchBarProps> = (props: ISearchBarProps) => {
  const handleSearchBarInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText: string = event.target.value;
    props.searchBarInputChangeHandler(inputText);
  };

  return (
    <InputGroup size="sm" className="m-3">
      <InputGroup.Text id="inputGroup-sizing-sm">
        <RiSearchEyeLine size={32} />
      </InputGroup.Text>
      <Form.Control
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        placeholder="Search for a pokemon..."
        onChange={handleSearchBarInputChange}
        value={props.searchBarInput}
      />
    </InputGroup>
  );
};

export default SearchBar;
