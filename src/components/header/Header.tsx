import {FC} from 'react'
import styles from './header.module.scss'
import Image from "next/image";
import Link from "next/link";
import {ROUTES} from "../../constants/route.constants";
import {useRouter} from "next/router";

export interface INavigation {
  id: number,
  title: string,
  route: 'home' | 'posts' | 'contacts' | 'fiber',
  path: string,
}

export const navigation: INavigation[] = [
  { id: 1, title: 'Home', route: 'home', path: '/' },
  { id: 2, title: 'Our works', route: 'posts', path: '/posts' },
  { id: 3, title: 'About us', route: 'contacts', path: '/contacts' },
  { id: 4, title: 'Contact us', route: 'fiber', path: '/fiber' },
]
const Header: FC = () => {
  const { pathname } = useRouter()

  return (
    <div className={styles.header_wrapper}>
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
