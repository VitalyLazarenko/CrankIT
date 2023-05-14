import { FC } from 'react'
import styles from './contact.module.scss'
import { contactType } from '../../types/app.types/appTypes'

interface IContactInfoProps {
  contact: contactType,
}

const ContactInfo: FC<IContactInfoProps> = ( { contact } ) => {
  const { name, email, address } = contact || {}
  const { street, suite, city, zipcode } = address || {}

  if ( !contact ) {
    return <h3>Empty Cotact</h3>
  }

  return (
    <div className={styles.contact_wrapper}>
      <h3>{ name }</h3>
      <div>
        <strong>Email: </strong>
        { email }
      </div>
      <div>
        <strong>Address: </strong>
        { `${ street }, ${ suite }, ${ city }, ${ zipcode }` }
      </div>
    </div>
  )
}

export default ContactInfo
