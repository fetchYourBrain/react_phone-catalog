import { Link } from "react-router-dom";
import styles from "./BannerItem.module.scss";
import { Banner } from "../../../types/Banner";

interface Props {
  slide: Banner;
}
export const BannerItem: React.FC<Props> = ({ slide }) => {
  return (
    <section className={styles.container}>
      <div className={styles.banner_info}>
        <div className={styles.first}>
          <img
            src="img/banner/logo-apple.svg"
            alt="Apple icon"
            className={styles.icon}
          />
          <p className={styles.text}>{slide.model}</p>
        </div>
        <h3 className={styles.title}>{slide.title}</h3>
        <button className={styles.button}>
          <Link to={slide.way}>Shop Now</Link></button>
      </div>
      <div className={styles.image}>
        <img className={styles.image} src={slide.imageUrl} alt={slide.altText} />
      </div>
    </section>
  );
};
