import {FC, ReactNode, useEffect, useState} from "react";
import styles from "./FullWidth.module.scss";

interface IProps {
  background: string,
  children: ReactNode,
}

const FullWidthContainer: FC<IProps> = ({background = '', children}) => {
  return (
    <div>
      <div className={styles.container} style={background ? {background: background} : {}}>
        {children}
      </div>
    </div>
  )
}


export default FullWidthContainer
