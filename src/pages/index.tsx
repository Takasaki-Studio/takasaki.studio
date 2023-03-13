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
import { useCallback, useEffect, useState } from "react";
import { SwiperContainerEl } from "@/declarations";

import "swiper/css";
import "swiper/css/navigation";

const ITEMS = [
  {
    description:
      "MTA List é uma lista de servidores de Multi Theft Auto. Foi realizado o front-end e o back-end dessa aplicação, além de uma Dashboard.",
    image: "https://i.imgur.com/aTq2avE.png",
    link: "https://mtalist.com",
  },
  {
    description:
      "Página de captura para campanha da empresa Sonic Telecom de Goiânia/GO. Foi realizada a criação da página completa.",
    image: "https://i.imgur.com/V17J2RH.png",
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
  <swiper-slide key={tech.key}>{tech}</swiper-slide>
));

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  const swiperRef = useCallback((node: SwiperContainerEl) => {
    if (node == null) return;

    Object.assign(node, {
      observer: true,
      autoplay: {
        delay: 1750,
        disableOnInteraction: false,
      },
      spaceBetween: 50,
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
      },
    });
    node.initialize?.();
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className={styles.home}>
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
          <a href="#quem-somos">Quem somos</a>
          <a href="#portfolio">Portfólio</a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://discord.gg/paPhRSpQkR"
          >
            Contate-nos
          </a>
        </div>
      </div>

      <div className={styles.quemSomos} id="quem-somos">
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

        {/* <div className={styles.tecnologias}> */}
        {isClient && (
          <swiper-container
            ref={swiperRef}
            class={styles.techSwiper}
            init="false"
          >
            {TECH_SLIDES}
          </swiper-container>
        )}
        <div className={styles.tecnologias}>{TECH_ELEMENTS}</div>
      </div>

      <div className={styles.portfolio} id="portfolio">
        <h1 className={styles.title}>
          Nosso <span className="rgb">portfólio</span>
        </h1>
        {isClient && (
          <swiper-container
            navigation="true"
            slides-per-view="auto"
            class={styles.swiper}
          >
            {ITEMS.map((item, index) => (
              <swiper-slide class={styles.swiperSlide} key={index}>
                <div className={styles.itemPortfolio}>
                  <Image src={item.image} alt={item.description} fill />
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
              </swiper-slide>
            ))}
          </swiper-container>
        )}
      </div>
    </>
  );
}
