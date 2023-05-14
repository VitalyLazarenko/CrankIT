import { FC } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import styles from './posts.module.scss'
import { postType } from '../../types/app.types/appTypes'
import { requestConstants } from '../../constants/request.constans'

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(requestConstants.posts)
  const data = await response.json()

  if ( !data ) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts: data },
  }
}

interface IPostsProps {
  posts: postType[]
}

const Posts: FC<IPostsProps> = ( { posts } ) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>

      <h3 className={ styles.title }>This page create with SSG technology:</h3>
      <h3 className={ styles.sub_title }>This technology allows you to generate all the pages of the application,
        <br/>even at the time of the build.
        <br/>
        <br/>This component also uses dynamic creation of links for each post.
      </h3>

      <ul className={ styles.list_wrapper }>
        { posts && posts.map(( { id, title } ) => (
          <li key={ id } className={ styles.list_item }>
            <Link href={ `/posts/${ id }` }>{ title }</Link>
          </li>
        )) }
      </ul>
    </>
  )
}

export default Posts
