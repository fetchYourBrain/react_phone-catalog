import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './Slider.scss';
import { BannerItem } from './BannerItem/BannerItem';
import { banner_slides } from "../../constants/constJS";

export const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="banner_container">
      <Slider {...settings}>
        {banner_slides.map((slide, index) => (
          <BannerItem slide={slide} key={index}/>
        ))}
      </Slider>
    </div>
  )
}