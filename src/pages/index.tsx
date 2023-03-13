import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Logo from "@/assets/logo.svg";
import Next from "@/assets/next.svg";
import Tec, { TecProps } from "@/components/Tec";
import {
  faArrowUpRightFromSquare,
  faWrench,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faHtml5,
  faDiscord,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TecFontsAwesome, {
  TecFontsAwesomeProps,
} from "@/components/TecFontsAwesome";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useWindowHeight } from "@/hooks/size";

import starStyles from "@/styles/stars.module.scss";

const ITEMS = [
  {
    description:
      "MTA List é uma lista de servidores de Multi Theft Auto. Foi realizado o front-end e o back-end dessa aplicação, além de uma Dashboard.",
    image: "https://i.imgur.com/aTq2avE.png",
    mobileImage: "https://i.imgur.com/MAEVAhy.png",
    link: "https://mtalist.com",
  },
  {
    description:
      "Página de captura para campanha da empresa Sonic Telecom de Goiânia/GO. Foi realizada a criação da página completa.",
    image: "https://i.imgur.com/V17J2RH.png",
    mobileImage: "https://i.imgur.com/jRdz0Zs.png",
    link: "https://web.archive.org/web/20230311032145/https://lp2.sonictelecom.com.br/",
  },
] as const;

enum TechType {
  FontAwesome,
  Image,
}

interface TechFA extends TecFontsAwesomeProps {
  type: TechType.FontAwesome;
}

interface Tech extends TecProps {
  type: TechType.Image;
}

const TECHS: (Tech | TechFA)[] = [
  {
    type: TechType.FontAwesome,
    color: "#00CCF2",
    title: "Website SPA",
    icon: faReact,
  },
  {
    type: TechType.FontAwesome,
    color: "#E34F26",
    title: "Website estático",
    icon: faHtml5,
  },
  {
    type: TechType.Image,
    image: Next,
    title: "Website dinâmico",
  },
  {
    type: TechType.FontAwesome,
    color: "#5865F2",
    title: "Bots para Discord",
    icon: faDiscord,
  },
  {
    type: TechType.FontAwesome,
    color: "#0088CC",
    title: "Bots para Telegram",
    icon: faTelegram,
  },
  {
    type: TechType.FontAwesome,
    color: "#CD3333",
    title: "Manutenções",
    icon: faWrench,
  },
  {
    type: TechType.FontAwesome,
    color: "#745CFF",
    title: "E muito mais!",
    icon: faLightbulb,
    className: "rgb",
  },
];

const TECH_ELEMENTS = TECHS.map(({ type, ...tech }) =>
  type === TechType.FontAwesome ? (
    <TecFontsAwesome key={tech.title} {...(tech as TecFontsAwesomeProps)} />
  ) : (
    <Tec key={tech.title} {...(tech as TecProps)} />
  )
);

const TECH_SLIDES = TECH_ELEMENTS.map((tech) => (
  <SwiperSlide key={tech.key}>{tech}</SwiperSlide>
));

export default function Home() {
  const mainSwiperRef = useRef<SwiperRef>(null);
  const height = useWindowHeight();

  const navigateTo = (index: number) => () => {
    mainSwiperRef.current?.swiper.slideTo(index);
  };

  return (
    <Swiper
      className={styles.mainSwiper}
      slidesPerView={1}
      direction="vertical"
      mousewheel={{
        thresholdTime: 300,
      }}
      style={{
        height,
      }}
      ref={mainSwiperRef}
    >
      <SwiperSlide className={styles.home}>
        <div className={styles.stars}>
          <div className={starStyles.starsAnimation}></div>
          <div className={starStyles.stars2Animation}></div>
          <div className={starStyles.stars3Animation}></div>
        </div>
        <Image
          className={styles.logo}
          src={Logo}
          alt="Takasaki Studio"
          draggable="false"
        ></Image>
        <p className={styles.subLogo}>
          A criação do universo só depende de uma ideia
        </p>
        <div className={styles.links}>
          <div className={styles.link} onClick={navigateTo(1)}>
            Quem somos
          </div>
          <div className={styles.link} onClick={navigateTo(2)}>
            Portfólio
          </div>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://discord.gg/paPhRSpQkR"
          >
            Contate-nos
          </a>
        </div>
      </SwiperSlide>

      <SwiperSlide className={styles.quemSomos}>
        <div className={styles.about}>
          <h1 className={styles.title}>
            Aqui as suas ideias viram <span className="rgb">realidade</span>
          </h1>
          <p className={styles.subTitle}>
            Na Takasaki Studio construímos soluções para tornar possível o seu
            sonho, garantindo sempre a qualidade e um desenvolvimento
            personalizado para as suas necessidades
          </p>
        </div>

        <Swiper
          className={styles.techSwiper}
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
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {TECH_SLIDES}
        </Swiper>

        <div className={styles.tecnologias}>{TECH_ELEMENTS}</div>
      </SwiperSlide>

      <SwiperSlide className={styles.portfolio}>
        <h1 className={styles.title}>
          Nosso <span className="rgb">portfólio</span>
        </h1>
        <Swiper navigation slidesPerView="auto" className={styles.swiper}>
          {ITEMS.map((item, index) => (
            <SwiperSlide className={styles.swiperSlide} key={index}>
              <div className={styles.itemPortfolio}>
                <Image
                  className={styles.portfolioImage}
                  src={item.image}
                  alt={item.description}
                  unoptimized
                  fill
                />
                <Image
                  className={styles.portfolioImageMobile}
                  src={item.mobileImage}
                  alt={item.description}
                  unoptimized
                  fill
                />
                <div className={styles.info}>
                  <div className={styles.infoContent}>
                    <p>{item.description}</p>
                    <a
                      className={styles.open}
                      target="_blank"
                      rel="noreferrer"
                      href={item.link}
                    >
                      Visualizar{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperSlide>
    </Swiper>
  );
}
