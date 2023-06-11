import styles from './Contact.module.scss'
import {SendButton} from "../Buttons.collection/Buttons.collection";
import {useEffect, useRef, useState} from "react";

const Contact = () => {
  const targetRef = useRef(null);
  const [isShow, setIsShow] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element is now visible on the screen
          setIsShow(true)
        } else {
          // Element is no longer visible on the screen
          setIsShow(false)
        }
      });
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
      setIsShow(false)
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div ref={targetRef} className={styles.wrapper} id={"contact_us"}>
      <div className={isShow ? styles.formWrapper : styles.formWrapperHide}>
        <div className={isShow ? styles.leftContainer : styles.leftContainerHide}>
          <div className={styles.leftTextContainer}>
            <h1 className={isShow ? styles.leftTitle : styles.leftTitleHide}>Write to us</h1>
            <h2 className={isShow ? styles.text : styles.textHide}>Et velit et dictum.</h2>
            <h2 className={isShow ? styles.text : styles.textHide}>Nulla ornare in platea.</h2>
            <h2 className={isShow ? styles.text : styles.textHide}>Dictumst, sit et vulputat.</h2>
            <h2 className={isShow ? styles.text : styles.textHide}>Amet pulvinar non dictum.</h2>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <h1 className={isShow ? styles.formTitle : styles.formTitleHide}>Contact us</h1>
          <div className={styles.topInputContainer}>
            <input
              type="text"
              placeholder={"Your name"}
              className={isShow ? styles.inputTopLeftShow : styles.inputTopLeft}
            />
            <input
              type="text"
              placeholder={"Your email"}
              className={isShow ? styles.inputTopRightShow : styles.inputTopRight}
            />
          </div>

          <div className={isShow ? styles.messageContainer : styles.messageContainerHide}>
            <textarea
              id="body_message"
              name="body_message"
              placeholder={"Your message"}
            />
          </div>

          <div className={isShow ? styles.checkboxContainer : styles.checkboxContainerHide}>
            <input type="radio" id="radio1" className={styles.radio_input}/>
            <label htmlFor="radio1" className={styles.radio_label}>3D modeling</label>

            <input type="radio" id="radio2" className={styles.radio_input}/>
            <label htmlFor="radio2" className={styles.radio_label}>UI/UX Design</label>

            <input type="radio" id="radio3" className={styles.radio_input}/>
            <label htmlFor="radio3" className={styles.radio_label}>Web Development</label>

            <input type="radio" id="radio4" className={styles.radio_input}/>
            <label htmlFor="radio4" className={styles.radio_label}>Another</label>
          </div>

          <div className={isShow ? styles.sendContainer : styles.sendContainerHide}>
            <SendButton disable={false} title={"Send"} click={() => console.log('SEND')}></SendButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
