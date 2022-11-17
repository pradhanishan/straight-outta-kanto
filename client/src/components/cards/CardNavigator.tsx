import { FC } from "react";
import Pagination from "react-bootstrap/Pagination";

interface ICardNavigationProps {
  from: number;
  to: number;
  changeDisplayRangeHandler: any;
  total: number;
}

const CardNavigator: FC<ICardNavigationProps> = (props: ICardNavigationProps) => {
  const increaseDisplayRange = () => {
    props.changeDisplayRangeHandler("next");
  };

  const decreaseDisplayRange = () => {
    props.changeDisplayRangeHandler("previous");
  };

  const reachFirstDisplayRange = () => {
    props.changeDisplayRangeHandler("first");
  };

  const reachLastDisplayRange = () => {
    props.changeDisplayRangeHandler("last");
  };

  return (
    <Pagination>
      <Pagination.First onClick={reachFirstDisplayRange} disabled={props.from <= 12 ? true : false} />
      <Pagination.Prev onClick={decreaseDisplayRange} disabled={props.from <= 12 ? true : false} />
      <Pagination.Item>{Math.round(props.from / 12) + 1}</Pagination.Item>
      <Pagination.Next onClick={increaseDisplayRange} disabled={props.to === 905 ? true : false} />
      <Pagination.Last onClick={reachLastDisplayRange} disabled={props.to === 905 ? true : false} />
    </Pagination>
  );
};

export default CardNavigator;
