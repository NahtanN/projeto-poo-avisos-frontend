import PatterStyle from '../PatternStyle.module.css'
import styles from './NovoCadastroButton.module.css'

const NovoCadastroButton = () => {
  return (
    <button className={`${PatterStyle.button} ${styles.cadastroButton}`}>
      <p>Cadastrar novo aviso</p>
    </button>
  )
}

export { NovoCadastroButton }