import React, {FC} from 'react'
import Head from 'next/head'
import {GetStaticProps} from 'next'
import styles from './works.module.scss'
import {postType} from '../../types/app.types/appTypes'
import {requestConstants} from '../../constants/request.constans'
import Header from "../../components/Header.component/Header";
import FullWidthContainer from "../../components/FullWidth.component/FullWidth";
import Contact from "../../components/Contact.component/Contact";
import {WorkViewerComponent} from "../../components/WorkViewer.component/WorkViewerComponent";

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

const WorksPage: FC<IPostsProps> = ({posts}) => {
  return (
    <>
      <div className={styles.worksWrapper}>
        <Head>
          <title>Our works</title>
        </Head>

        <div>
          <Header mainBlock={false} mainPage={false}/>
          <FullWidthContainer background={'url(/assets/images/BG_Model.png)'} isPaddingDisabled={false}>
            <WorkViewerComponent isLeft={true}/>
          </FullWidthContainer>

          <FullWidthContainer background={'url(/assets/images/BG_Model.png)'} isPaddingDisabled={false}>
            <WorkViewerComponent isLeft={false}/>
          </FullWidthContainer>

          <FullWidthContainer background={'url(/assets/images/BG_Model.png)'} isPaddingDisabled={false}>
            <WorkViewerComponent isLeft={true}/>
          </FullWidthContainer>
        </div>
        <FullWidthContainer background={'#202121'} isPaddingDisabled={false}>
          <Contact/>
        </FullWidthContainer>
      </div>
    </>
  )
}

export default WorksPage
