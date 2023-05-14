import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from './Navbar.module.scss'
import { ROUTES } from '../../constants/route.constants'

interface INavigation {
  id: number,
  title: 'home' | 'posts' | 'contacts' | 'fiber',
  path: string,
}

const navigation: INavigation[] = [
  { id: 1, title: 'home', path: '/' },
  { id: 2, title: 'posts', path: '/posts' },
  { id: 3, title: 'contacts', path: '/contacts' },
  { id: 4, title: 'fiber', path: '/fiber' },
]

const Navbar: FC = () => {
  const { pathname } = useRouter()

  return (
    <nav className={ styles.nav }>
      <div className={ styles.logo }>
        <Image src="/logo.png" width={ 150 } height={ 60 } alt="logo"/>
      </div>
      <div className={ styles.links }>
        { navigation.map(( { id, title, path } ) => (
          <Link key={ id } href={ ROUTES[title] }>
            <a className={ pathname === path ? styles.active : undefined }>{ title }</a>
          </Link>
        )) }
      </div>
    </nav>
  )
}

export default Navbar
