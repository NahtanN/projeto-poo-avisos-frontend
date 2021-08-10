import styles from './ButtonsLayout.module.css'
import { GitHubButton } from '../buttons/githubButton/GitHubButton'
import { NovoCadastroButton, IButtonLayout } from '../buttons/novoCadastroButton/NovoCadastroButton'

const ButtonsLayout = ({ title, route }: IButtonLayout) => {
  return (
    <div className={styles.buttonsDiv}>

      <GitHubButton />
      <NovoCadastroButton title={title} route={route}/>

    </div>
  )
}

export { ButtonsLayout }