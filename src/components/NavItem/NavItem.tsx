  import classNames from "classnames";
  import styles from './NavItem.module.scss';
  import { NavLink } from "react-router-dom";

  interface Props {
    item: string;
  }

  const styledActive = ({isActive}: {isActive: boolean}) => {
    return classNames(styles.navLink, {
      [styles.active]: isActive,
    })
  }
  export const NavItem: React.FC<Props> = ({ item }) => {
    return (
      <li>
      <NavLink to={item} className={styledActive}>
        {item}
      </NavLink>
    </li>
    );
  }
