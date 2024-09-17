import styles from "./Footer.module.scss";
import logo from "../../../public/img/icons/logo.svg";
import back_to_top from "../../../public/img/icons/back_to_top.svg";

export const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo_container}>
          <a>
            <img src={logo} alt="The logo of Nice Gadgets" />
          </a>
        </div>
        <nav className={styles.navigation}>
          <a href="#">Github</a>
          <a href="#">Contacts</a>
          <a href="#">Rights</a>
        </nav>
        <div className={styles.back_to_top}>
          <p className={styles.back_to_top_title}>Back to top</p>
          <button className={styles.back_to_top_btn} onClick={handleBackToTop}>
            <img src={back_to_top} alt="Icon back to top" />
          </button>
        </div>
      </div>
    </footer>
  );
};
