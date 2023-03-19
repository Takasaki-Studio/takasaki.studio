import styles from "./Tech.module.scss";

export interface TechProps extends React.PropsWithChildren {
  title: string;
  className?: string;
}

const Tech: React.FC<TechProps> = (props: TechProps) => {
  return (
    <div className={styles.tech}>
      <p className={props.className}>{props.title}</p>
      {props.children}
    </div>
  );
};

export default Tech;
