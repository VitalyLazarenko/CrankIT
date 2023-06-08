import {FC} from 'react'
import Head from 'next/head'
import {GetStaticProps} from 'next'
import styles from './works.module.scss'
import {postType} from '../../types/app.types/appTypes'
import {requestConstants} from '../../constants/request.constans'
import Header from "../../components/header/Header";
import FullWidthContainer from "../../components/FullWidth.component/FullWidth";
import Contact from "../../components/Contact.component/Contact";

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(requestConstants.posts)
  const data = await response.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {posts: data},
  }
}

interface IPostsProps {
  posts: postType[]
}

const Posts: FC<IPostsProps> = ({posts}) => {
  return (
    <>
      <div className={styles.worksWrapper}>
        <Head>
          <title>Our works</title>
        </Head>

        <div>
          <Header mainBlock={false} mainPage={false}/>
          <FullWidthContainer background={'url(/assets/images/BG_Model.png)'}>
            <div className={styles.mainScreenWrapper}>
              <h1 className={styles.title}>Skills container</h1>
            </div>
          </FullWidthContainer>

          <FullWidthContainer background={'url(/assets/images/BG_Model.png)'}>
            <div className={styles.mainScreenWrapper}>
              <h1 className={styles.title}>Skills container</h1>
            </div>
          </FullWidthContainer>

          <FullWidthContainer background={'url(/assets/images/BG_Model.png)'}>
            <div className={styles.mainScreenWrapper}>
              <h1 className={styles.title}>Skills container</h1>
            </div>
          </FullWidthContainer>
        </div>
        <FullWidthContainer background={'#202121'}>
          <Contact/>
        </FullWidthContainer>
      </div>
    </>
  )
}

export default Posts
