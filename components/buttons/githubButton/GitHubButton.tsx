import PatterStyle from '../PatternStyle.module.css'
import styles from './GitHubButton.module.css'
import { FaGithub } from 'react-icons/fa'

const GitHubButton = () => {
  return (
    <button className={`${PatterStyle.button} ${styles.githubButton}`}>
      <p>GitHub</p>
      <FaGithub size={22} id={styles.github} />
    </button>
  )
}

export { GitHubButton }