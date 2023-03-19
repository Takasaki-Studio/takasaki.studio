import styles from "./TechGroup.module.scss";

export type TechGroupProps = React.PropsWithChildren;

const TechGroup: React.FC<TechGroupProps> = (props) => {
  return <div className={styles.group}>{props.children}</div>;
};

export default TechGroup;
