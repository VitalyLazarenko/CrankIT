import { FC } from 'react'
import Head from 'next/head'
import styles from './posts.module.scss'
import { GetStaticPaths, GetStaticProps } from 'next'
import { postType } from '../../types/app.types/appTypes'

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
  const data: postType[] = await response.json()

  const paths = data.map(( { id } ) => ( {
    params: { id: id.toString() },
  } ))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ( context ) => {
  // @ts-ignore TODO need check this!
  const { id } = context.params
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${ id }`)
  const data = await response.json()

  if ( !data ) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post: data },
  }
}

interface IPostProps {
  post: postType
}

const Post: FC<IPostProps> = ( { post } ) => (
  <>
    <Head>
      <title>Contact page</title>
    </Head>
    <div className={styles.post_wrapper}>
      <h3>{ post.title }</h3>
      <p>{ post.body }</p>
    </div>
  </>
)

export default Post
