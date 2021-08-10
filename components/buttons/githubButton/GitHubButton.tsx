import PatterStyle from '../PatternStyle.module.css'
import styles from './GitHubButton.module.css'
import { FaGithub } from 'react-icons/fa'

const GitHubButton = () => {
  return (
    <a
      className={`${PatterStyle.button} ${styles.githubButton}`}
      href="https://github.com/NahtanN"
      target="_blank"
    >
      <p>GitHub</p>
      <FaGithub size={22} id={styles.github} />
    </a>
  )
}

export { GitHubButton }