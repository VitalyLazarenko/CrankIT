import Head from 'next/head'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import styles from '../styles/Home.module.scss'
import Socials from '../components/socials/Socials'
import { SocialTypes } from '../types/app.types/appTypes'
import { requestConstants } from '../constants/request.constans'

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(requestConstants.socials)
    const data = await response.json()

    if ( !data ) {
      return {
        notFound: true,
      }
    }

    return {
      props: { socials: data },
    }
  } catch {
    return {
      props: { socials: null },
    }
  }
}

interface IHomePage {
  socials: SocialTypes[]
}

const Home: NextPage<IHomePage> = ( { socials } ) => {
  return (
    <div className={ styles.wrapper }>
      <Head>
        <title>Home</title>
      </Head>

      <div className={ styles.text_wrapper }>
        <h1 className={ styles.title }>Hello comrade!</h1>
        <h2 className={ styles.sub_title }>This app is created with Next.js, React-Three-Fiber and Zustand.</h2>
        <h3 className={ styles.api }>The links below were obtained using the mini API in the app.</h3>
      </div>

      <Socials socials={ socials }/>
    </div>
  )
}
export default Home