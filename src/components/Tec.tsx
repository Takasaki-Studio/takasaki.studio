import Image, { StaticImageData } from "next/image";
import styles from "./Tec.module.scss";

export interface TecProps {
    title: string;
    className?: string;
    image: StaticImageData;
}

export default function Tec(props: TecProps) {
    return (
        <div className={styles.tech}>
            <p className={props.className}>{props.title}</p>
            <Image alt={props.title} src={props.image}></Image>
        </div>
    );
}
