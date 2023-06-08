import Head from 'next/head'
import type {NextPage} from 'next'
import {GetStaticProps} from 'next'
import styles from '../styles/Home.module.scss'
import Header from "../components/header/Header"
import {SocialTypes} from '../types/app.types/appTypes'
import Contact from "../components/Contact.component/Contact"
import {requestConstants} from '../constants/request.constans'
import FullWidthContainer from "../components/FullWidth.component/FullWidth"
import React, {DetailedHTMLProps, forwardRef, ImgHTMLAttributes, LegacyRef, useEffect, useRef, useState} from "react";
import contact from "../components/Contact.component/Contact";

import Image, {ImageProps} from 'next/image';

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(requestConstants.socials)
    const data = await response.json()

    if (!data) {
      return {
        notFound: true,
      }
    }

    return {
      props: {socials: data},
    }
  } catch {
    return {
      props: {socials: null},
    }
  }
}

interface IHomePage {
  socials: SocialTypes[]
}

const Home: NextPage<IHomePage> = ({socials}) => {
  const container: LegacyRef<HTMLDivElement> | undefined = useRef<HTMLImageElement>(null)
  const titleRef: LegacyRef<HTMLDivElement> | undefined = useRef<HTMLImageElement>(null)
  const [grass, setGrass] = useState<EventTarget | null>(null)
  const [rocks, setRocks] = useState<EventTarget | null>(null)

  useEffect(() => {
    console.log(2);
    if (container.current && grass && rocks) {
      console.log(2);
      container.current.addEventListener('mousemove', (event) => {
        const {offsetX: x, offsetY: y} = event
        // @ts-ignore
        const {offsetWidth: widthGrass, offsetHeight: heightGrass} = grass
        console.log(1);

        const move = 5

        // @ts-ignore
        grass.style.transform = `translate(${-x / widthGrass * (move) - move}px, ${-y / heightGrass * (move * 2) - move}px) scale(1.1)`;
        // @ts-ignore
        rocks.style.transform = `translate(${x / widthGrass * (move) - move}px, ${y / heightGrass * (move * 2) - move}px) scale(1.1)`;
        // @ts-ignore
        titleRef.current.style.transform = `translate(${-x / widthGrass * (move * 5) - move}px, ${y / heightGrass * (move * 5) - move}px)`;
      })
    }
  }, [container.current, grass, rocks])

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>CrankIT</title>
      </Head>

      {/*<FullWidthContainer background={'url(/assets/images/BG_2_1.webp)'}>*/}
      <FullWidthContainer background={''}>
        <div className={styles.mainScreenWrapper}>
          <Image
            layout='fill'
            src="/assets/images/banner/BG_2_1.webp"
            alt="bg"
          />
          <Image
            // onLoad={(e) => setRocks(e.target)}
            layout='fill'
            className={styles.image}
            src="/assets/images/banner/Mountains_Big.webp"
            alt="rocks"/>
          <Image
            onLoad={(e) => setRocks(e.target)}
            layout='fill'
            className={styles.image}
            src="/assets/images/banner/Rocks_Big.webp"
            alt="rocks"/>
          <Image
            onLoad={(e) => setGrass(e.target)}
            layout='fill'
            className={styles.image}
            src="/assets/images/banner/Grass_Big.webp"
            alt="grass"/>

          <div ref={container} style={{position: "absolute", width: '100vw', height: '100vh', zIndex: 300}}/>
          <h1 ref={titleRef} className={styles.title}>Sed cras integer mattis in id </h1>
        </div>
        <Header mainBlock={true} mainPage={true}/>
      </FullWidthContainer>

      <div>
        <Header mainBlock={false} mainPage={true}/>
        <FullWidthContainer background={'url(/assets/images/BG_matrix.svg)'}>
          <div className={styles.mainScreenWrapper}>
            <h1 className={styles.title}>Skills container</h1>
          </div>
        </FullWidthContainer>
      </div>

      <FullWidthContainer background={'#202121'}>
        <Contact/>
      </FullWidthContainer>
    </div>
  )
}
export default Home
