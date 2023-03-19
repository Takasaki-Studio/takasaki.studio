import { useWindowHeight } from "@/hooks/size";
import { forwardRef } from "react";
import { Mousewheel } from "swiper";
import { Swiper, SwiperRef } from "swiper/react";

import styles from "./FullSwiper.module.scss";

export type FullSwiperProps = React.PropsWithChildren;

const FullSwiper = forwardRef<SwiperRef, FullSwiperProps>(function FullSwiper(
  props,
  ref
) {
  const height = useWindowHeight();

  return (
    <Swiper
      modules={[Mousewheel]}
      className={styles.mainSwiper}
      slidesPerView={1}
      direction="vertical"
      mousewheel={{
        thresholdTime: 500,
      }}
      style={{
        height,
      }}
      ref={ref}
    >
      {props.children}
    </Swiper>
  );
});

export default FullSwiper;
