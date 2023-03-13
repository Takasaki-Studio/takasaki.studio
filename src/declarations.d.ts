import type { SwiperSlide } from "swiper/element/swiper-element";
import { ReactHTMLElement } from "react";

type SwiperContainerEl = {
  initialize?: () => void;
} & ReactHTMLElement;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "swiper-container": SwiperContainerEl;
      "swiper-slide": SwiperSlide;
    }
  }
}
