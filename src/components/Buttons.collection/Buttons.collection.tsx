import {FC} from "react";
import styles from './Button.collection.module.scss'
interface IButton {
  disable?: boolean,
  title: string,
  click: () => void,
}

export const SendButton: FC<IButton> = ({disable = false, title, click}) => {
  return (
    <button
      disabled={disable}
      className={styles.sendButton}
      onClick={click}
    >
      {title}
    </button>
  )
}
