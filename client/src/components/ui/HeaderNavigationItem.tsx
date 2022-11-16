import { FC } from "react";
import { NavLink } from "react-router-dom";
import classes from "./header-navigation-item.module.css";

interface IHeaderNavigationProps {
  URL: string;
  content: string;
}

const HeaderNavigationItem: FC<IHeaderNavigationProps> = (props: IHeaderNavigationProps) => {
  return (
    <NavLink to={props.URL} className={({ isActive }) => (isActive ? classes["active-link"] : classes.link)}>
      {props.content}
    </NavLink>
  );
};

export default HeaderNavigationItem;
