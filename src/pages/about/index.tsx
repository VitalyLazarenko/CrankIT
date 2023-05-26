import { FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import styles from './contacts.module.scss'
import { contactType } from '../../types/app.types/appTypes'
import { requestConstants } from '../../constants/request.constans'
import Header from "../../components/header/Header";
import FullWidthContainer from "../../components/FullWidth.component/FullWidth";
import Contact from "../../components/Contact.component/Contact";

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(requestConstants.users)
  const data = await response.json()

  if ( !data ) {
    return {
      notFound: true,
    }
  }

  return {
    props: { contacts: data },
  }
}

interface IContactsProps {
  contacts: contactType[]
}

const Contacts: FC<IContactsProps> = ( { contacts } ) => {
  return (
    <>
      <Head>
        <title>About us</title>
      </Head>

      <div>
        <Header mainBlock={false} mainPage={false}/>

        <FullWidthContainer background={'url(/assets/images/BG_Model.png)'}>
          <div className={styles.mainScreenWrapper}>
            <h1 className={styles.title}>Skills container</h1>
          </div>
        </FullWidthContainer>

        <FullWidthContainer background={'#202121'}>
          <Contact/>
        </FullWidthContainer>
      </div>
    </>
  )
}

export default Contacts
