import Head from 'next/head'
import type {NextPage} from 'next'
import {GetStaticProps} from 'next'
import styles from '../styles/Home.module.scss'
import Header from "../components/Header.component/Header"
import {SocialTypes} from '../types/app.types/appTypes'
import Contact from "../components/Contact.component/Contact"
import {requestConstants} from '../constants/request.constans'
import FullWidthContainer from "../components/FullWidth.component/FullWidth"
import React, {LegacyRef, useEffect, useRef, useState} from "react";
import Image from 'next/image';
import {HomeViewerComponent} from "../components/HomeViewer.component/HomeViewerComponent";

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
  const [clouds, setClouds] = useState<EventTarget | null>(null)

  const deltaGrass: number = 0.6
  const deltaRocks: number = 1
  const deltaClouds: number = 4
  const deltaTitle: number = 3

  useEffect(() => {
    if (container.current && grass && rocks && clouds) {
      container.current.addEventListener('mousemove', (event) => {
        const {offsetX: x, offsetY: y} = event
        // @ts-ignore
        const {offsetWidth: widthGrass, offsetHeight: heightGrass} = grass
        console.log(1);

        const move = 5

        // @ts-ignore
        grass.style.transform = `translate(${-x / widthGrass * (move * deltaGrass) - move}px, ${-y / heightGrass * (move * deltaGrass) - move}px)`;
        // @ts-ignore
        rocks.style.transform = `translate(${x / widthGrass * (move * deltaRocks) - move}px, ${y / heightGrass * (move * deltaRocks) - move}px)`;
        // @ts-ignore
        clouds.style.transform = `translate(${x / widthGrass * (move * deltaClouds) - move}px, ${y / heightGrass * (move * deltaClouds) - move}px)`;
        // @ts-ignore
        titleRef.current.style.transform = `translate(${-x / widthGrass * (move * deltaTitle) - move}px, ${y / heightGrass * (move * deltaTitle) - move}px)`;
      })
    }
  }, [container.current, grass, rocks])

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>CrankIT</title>
      </Head>

      {/*<FullWidthContainer background={'url(/assets/images/BG_2_1.webp)'}>*/}
      <FullWidthContainer background={''} isPaddingDisabled={false}>
        <div className={styles.mainScreenWrapper}>
          <Image
            layout='fill'
            src="/assets/images/banner/new/BG_Mountains_Big_2.webp"
            alt="bg"
          />
          <Image
            onLoad={(e) => setClouds(e.target)}
            layout='fill'
            className={styles.image}
            src="/assets/images/banner/new/Cloud_Big.webp"
            alt="rocks"/>
          <Image
            onLoad={(e) => setRocks(e.target)}
            layout='fill'
            className={styles.image}
            src="/assets/images/banner/new/Rocks_Big.webp"
            alt="rocks"/>
          <Image
            onLoad={(e) => setGrass(e.target)}
            layout='fill'
            className={styles.image}
            src="/assets/images/banner/new/Grass_Big.webp"
            alt="grass"/>

          <div ref={container} style={{position: "absolute", width: '100vw', height: '100vh', zIndex: 300}}/>
          <h1 ref={titleRef} className={styles.title}>Sed cras integer mattis in id </h1>
        </div>
        <Header mainBlock={true} mainPage={true}/>
      </FullWidthContainer>

      <div>
        <Header mainBlock={false} mainPage={true}/>
        <FullWidthContainer background={'#202121'} isPaddingDisabled={false}>
          <div className={styles.mainScreenWrapper}>
            <h1 className={styles.title}>Why are you need to work with us?</h1>
          </div>
        </FullWidthContainer>
        <FullWidthContainer background={'url(/assets/images/BG_matrix.svg)'} isPaddingDisabled={false}>
          <HomeViewerComponent/>
        </FullWidthContainer>
      </div>

      <FullWidthContainer background={'#202121'} isPaddingDisabled={false}>
        <Contact/>
      </FullWidthContainer>
    </div>
  )
}
export default Home
