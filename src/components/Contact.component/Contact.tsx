import styles from './Contact.module.scss'

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <div className={styles.rightContainer}>
          <h1 className={styles.rightTitle}>Write to us</h1>
          <h2 className={styles.text}>Et velit et dictum.</h2>
          <h2 className={styles.text}>Nulla ornare in platea.</h2>
          <h2 className={styles.text}>Dictumst, sit et vulputat.</h2>
          <h2 className={styles.text}>Amet pulvinar non dictum.</h2>
        </div>
        <div className={styles.leftContainer}>
          <h1 className={styles.formTitle}>Contact us</h1>
          <div className={styles.topInputContainer}></div>
          <div className={styles.messageContainer}>MESSAGE TEXT HERE</div>
          <div className={styles.checkboxContainer}></div>
          <div className={styles.sendButton}>Send</div>
        </div>
      </div>
    </div>
  )
}

export default Contact
