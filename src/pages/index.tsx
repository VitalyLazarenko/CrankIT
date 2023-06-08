import Head from 'next/head'
import type {NextPage} from 'next'
import {GetStaticProps} from 'next'
import styles from '../styles/Home.module.scss'
import Header from "../components/header/Header"
import {SocialTypes} from '../types/app.types/appTypes'
import Contact from "../components/Contact.component/Contact"
import {requestConstants} from '../constants/request.constans'
import FullWidthContainer from "../components/FullWidth.component/FullWidth"

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(requestConstants.socials)
    const data = await response.json()

    if (!data) {
      return {
        notFound: true,
      }
    }

    return {
      props: {socials: data},
    }
  } catch {
    return {
      props: {socials: null},
    }
  }
}

interface IHomePage {
  socials: SocialTypes[]
}

const Home: NextPage<IHomePage> = ({socials}) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>CrankIT</title>
      </Head>

      <FullWidthContainer background={'url(/assets/images/BG_2_1.webp)'}>
        <div className={styles.mainScreenWrapper}>
          <h1 className={styles.title}>Sed cras integer mattis in id </h1>
        </div>
        <Header mainBlock={true} mainPage={true}/>
      </FullWidthContainer>

      <div>
        <Header mainBlock={false} mainPage={true}/>
        <FullWidthContainer background={'url(/assets/images/BG_matrix.svg)'}>
          <div className={styles.mainScreenWrapper}>
            <h1 className={styles.title}>Skills container</h1>
          </div>
        </FullWidthContainer>
      </div>

      <FullWidthContainer background={'#202121'}>
        <Contact/>
      </FullWidthContainer>
    </div>
  )
}
export default Home
