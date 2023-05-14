import { FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import styles from './contacts.module.scss'
import { contactType } from '../../types/app.types/appTypes'
import { requestConstants } from '../../constants/request.constans'

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
        <title>Contacts</title>
      </Head>

      <h3 className={ styles.title }>This page create with SSR technology:</h3>
      <h3 className={ styles.sub_title }>This technology allows you to generate a page on the server side on request,
        <br/>that is, its static HTML and CSSS files will be created only after this page is requested.
        <br/>This approach allows you to reduce the build size by a factor, but increases the download speed.
        <br/>
        <br/>This component also uses dynamic creation of links for each post.
      </h3>

      <ul className={ styles.list_wrapper }>
        { contacts && contacts.map(( { id, name } ) => (
          <li key={ id } className={ styles.list_item }>
            <Link href={ `/contacts/${ id }` }>{ name }</Link>
          </li>
        )) }
      </ul>
    </>
  )
}

export default Contacts
