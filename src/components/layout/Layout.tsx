import Footer from '../footer/Footer'
import useStore from "../../store/store"
import {FC, ReactNode, useEffect} from 'react'

interface ILayoutProps {
  children: ReactNode
}

const Layout: FC<ILayoutProps> = ({children}) => {

  const toggleFooter = useStore((state) => state.toggleFooter)
  const toggleHeader = useStore((state) => state.toggleHeader)
  const isShowFooter = useStore((state) => state.showFooter)

  useEffect(() => {
    window.addEventListener('scroll', showFooter)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  const showFooter = () => {
    const windowHeight = window.innerHeight
    const scrolledToTop = window.scrollY === 0
    const documentHeight = document.documentElement.scrollHeight
    const scrolledToBottom = window.scrollY + windowHeight >= documentHeight - 10

    // Check if scrolled to top
    if (scrolledToTop) {
      toggleHeader(true)
    } else {
      toggleHeader(false)
    }

    // Check if scrolled to bottom
    if (scrolledToBottom) {
      toggleFooter(true)
    } else {
      toggleFooter(false)
    }
  }

  return (
    <>
      {children}
      <Footer show={isShowFooter}/>
    </>
  )
}

export default Layout
