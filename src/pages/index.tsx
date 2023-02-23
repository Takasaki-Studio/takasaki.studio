import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Logo from "@/assets/logo.svg";
import Next from "@/assets/next.svg";
import Tec from "@/components/Tec";
import mta from "@/assets/portfolio/mta.png";
import nico from "@/assets/portfolio/nico.png";
import { faArrowUpRightFromSquare, faWrench, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import {
    faReact,
    faHtml5,
    faDiscord,
    faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TecFontsAwesome from "@/components/TecFontsAwesome";

const ITEMS = [
    {
        description: "a",
        image: nico,
        link: "https://example.com",
    },
    {
        description:
            "MTA List é uma lista de servidores de Multi Theft Auto. Foi realizado o front-end e o back-end dessa aplicação, além de uma Dashboard.",
        image: mta,
        link: "https://example.com",
    },
] as const;

export default function Home() {
    return (
        <>
            <div className={styles.home}>
                <Image
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
                        Aqui as suas ideias viram{" "}
                        <span className="rgb">realidade</span>
                    </h1>
                    <p className={styles.subTitle}>
                        Na Takasaki Studio construímos soluções para tornar
                        possível o seu sonho, garantindo sempre a qualidade e um
                        desenvolvimento personalizado para as suas necessidades
                    </p>
                </div>

                <div className={styles.tecnologias}>
                    <TecFontsAwesome
                        color="#00CCF2"
                        title="Website SPA"
                        icon={faReact}
                    />
                    <TecFontsAwesome
                        color="#E34F26"
                        title="Website estático"
                        icon={faHtml5}
                    />
                    <Tec image={Next} title="Website dinâmico"></Tec>
                    <TecFontsAwesome
                        color="#5865F2"
                        title="Bots para Discord"
                        icon={faDiscord}
                    />
                    <TecFontsAwesome
                        color="#0088CC"
                        title="Bots para Telegram"
                        icon={faTelegram}
                    />
                    <TecFontsAwesome
                        color="#CD3333"
                        title="Manutenções"
                        icon={faWrench}
                    />
                    <TecFontsAwesome
                        color="#745CFF"
                        title="E muito mais!"
                        icon={faLightbulb}
                        className="rgb"
                    />
                </div>
            </div>

            <div className={styles.portfolio} id="portfolio">
                <h1 className={styles.title}>
                    Nosso <span className="rgb">portfólio</span>
                </h1>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView="auto"
                    navigation
                    pagination={{ clickable: true }}
                    className={styles.swiper}
                >
                    {ITEMS.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.itemPortfolio}>
                                <Image
                                    src={item.image}
                                    alt={item.description}
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
                                            <FontAwesomeIcon
                                                icon={faArrowUpRightFromSquare}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
}
