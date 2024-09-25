import classNames from "classnames";
import styles from "./NavItem.module.scss";
import { NavLink } from "react-router-dom";
import { RoutesLink } from "../../types/routes";

interface Props {
  name: string;
  path: RoutesLink;
  onClick?: () => void;
}

export const styledActive = ({ isActive }: { isActive: boolean }) => {
  return classNames(styles.navLink, {
    [styles.active]: isActive,
  });
};

export const NavItem: React.FC<Props> = ({ name, path, onClick }) => {
  return (
    <li>
      <NavLink to={path} className={styledActive} onClick={onClick}>
        {name}
      </NavLink>
    </li>
  );
};
