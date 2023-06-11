import {FC} from "react";

interface IPropsIcon {
  _class?: string
}

export const ItemListIcon: FC<IPropsIcon> = ({_class = ""}) => {
  return (
    <svg className={_class} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="10" height="10" fill="#E5BE2C"/>
      <rect x="0.800049" y="0.800049" width="8.4" height="8.4" fill="#202121"/>
      <rect x="1.59998" y="1.59998" width="6.8" height="6.8" fill="#E5BE2C"/>
    </svg>
  )
}
