import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { ImageProps } from "next/image";

import styles from "./PortfolioItem.module.scss";

export interface PortfolioItemProps {
  image: ImageProps["src"];
  mobileImage: ImageProps["src"];
  description: string;
  link: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = (props) => {
  return (
    <div className={styles.item}>
      <Image
        className={styles.image}
        src={props.image}
        alt="Imagem do projeto"
        unoptimized
        fill
      />
      <Image
        className={styles.mobileImage}
        src={props.mobileImage}
        alt="Imagem do projeto"
        fill
      />
      <div className={styles.info}>
        <div className={styles.infoContent}>
          <p>{props.description}</p>
          <a
            className={styles.button}
            target="_blank"
            rel="noreferrer"
            href={props.link}
          >
            Visualizar <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
