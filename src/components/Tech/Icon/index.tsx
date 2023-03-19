import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./TechIcon.module.scss";

export interface TechIconProps {
  color: string;
  icon: IconProp;
}

const TechIcon: React.FC<TechIconProps> = (props) => {
  return (
    <div className={styles.icon} style={{ backgroundColor: props.color }}>
      <FontAwesomeIcon icon={props.icon} />
    </div>
  );
};

export default TechIcon;
