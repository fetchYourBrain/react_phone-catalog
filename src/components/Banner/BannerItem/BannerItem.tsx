import styles from "./BannerItem.module.scss";

export const banner_slides = [
  {
    imageUrl: "img/banner-accessories.png",
    altText: "Accessories banner",
  },
  {
    imageUrl: "img/banner-phones.png",
    altText: "Phones banner",
  },
  {
    imageUrl: "img/banner-tablets.png",
    altText: "Tablets banner",
  },
];

export const BannerItem = () => {
  return (
    <section className={styles.container}>
      <div className={styles.banner_info}>
        <div className={styles.first}>
          <img
            src="img/banner/logo-apple.svg"
            alt="Apple icon"
            className={styles.icon}
          />
          <p className={styles.text}>iPad air</p>
        </div>
        <h3 className={styles.title}>Get up to something wonderful.</h3>
        <button className={styles.button}>Shop Now</button>
      </div>
      <div className={styles.image}>
      </div>
    </section>
  );
};
