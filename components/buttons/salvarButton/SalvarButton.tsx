import styles from './SalvarButton.module.css'

const SalvarButton = () => {

  return (
    <div className={styles.containerButton}>

      <button
        className={styles.salvarButton}
        type="submit"
      >
        <p>Salvar</p>
      </button>

    </div>
  )

}

export { SalvarButton }