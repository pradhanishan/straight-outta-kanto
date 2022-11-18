import { FC } from "react";
import { useLocation } from "react-router-dom";
const DetailPage: FC = () => {
  const location: { key: any; hash: any; pathname: any; search: any; state: { name: string } } = useLocation();
  return <div>{location.state.name}</div>;
};

export default DetailPage;
