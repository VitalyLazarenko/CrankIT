import { FC } from 'react'
import Navbar from '../navbar/Navbar'
import styles from './header.module.scss'

const Header: FC = () => (
  <div className={styles.header_wrapper}>
    <Navbar/>
  </div>
)

export default Header
