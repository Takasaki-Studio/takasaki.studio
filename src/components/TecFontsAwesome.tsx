import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Tec.module.scss";

export interface TecFontsAwesomeProps {
    title: string;
    color: string;
    className?: string;
    icon: IconProp;
}

export default function TecFontsAwesome(props: TecFontsAwesomeProps) {
    return (
        <div className={styles.tech}>
            <p className={props.className}>{props.title}</p>
            <div
                className={styles.icon}
                style={{ backgroundColor: props.color }}
            >
                <FontAwesomeIcon icon={props.icon} />
            </div>
        </div>
    );
}
