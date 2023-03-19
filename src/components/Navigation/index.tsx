import styles from "./Navigation.module.scss";

export type NavigationProps = React.PropsWithChildren;

const Navigation: React.FC<NavigationProps> = (props) => {
  return <nav className={styles.nav}>{props.children}</nav>;
};

export default Navigation;
