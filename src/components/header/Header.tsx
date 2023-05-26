import {FC} from 'react'
import Link from "next/link"
import Image from "next/image"
import {useRouter} from "next/router"
import useStore from "../../store/store"
import styles from './header.module.scss'
import {ROUTES} from "../../constants/route.constants"

export interface INavigation {
  id: number,
  title: string,
  route: 'home' | 'posts' | 'contacts' | 'fiber',
  path: string,
}

export const navigation: INavigation[] = [
  {id: 1, title: 'Home', route: 'home', path: '/'},
  {id: 2, title: 'Our works', route: 'posts', path: '/posts'},
  {id: 3, title: 'About us', route: 'contacts', path: '/contacts'},
  {id: 4, title: 'Contact us', route: 'fiber', path: '/fiber'},
]

interface IHeaderProps {
  mainBlock: boolean,
}

const Header: FC<IHeaderProps> = ({mainBlock = false}) => {
  const {pathname} = useRouter()
  const isShowFooter = useStore((state) => state.showFooter)
  const isShowHeader = useStore((state) => state.showHeader)

  return (
    <div
      className={mainBlock ? isShowHeader ? styles.headerWrapperMain : styles.headerWrapperMainHide : isShowFooter ? styles.headerWrapperHide : styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Image src="/assets/images/Logo.svg" width={150} height={60} alt="logo"/>
        </div>
        <div className={styles.links}>
          {navigation.map(({id, title, route, path}) => (
            <Link key={id} href={ROUTES[route]}>
              <a className={pathname === path ? styles.active : undefined}>{title}</a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
