import {FC, ReactNode} from "react";
import styles from "./FullWidth.module.scss";

interface IProps {
  background: string,
  children: ReactNode
}

const FullWidthContainer: FC<IProps> = ({background, children}) => (
  <div className={styles.container} style={{background: background}}>
    {children}
  </div>
)


export default FullWidthContainer
