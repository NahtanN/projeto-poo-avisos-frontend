import styles from './Form.module.css'
import { SalvarButton } from '../buttons/salvarButton/SalvarButton'
import { ChangeEvent, FormEvent, useState } from 'react'
import API from '../../service/api'
import { useRouter } from 'next/dist/client/router'
import validation from '../../validation/validation'
import validationErrorHandler from '../../errors/validationErrorHandler'
import { useWarning } from '../warningsLayout/WarningsLayout'

const Form = () => {
  
  const dispatch = useWarning()
  const history = useRouter()

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: {
      title: '',
      url: '',
    }
  })

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {

    const {
      name,
      value
    } = event.target

    if (name === 'linkTitle') {
      return setFormData({
        ...formData,
        link: {
          ...formData.link,
          title: value
        }
      })
    }

    if (name === 'url') {
      return setFormData({
        ...formData,
        link: {
          ...formData.link,
          url: value
        }
      })
    }

    setFormData({ ...formData, [name]: value })

  }

  const handleTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {

    const {
      name,
      value
    } = event.target

    setFormData({ ...formData, [name]: value })

  }

  const handleSubmit = async (event: FormEvent) => {

    event.preventDefault()

    try {

      await validation(formData)

    } catch(err) {


      const errors = validationErrorHandler(err)

      return dispatch({
        type: 'ERROR',
        message: errors[0]
      })

    }

    try {

      await API.post('/api', formData)

    } catch (err) {

      return dispatch({
        type: 'ERROR',
        message: 'Erro no servidor!'
      })

    }
    
    history.push('/')

  }

  return (
    <form
      onSubmit={handleSubmit}
    >

      <div className={styles.wrapper} >
        <div className={styles.container}>

          <div className={styles.titleForm}>

            <h2>Título</h2>
            <input
              type="text"
              name="title"
              className={styles.titleInput}
              onChange={handleInput}
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
              name="description"
              onChange={handleTextArea}
            ></textarea>


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
              name="linkTitle"
              onChange={handleInput}
            />
            <input
              type="text"
              className={styles.titleInput}
              placeholder="URL"
              name="url"
              onChange={handleInput}
            />


          </div>

        </div>
      </div>

      <SalvarButton />

    </form>
  )

}

export { Form }