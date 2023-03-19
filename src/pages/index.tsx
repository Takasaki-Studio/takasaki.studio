import Image from "next/image";
import { faWrench, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faHtml5,
  faDiscord,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { SwiperSlide } from "swiper/react";
import Title from "@/components/Title";
import { useSwiperNavigation } from "@/hooks/swiper";
import Stars from "@/components/Stars";
import { Highlight } from "@/components/Highlight";
import Tech from "@/components/Tech";
import TechIcon from "@/components/Tech/Icon";
import { Children } from "react";
import { NextPage } from "next";
import Portfolio from "@/components/Portfolio";
import PortfolioItem from "@/components/Portfolio/Item";
import TechSwiper from "@/components/Tech/Swiper";
import TechGroup from "@/components/Tech/Group";
import Navigation from "@/components/Navigation";
import NavigationItem from "@/components/Navigation/Item";
import FullSwiper from "@/components/FullSwiper";

import imgLogo from "@/assets/logo.svg";
import imgNext from "@/assets/next.svg";

import styles from "./Home.module.scss";

import "swiper/css";
import "swiper/css/navigation";

const TECHS = (
  <>
    <Tech title="Website SPA">
      <TechIcon color="#00CCF2" icon={faReact} />
    </Tech>
    <Tech title="Website estático">
      <TechIcon color="#E34F26" icon={faHtml5} />
    </Tech>
    <Tech title="Website dinâmico">
      <Image src={imgNext} alt="Next.js" />
    </Tech>
    <Tech title="Bots para Discord">
      <TechIcon color="#5865F2" icon={faDiscord} />
    </Tech>
    <Tech title="Bots para Telegram">
      <TechIcon color="#0088CC" icon={faTelegram} />
    </Tech>
    <Tech title="Manutenções">
      <TechIcon color="#CD3333" icon={faWrench} />
    </Tech>
    <Tech title="E muito mais!">
      <TechIcon color="#745CFF" icon={faLightbulb} />
    </Tech>
  </>
);

const TECH_SLIDES = Children.map(TECHS.props.children, (child) => (
  <SwiperSlide>{child}</SwiperSlide>
));

const Home: NextPage = () => {
  const { swiperRef, navigateTo } = useSwiperNavigation();

  const solutionsClick = () => {
    navigateTo(1);
  };

  const portfolioClick = () => {
    navigateTo(2);
  };

  return (
    <FullSwiper ref={swiperRef}>
      <SwiperSlide className={styles.home}>
        <Stars className={styles.stars} />
        <Image
          className={styles.logo}
          src={imgLogo}
          alt="Takasaki Studio"
          draggable="false"
        />
        <p className={styles.slogan}>
          A criação do universo só depende de uma ideia
        </p>
        <Navigation>
          <NavigationItem onClick={solutionsClick}>Soluções</NavigationItem>
          <NavigationItem onClick={portfolioClick}>Portfólio</NavigationItem>
          <NavigationItem>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://discord.gg/paPhRSpQkR"
            >
              Contate-nos
            </a>
          </NavigationItem>
        </Navigation>
      </SwiperSlide>

      <SwiperSlide className={styles.solutions}>
        <div className={styles.about}>
          <Title>
            Aqui as suas ideias viram <Highlight>realidade</Highlight>
          </Title>
          <p className={styles.text}>
            Na Takasaki Studio construímos soluções para tornar possível o seu
            sonho, garantindo sempre a qualidade e um desenvolvimento
            personalizado para as suas necessidades
          </p>
        </div>

        <TechSwiper>{TECH_SLIDES}</TechSwiper>
        <TechGroup>{TECHS}</TechGroup>
      </SwiperSlide>

      <SwiperSlide className={styles.portfolio}>
        <Title>
          Nosso <Highlight>portfólio</Highlight>
        </Title>
        <Portfolio>
          <PortfolioItem
            description="MTA List é uma lista de servidores de Multi Theft Auto. Foi realizado o front-end e o back-end dessa aplicação, além de uma Dashboard."
            image="https://i.imgur.com/aTq2avE.png"
            mobileImage="https://i.imgur.com/MAEVAhy.png"
            link="https://mtalist.com"
          />
          <PortfolioItem
            description="Página de captura para campanha da empresa Sonic Telecom de Goiânia/GO. Foi realizada a criação da página completa."
            image="https://i.imgur.com/V17J2RH.png"
            mobileImage="https://i.imgur.com/jRdz0Zs.png"
            link="https://web.archive.org/web/20230311032145/https://lp2.sonictelecom.com.br/"
          />
        </Portfolio>
      </SwiperSlide>
    </FullSwiper>
  );
};

export default Home;
