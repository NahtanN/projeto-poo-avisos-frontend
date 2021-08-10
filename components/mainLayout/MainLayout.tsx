import styles from './MainLayout.module.css'

const MainLayout = ({ children }: any) => {
  return (
    <main className={styles.main}>
      
      {
        children
      }      

    </main>
  )
}

export { MainLayout }