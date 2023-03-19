import styles from "./Stars.module.scss";

export interface StarsProps {
  className?: string;
}

const Stars: React.FC<StarsProps> = (props) => {
  return (
    <div className={props.className}>
      <div className={styles.starsAnimation}></div>
      <div className={styles.stars2Animation}></div>
      <div className={styles.stars3Animation}></div>
    </div>
  );
};

export default Stars;
