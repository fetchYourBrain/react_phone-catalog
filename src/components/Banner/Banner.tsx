import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './Slider.scss';
import { BannerItem } from './BannerItem/BannerItem';

export type Banner = {
  imageUrl: string,
  altText: string,
  model: string,
  title: string,
}

export const banner_slides = [
  {
    imageUrl: 'img/banner/banner-1.png',
    altText: 'Accessories banner',
    model: 'iPhone 14 Pro',
    title: 'Experience Pro-Level Performance',
  },
  {
    imageUrl: 'img/banner/banner-2.png',
    altText: 'Phones banner',
    model: 'MagSafe accessories',
    title: 'Everything just clicks!',
  },
  {
    imageUrl: 'img/banner/banner-3.png',
    altText: 'Tablets banner',
    model: 'iPad air',
    title: 'Get up to something wonderful.',
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
          <BannerItem slide={slide} key={index}/>
        ))}
      </Slider>
    </div>
  )
}