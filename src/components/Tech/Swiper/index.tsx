import { Swiper } from "swiper/react";
import styles from "./TechSwiper.module.scss";

export type TechSwiperProps = React.PropsWithChildren;

const TechSwiper: React.FC<TechSwiperProps> = (props) => {
  return (
    <Swiper
      className={styles.swiper}
      observer
      autoplay={{
        delay: 1750,
        disableOnInteraction: false,
      }}
      spaceBetween={50}
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      }}
    >
      {props.children}
    </Swiper>
  );
};

export default TechSwiper;
