import classNames from "classnames";

import styles from "./Highlight.module.scss";

export type HighlightProps = React.HTMLAttributes<HTMLSpanElement>;

export const Highlight: React.FC<HighlightProps> = ({
  className,
  ...props
}) => {
  return (
    <span className={classNames(className, styles.highlight)} {...props} />
  );
};
