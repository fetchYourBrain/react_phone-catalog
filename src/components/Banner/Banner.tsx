import styles from './Banner.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './Slider.scss';

export const banner_slides = [
  {
    imageUrl: 'img/banner-accessories.png',
    altText: 'Accessories banner',
  },
  {
    imageUrl: 'img/banner-phones.png',
    altText: 'Phones banner',
  },
  {
    imageUrl: 'img/banner-tablets.png',
    altText: 'Tablets banner',
  },
];

export const Banner = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '10px',
  };

  return (
    <div className="banner-container">
      <Slider {...settings}>
        {banner_slides.map((slide, index) => (
          <div key={index} className={styles.banner_container}>
              <img 
                src={slide.imageUrl}
                alt={slide.altText}
                className={styles.image}
              />
          </div>
        ))}
      </Slider>
    </div>
  )
}