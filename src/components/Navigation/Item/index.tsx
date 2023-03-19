import classNames from "classnames";
import styles from "./NavigationItem.module.scss";

export type NavigationItemProps = React.HTMLAttributes<HTMLDivElement>;

const NavigationItem: React.FC<NavigationItemProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={classNames(styles.item, className)} {...props}>
      {children}
    </div>
  );
};

export default NavigationItem;
