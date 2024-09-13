interface Props {
  item: string;
}
export const NavItem: React.FC<Props> = ({ item }) => {
  return (
    <li>
    {/* <a href={`#${item}`} className={getActiveLink}> */}
    <a href={`#${item}`}>
      {item}
    </a>
  </li>
  );
}