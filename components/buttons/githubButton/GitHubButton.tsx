import PatterStyle from '../PatternStyle.module.css'
import styles from './GitHubButton.module.css'
import { FaGithub } from 'react-icons/fa'

const GitHubButton = () => {
  return (
    <a
      className={`${PatterStyle.button} ${styles.githubButton}`}
      href="https://github.com/NahtanN/projeto-poo-avisos/blob/main/README.md"
      target="_blank"
      rel="noreferrer"
    >
      <p>GitHub</p>
      <FaGithub size={22} id={styles.github} />
    </a>
  )
}

export { GitHubButton }