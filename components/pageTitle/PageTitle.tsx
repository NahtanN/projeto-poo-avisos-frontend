import styles from './PageTitle.module.css'

interface IPageTitle {
  title: string;
}

const PageTitle = ({ title }: IPageTitle) => {
  return (
    <div className={styles.headerTitle}>
      <h1>{ title }</h1>
    </div>
  )
}

export { PageTitle }