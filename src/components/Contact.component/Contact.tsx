import styles from './Contact.module.scss'
import {SendButton} from "../Buttons.collection/Buttons.collection";

const Contact = () => {
  return (
    <div className={styles.wrapper} id={"contact_us"}>
      <div className={styles.formWrapper}>
        <div className={styles.leftContainer}>
          <div className={styles.rightTextContainer}>
            <h1 className={styles.rightTitle}>Write to us</h1>
            <h2 className={styles.text}>Et velit et dictum.</h2>
            <h2 className={styles.text}>Nulla ornare in platea.</h2>
            <h2 className={styles.text}>Dictumst, sit et vulputat.</h2>
            <h2 className={styles.text}>Amet pulvinar non dictum.</h2>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <h1 className={styles.formTitle}>Contact us</h1>
          <div className={styles.topInputContainer}>
            <input
              type="text"
              placeholder={"Your name"}
              className={styles.inputTop}
            />
            <input
              type="text"
              placeholder={"Your email"}
              className={styles.inputTop}
            />
          </div>

          <div className={styles.messageContainer}>
            <textarea
              id="body_message"
              name="body_message"
              placeholder={"Your message"}
            />
          </div>

          <div className={styles.checkboxContainer}>
            <input type="radio" id="radio1" className={styles.radio_input}/>
            <label htmlFor="radio1" className={styles.radio_label}>3D modeling</label>

            <input type="radio" id="radio2" className={styles.radio_input}/>
            <label htmlFor="radio2" className={styles.radio_label}>UI/UX Design</label>

            <input type="radio" id="radio3" className={styles.radio_input}/>
            <label htmlFor="radio3" className={styles.radio_label}>Web Development</label>

            <input type="radio" id="radio4" className={styles.radio_input}/>
            <label htmlFor="radio4" className={styles.radio_label}>Another</label>
          </div>

          <SendButton disable={false} title={"Send"} click={() => console.log('SEND')}></SendButton>
        </div>
      </div>
    </div>
  )
}

export default Contact
