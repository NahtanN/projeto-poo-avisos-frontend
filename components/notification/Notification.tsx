import styles from './Notification.module.css'
import useSWR from 'swr'
import { useState } from 'react'
import { useEffect } from 'react'
import { fetcher } from '../../hooks/useFetch'
import { NotificationSchema, INotification } from '../../schemas/notificationSchema/NotificationSchema'
import { InfiniteScroll } from '../infiniteScroll/InfiniteScroll'

export interface IReqData {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  notifications: INotification[];
}

const Notification = () => {

  const [notifications, setNotifications] = useState<INotification[]>()
  const [page, setPage] = useState(0)

  const { data: reqData } = useSWR<IReqData>(`/api?page=${page}`, fetcher)

  useEffect(() => {

    if (reqData && notifications == undefined) {

      setNotifications(reqData.notifications)
      setPage(page + 1)
    }

  }, [reqData])

  const handleNotifications = (newPosts: INotification[]) => {
    
    if (newPosts.length === 0) return 
    console.log(newPosts)

    setNotifications(prev => {

      if (notifications != undefined){

        setPage(page + 1)

        return [...notifications, ...newPosts]

      }

    })    

  }

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

      <InfiniteScroll 
        reqData={reqData}
        resData={handleNotifications}
      />

    </div>
  )
}

export { Notification }