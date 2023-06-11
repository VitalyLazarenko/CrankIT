import styles from "./homeViewer.module.scss";
import React, {FC, useEffect, useRef, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {CameraController} from "../webGL.component/Camera.component";
import {LightComponent} from "../webGL.component/Light.component";
import {BoxComponent} from "../webGL.component/Box.component";
import {ItemListIcon} from "../Icon.collection/Icons.collection";

export const HomeViewerComponent:FC = () => {
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
      },
      {
        root: null, // Set the root element (default is viewport)
        rootMargin: '0px', // Adjust the root margin as needed
        threshold: 0.5, // Specify the intersection threshold (e.g., 0.5 for 50% visibility)
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
    <div ref={targetRef} className={styles.homeViewerWrapper}>
      <Canvas>
        <CameraController/>
        <LightComponent/>
        <BoxComponent position={[2, 0, 0]} name={'12'}/>
      </Canvas>

      <div className={isShow ? styles.descriptionWrapper : styles.descriptionWrapperHide}>
        <div className={styles.headContainer}>
          <h1 className={isShow ? styles.title : styles.titleHide}>Our skills</h1>
          <div className={isShow ? styles.description : styles.descriptionHide}>
            Ut. Nisi dapibus ultricies. Eget dui vel mollis sed tortor, dolor arcu arcu amet, quam, in odio. Orn Ut.
            Nisi dapibus ultricies. Eget dui vel mollis sed tortor, dolor arcu arcu amet, quam, in odio. Orn
          </div>
        </div>
        <div className={styles.skillsContainer}>
          <h2 className={isShow ? styles.skillTitle : styles.skillTitleHide}>Front-end</h2>
          <div className={isShow ? styles.skillsList : styles.skillsListHide}>
            <div className={styles.listItem}>
              <span className={styles.icon}>
                <ItemListIcon/>
              </span>Et velit et dictum.
            </div>
            <div className={styles.listItem}>
              <span className={styles.icon}>
                <ItemListIcon/>
              </span>
              Nulla ornare in platea.
            </div>
            <div className={styles.listItem}>
              <span className={styles.icon}>
                <ItemListIcon/>
              </span>
              Dictumst, sit et vulputat.
            </div>
            <div className={styles.listItem}>
              <span className={styles.icon}>
                <ItemListIcon/>
              </span>Et velit et dictum.
            </div>
            <div className={styles.listItem}>
              <span className={styles.icon}>
                <ItemListIcon/>
              </span>
              Nulla ornare in platea.
            </div>
            <div className={styles.listItem}>
              <span className={styles.icon}>
                <ItemListIcon/>
              </span>
              Dictumst, sit et vulputat.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
