import { Children } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./Portfolio.module.scss";

export type PortfolioProps = React.PropsWithChildren;

const Portfolio: React.FC<PortfolioProps> = (props) => {
  return (
    <Swiper navigation slidesPerView="auto" className={styles.swiper}>
      {Children.map(props.children, (child) => {
        return (
          <SwiperSlide className={styles.swiperSlide}>{child}</SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Portfolio;
