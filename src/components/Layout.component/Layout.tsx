import {Footer} from '../Footer.component/Footer'
import useStore from "../../store/store"
import {FC, ReactNode, useEffect, useRef} from 'react'

interface ILayoutProps {
  children: ReactNode
}

const Layout: FC<ILayoutProps> = ({children}) => {

  const toggleFooter = useStore((state) => state.toggleFooter)
  const toggleHeader = useStore((state) => state.toggleHeader)
  const isShowFooter = useStore((state) => state.showFooter)

  const footerContainer = useRef<HTMLDivElement>(null)

  // Toggle show footer
  useEffect(() => {
    console.log(footerContainer.current);
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is now visible on the screen
            toggleFooter(true)
          } else {
            // Element is no longer visible on the screen
            toggleFooter(false)
          }
        });
      },
      {
        root: null, // Set the root element (default is viewport)
        rootMargin: '0px', // Adjust the root margin as needed
        threshold: 0.5, // Specify the intersection threshold (e.g., 0.5 for 50% visibility)
      });

    if (footerContainer.current) {
      observer.observe(footerContainer.current);
      toggleFooter(false)
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (footerContainer.current) {
        observer.unobserve(footerContainer.current);
      }
    };
  }, [footerContainer.current]);

  // Toggle show header
  useEffect(() => {
    window.addEventListener('scroll', showFooter)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  const showFooter = () => {
    const scrolledToTop = window.scrollY === 0

    // Check if scrolled to top
    if (scrolledToTop) {
      toggleHeader(true)
    } else {
      toggleHeader(false)
    }
  }

  return (
    <>
      {children}
      <div ref={footerContainer}>
        <Footer show={isShowFooter}/>
      </div>
    </>
  )
}

export default Layout
