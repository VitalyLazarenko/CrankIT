import { FC } from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { contactType } from '../../types/app.types/appTypes'
import ContactInfo from '../../components/contact.info/ContactInfo'

export const getServerSideProps: GetServerSideProps = async ( context ) => {
  // @ts-ignore TODO need check this!
  const { id } = context.params
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${ id }`)
  const data = await response.json()

  if ( !data ) {
    return {
      notFound: true,
    }
  }

  return {
    props: { contact: data },
  }
}

interface IContactProps {
  contact: contactType
}

const Contact: FC<IContactProps> = ( { contact } ) => (
  <>
    <Head>
      <title>Contact page</title>
    </Head>
    <ContactInfo contact={ contact }/>
  </>
)

export default Contact
