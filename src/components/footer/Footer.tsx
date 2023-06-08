import {FC} from 'react'
import Link from "next/link"
import {useRouter} from "next/router"
import styles from './footer.module.scss'
import {navigation} from "../header/Header"
import {ROUTES} from "../../constants/route.constants"
import {translate} from "maath/buffer";

interface IFooterProps {
  show: boolean
}

const Footer: FC<IFooterProps> = ({show}) => {
  const {pathname} = useRouter()

  const handleCLickCurrentPage = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div
      className={styles.footer_wrapper}
      style={show ? {transform: 'translateY(-100%)'} : {}}
    >
      <div className={styles.rowContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <img src="/assets/images/Logo.svg" className={styles.image} alt="logo"/>
          </div>
          <div className={styles.links}>
            {navigation.map(({id, title, route, path}) => {
              if (pathname === path) {
                return (
                  <div key={id} onClick={handleCLickCurrentPage}>
                    <a>{title}</a>
                  </div>
                )
              } else {
                return (
                  <Link key={id} href={ROUTES[route]}>
                    <a>{title}</a>
                  </Link>
                )
              }
              })}
          </div>
        </div>
        <div className={styles.copyrightContainer}>
          <h3>CrankIT.com 2023 ©</h3>
          <h3>design by Sofiia Tonkonoh</h3>
          <h3>privacy policy</h3>
        </div>
      </div>
    </div>
  )
}

export default Footer
