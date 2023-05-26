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

  const showFooter = () => {
    // Scroll position variables
    const windowHeight = window.innerHeight; // Viewport height
    const documentHeight = document.documentElement.scrollHeight; // Document height
    const scrolledToBottom = window.scrollY + windowHeight >= documentHeight;

    const scrolledToTop = window.scrollY === 0;

    // Check if scrolled to top
    if (scrolledToTop) {
      // Scrolled to top, do something
      console.log('Scrolled to the top!');
      toggleHeader(true)
    } else {
      toggleHeader(false)
    }

    // Check if scrolled to bottom
    if (scrolledToBottom) {
      // Scrolled to bottom, do something
      console.log('Scrolled to the bottom!');
      toggleFooter(true)
    } else {
      toggleFooter(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', showFooter);
  }, [])

  return (
    <>
      {children}
      <Footer show={isShowFooter}/>
    </>
  )
}

export default Layout
