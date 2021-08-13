import styles from './Notification.module.css'
import useSWR from 'swr'
import { useState } from 'react'
import { useEffect } from 'react'
import { fetcher } from '../../hooks/useFetch'
import { NotificationSchema, INotification } from '../../schemas/notificationSchema/NotificationSchema'

interface IReqData {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  notifications: INotification[];
}

const Notification = () => {

  const { data: reqData } = useSWR<IReqData>('http://localhost:8080/api?page=0', fetcher)

  const [notifications, setNotifications] = useState<INotification[]>()

  useEffect(() => {

    if (reqData && notifications == undefined) {

      setNotifications(reqData.notifications)

    }

  }, [reqData])

  return (
    <div className={styles.footer}>

      {
        notifications != undefined
          ? (
            notifications.map(notification => {
              return (
                <NotificationSchema
                  id={notification.id}
                  key={notification.id}
                  created={notification.created}
                  description={notification.description}
                  link={notification.link}
                  title={notification.title}
                />
              )
            })
          )
          : ''
      }

    </div>
  )
}

export { Notification }