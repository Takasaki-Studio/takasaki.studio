import classNames from "classnames";

import styles from "./Title.module.scss";

export type TitleProps = React.HTMLAttributes<HTMLHeadingElement>;

const Title: React.FC<TitleProps> = ({ className, ...props }) => {
  return <h1 className={classNames(className, styles.title)} {...props} />;
};

export default Title;
