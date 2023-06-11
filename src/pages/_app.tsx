import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout.component/Layout'

function MyApp( { Component, pageProps }: AppProps ) {
  return (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"/>
      </Head>
      <main>
        <Component { ...pageProps } />
      </main>
    </Layout>
  )
}

export default MyApp
