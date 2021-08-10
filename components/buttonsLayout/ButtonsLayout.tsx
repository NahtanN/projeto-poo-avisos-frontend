import styles from './ButtonsLayout.module.css'
import { GitHubButton } from '../buttons/githubButton/GitHubButton'
import { NovoCadastroButton } from '../buttons/novoCadastroButton/NovoCadastroButton'

const ButtonsLayout = () => {
  return (
    <div className={styles.buttonsDiv}>

      <GitHubButton />
      <NovoCadastroButton />

    </div>
  )
}

export { ButtonsLayout }