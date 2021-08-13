import { useEffect } from 'react'
import { FiChevronUp } from 'react-icons/fi'
import styles from './ScrollToTopButton.module.css'
import getScrollPosition from '../../../utils/getScrollPosition'

const ScrollToTopButton = () => {

  // Quando a página é carregada, adiciona um EventListener no corpo da página
  useEffect(() => {

    var ScrollToTopButton = document.getElementById('wrapper')
    
    if (ScrollToTopButton == null) return
    
    ScrollToTopButton.style.visibility = 'hidden'

    window.addEventListener('scroll', (event) => {

      var topButton = document.getElementById('wrapper')

      if (topButton == null) return

      // Pega a posição do scroll
      const { winScroll } = getScrollPosition()

      if (winScroll < 159) topButton.style.visibility = 'hidden' 
      else if (winScroll >= 159) topButton.style.visibility = 'visible'

    }, false)
  }, [])  
  
  const handleclick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className={styles.wrapper} id='wrapper'>
      <a className={styles.scroll} onClick={handleclick}>
        <FiChevronUp />
      </a>
    </div>
  )
}

export { ScrollToTopButton };
