import styles from './SalvarButton.module.css'

const SalvarButton = () => {

  return (
    <div className={styles.containerButton}>

      <button
        className={styles.salvarButton}
      >
        <p>Salvar</p>
      </button>

    </div>
  )

}

export { SalvarButton }