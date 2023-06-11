import {FC, ReactNode, useEffect, useState} from "react";
import styles from "./FullWidth.module.scss";

interface IProps {
  background: string,
  children: ReactNode,
  isPaddingDisabled: boolean,
}

const FullWidthContainer: FC<IProps> = ({background = '', children, isPaddingDisabled = false}) => {
  return (
    <div>
      <div
        className={styles.container}
        style={background ? isPaddingDisabled ? {
          background: background,
          padding: 0
        } : {background: background} : isPaddingDisabled ? {padding: 0} : {}}
      >
        {children}
      </div>
    </div>
  )
}


export default FullWidthContainer
