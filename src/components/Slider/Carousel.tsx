import React, { ReactNode, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.scss";

interface CarouselProps {
  children: ReactNode;
  title: string;
}

export const Carousel: React.FC<CarouselProps> = ({ children, title }) => {
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className={styles.slider_container}>
      <div className={styles.title_container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.buttons_block}>
        <div className={styles.button_container}>
          <button onClick={handlePrev} className={styles.slick_prev}>
            <div className={styles.prev}></div>
          </button>
        </div>
        <div className={styles.button_container}>
          <button onClick={handleNext} className={styles.slick_next}>
            <div className={styles.next}></div>
          </button>
        </div>
      </div>
        </div>
      <Slider ref={sliderRef} {...settings}>
        {React.Children.map(children, (child, index) => (
          <div key={index} className={styles.slide}>
            {child}
          </div>
        ))}
      </Slider>
    </div>
  );
};


// import React, { ReactNode, useRef, useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styles from "./Carousel.module.scss";

// interface CarouselProps {
//   children: ReactNode;
//   title: string;
// }

// export const Carousel: React.FC<CarouselProps> = ({ children, title }) => {
//   const sliderRef = useRef<Slider | null>(null);
//   const [slidesToShow, setSlidesToShow] = useState(4);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 320) {
//         setSlidesToShow(1);
//       } else if (window.innerWidth < 640) {
//         setSlidesToShow(2);
//       } else {
//         setSlidesToShow(4);
//       }
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow,
//     slidesToScroll: 1,
//     initialSlide: 0,
//     autoplay: false,
//   };

//   const handlePrev = () => sliderRef.current?.slickPrev();
//   const handleNext = () => sliderRef.current?.slickNext();

//   return (
//     <div className={styles.slider_container}>
//       <div className={styles.title_container}>
//         <h2 className={styles.title}>{title}</h2>
//         <div className={styles.button_container}>
//           <button onClick={handlePrev} className={styles.slick_prev} aria-label="Previous slide">
//             <div className={styles.prev}></div>
//           </button>
//         </div>
//         <div className={styles.button_container}>
//           <button onClick={handleNext} className={styles.slick_next} aria-label="Next slide">
//             <div className={styles.next}></div>
//           </button>
//         </div>
//       </div>
//       <Slider ref={sliderRef} {...settings}>
//         {React.Children.map(children, (child, index) => (
//           <div key={index} className={styles.slide}>
//             {child}
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };
