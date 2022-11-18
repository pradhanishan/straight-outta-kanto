import { FC, MouseEventHandler } from "react";
import ListGroup from "react-bootstrap/esm/ListGroup";
import { useNavigate } from "react-router-dom";

interface ISearchResultItemProps {
  name: string;
}

const SearchResultItem: FC<ISearchResultItemProps> = (props: ISearchResultItemProps) => {
  const navigate = useNavigate();
  return (
    <ListGroup.Item
      onClick={() => {
        navigate("/detail", { state: { name: props.name.toLowerCase() } });
      }}
    >
      {props.name}
    </ListGroup.Item>
  );
};

export default SearchResultItem;
