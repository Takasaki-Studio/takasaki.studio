import { useRef } from "react";
import { SwiperRef } from "swiper/react";

export const useSwiperNavigation = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const navigateTo = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return {
    swiperRef,
    navigateTo,
  };
};
