import {FC} from 'react'
import Link from "next/link"
import Image from "next/image"
import {useRouter} from "next/router"
import styles from './footer.module.scss'
import {navigation} from "../header/Header"
import {ROUTES} from "../../constants/route.constants"

interface IFooterProps {
  show: boolean
}

const Footer: FC<IFooterProps> = ({show}) => {
  const {pathname} = useRouter()

  return (
    <div className={show ? styles.footer_wrapper_show : styles.footer_wrapper}>
      <div className={styles.rowContainer}>
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
        <div className={styles.copyrightContainer}>
          <h3>CrankIT.com  2023 ©</h3>
          <h3>design by Sofiia Tonkonoh</h3>
          <h3>privacy policy</h3>
        </div>
      </div>
    </div>
  )
}

export default Footer
