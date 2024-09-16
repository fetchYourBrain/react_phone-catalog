import { Link } from "react-router-dom";
import { RoutesLink } from "../../types/routes";

interface Props {
  src: string;
  alt: string;
  className: string;
}
export const IconLink: React.FC<Props> = ({ src, alt, className }) => (
  <Link to={RoutesLink.CartPage} className={className}>
    <img src={src} alt={alt} />
  </Link>
);
