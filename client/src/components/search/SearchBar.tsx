import { FC } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { RiSearchEyeLine } from "react-icons/ri";

const SearchBar: FC = () => {
  return (
    <InputGroup size="sm" className="mb-3 w-50">
      <InputGroup.Text id="inputGroup-sizing-sm">
        <RiSearchEyeLine size={32} />
      </InputGroup.Text>
      <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Search for a pokemon..." />
    </InputGroup>
  );
};

export default SearchBar;
