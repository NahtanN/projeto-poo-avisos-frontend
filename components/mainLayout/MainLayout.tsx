import styles from './MainLayout.module.css'
import { ButtonsLayout } from '../buttonsLayout/ButtonsLayout'
import { PageTitle } from '../pageTitle/PageTitle'

const MainLayout = () => {
  return (
    <main className={styles.main}>
      
      <ButtonsLayout />

      <PageTitle title="Avisos da Aula de POO"/>

    </main>
  )
}

export { MainLayout }