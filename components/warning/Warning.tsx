import { useEffect } from "react"
import { useState } from "react"
import styles from './Warning.module.css'
import { FaTimes } from 'react-icons/fa'

interface IWarning {
  type: string;
  message: string;
  dispatch: string;
}

const Warning = ({ ...props }) => {

  const {
    id,
    type,
    message,
    dispatch
  } = props

  const [exit, setExit] = useState(false)
  const [intervalID, setIntervalID] = useState<NodeJS.Timer>()
  const [width, setWidth] = useState(0)

  const handleStartTimer = () => {

    // Função executada a cada 20ms.
    // A cada uma iteração o width aumenta em 0.5%, portanto, serão necessárias 200
    // iterações para completar os 100%.
    // 200 * 20 = 4000ms = 4s, tempo necessário para completar a barra
    const id = setInterval(() => {

      setWidth(prev => {

        if (prev < 100)
          return prev + 0.5

        clearInterval(id)
        return prev

      })

    }, 20)


    setIntervalID(id)

  }

  const handlePauseTimer = () => {
    if (intervalID)
      clearInterval(intervalID)
  }

  const handleCloseNotification = () => {

    handlePauseTimer()

    setExit(!exit)

    setTimeout(() => {
      dispatch({
        type: 'REMOVE_WARNING',
        id
      })
    }, 200)

  }

  useEffect(() => {

    if (width === 100)
      handleCloseNotification()

  }, [width])

  useEffect(() => {
    handleStartTimer()
  }, [])

  return (
    <div
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      className={`${styles.warningItem} 
        ${type === 'SUCCESS' ? styles.success : styles.error}
        ${exit ? styles.exit : ''}`
      }
    >

      <div className={styles.btnMessage}>
        
        <p>{message}</p>
        
        <button
          className={`${styles.exitButton} 
            ${type === 'SUCCESS' ? styles.buttonSuccess : styles.buttonError}`
          }
          onClick={handleCloseNotification}
        >
          <FaTimes color='white' />
        </button>

      </div>

      <div
        className={styles.bar}
        style={{
          width: `${width}%`
        }}
      />

    </div>
  )

}

export { Warning }