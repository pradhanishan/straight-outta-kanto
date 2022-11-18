import { FC } from "react";
import Pagination from "react-bootstrap/Pagination";
import { useAppSelector, useAppDispatch } from "../../hooks/redux-hooks";
import { increment, decrement, resetToFirst, resetToLast } from "../../store/slices/pokemonCardNavigationSlice";

const CardNavigator: FC = () => {
  const dispatch = useAppDispatch();
  const pokemonNavigation = useAppSelector((state) => state.pokemonNavigation);

  return (
    <Pagination>
      <Pagination.First
        onClick={() => {
          dispatch(resetToFirst());
        }}
      />
      <Pagination.Prev
        onClick={() => {
          dispatch(decrement());
        }}
      />
      <Pagination.Item>{Math.round(pokemonNavigation.from / 12) + 1}</Pagination.Item>
      <Pagination.Next
        onClick={() => {
          dispatch(increment());
        }}
      />
      <Pagination.Last
        onClick={() => {
          dispatch(resetToLast());
        }}
      />
    </Pagination>
  );

  // return (
  //   <Pagination>
  //     <Pagination.First onClick={reachFirstDisplayRange} disabled={props.from <= 12 ? true : false} />
  //     <Pagination.Prev onClick={decreaseDisplayRange} disabled={props.from <= 12 ? true : false} />
  //     <Pagination.Item>{Math.round(props.from / 12) + 1}</Pagination.Item>
  //     <Pagination.Next onClick={increaseDisplayRange} disabled={props.to === 905 ? true : false} />
  //     <Pagination.Last onClick={reachLastDisplayRange} disabled={props.to === 905 ? true : false} />
  //   </Pagination>
  // );
};

export default CardNavigator;
