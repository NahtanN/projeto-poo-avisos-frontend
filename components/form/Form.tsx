import styles from './Form.module.css'
import { SalvarButton } from '../buttons/salvarButton/SalvarButton'

const Form = () => {

  return (
    <div>
      
      <div className={styles.wrapper} >
        <div className={styles.container}>
          
          <div className={styles.titleForm}>
            
            <h2>Título</h2>
            <input 
              type="text" 
              className={styles.titleInput}
            />

          </div>

        </div>
      </div>
      
      <div className={styles.wrapper} >
        <div className={styles.container}>
          
          <div className={styles.titleForm}>
            
            <h2>Descrição</h2>
            <textarea 
              className={styles.descricaoInput}
            />
            

          </div>

        </div>
      </div>
      
      <div className={styles.wrapper} >
        <div className={styles.container}>
          
          <div className={styles.titleForm}>
            
            <h2>Link</h2>
            <input 
              type="text" 
              className={styles.titleInput}
              placeholder="Titulo do link"
            />
            <input 
              type="text" 
              className={styles.titleInput}
              placeholder="Link"
            />
            

          </div>

        </div>
      </div>

      <SalvarButton />

    </div>
  )

}

export { Form }