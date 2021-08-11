import styles from './Form.module.css'
import { SalvarButton } from '../buttons/salvarButton/SalvarButton'
import { ChangeEvent, ChangeEventHandler, FormEvent, TextareaHTMLAttributes, useState } from 'react'
import API from '../../service/api'
import { useRouter } from 'next/dist/client/router'

const Form = () => {

  const history = useRouter()

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    link: {
      title: '',
      link: '',
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

    if (name === 'link') {
      return setFormData({
        ...formData,
        link: {
          ...formData.link,
          link: value
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

    await API.post('/api', formData)
    
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
              placeholder="Link"
              name="link"
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